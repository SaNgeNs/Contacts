import React from 'react';
import customRender from 'Mock/customRender';
import MockStore from 'Mock/store';

import Main from '../index';

describe('<Main />', () => {
  it('should render main page', () => {
    const { container, unmount } = customRender(
      <Main />,
      {},
      MockStore,
    );

    expect(container).toMatchSnapshot();
    unmount();
  });
});
