import React from 'react';
import customRender from 'Mock/customRender';
import MockStore from 'Mock/store';

import Favourite from '../Favourite';

describe('<Favourite />', () => {
  it('should render favourite page', () => {
    const { container, unmount } = customRender(
      <Favourite />,
      {},
      MockStore,
    );

    expect(container).toMatchSnapshot();
    unmount();
  });
});
