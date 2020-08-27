import React from 'react';
import { fireEvent } from '@testing-library/react';
import customRender from 'Mock/customRender';
import MockCards from 'Mock/cards';

import CardList from '../CardList';

describe('<CardList />', () => {
  it('should render card list: ', () => {
    const { container, unmount } = customRender(
      <CardList
        cards={MockCards}
      />
    );

    expect(container).toMatchSnapshot();
    unmount();
  });

  it('add favourite card: ', () => {
    const { container, unmount } = customRender(
      <CardList
        cards={[MockCards[0]]}
      />
    );

    const button = container.querySelector('[aria-label="add to favorites"]');

    fireEvent.click(button);
    expect(container).toMatchSnapshot();
    unmount();
  });

  it('should render edit form: ', async () => {
    const { container, unmount, queryByRole, getByRole } = customRender(
      <CardList
        cards={[MockCards[0]]}
      />
    );

    const button = container.querySelectorAll('[aria-label="edit card"]')[0];

    fireEvent.click(button);
    await new Promise(resolve => setTimeout(resolve, 600));
    expect(container).toMatchSnapshot();

    const presentation = getByRole('presentation');
    const modalBg = presentation.querySelectorAll('div')[0];
    expect(presentation).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    fireEvent.click(modalBg);
    await new Promise(resolve => setTimeout(resolve, 600));
    expect(queryByRole('presentation')).toBe(null);
    expect(container).toMatchSnapshot();

    unmount();
  });

  it('should render empty cards: ', () => {
    const { container, unmount } = customRender(
      <CardList />
    );

    expect(container.childElementCount).toBe(1);
    expect(container).toMatchSnapshot();
    unmount();
  });
});
