import React from 'react';
import customRender from 'Mock/customRender';

import Header from '../Header';

describe('<Header />', () => {
  it('should render component', () => {
    const { container, unmount } = customRender(
      <Header />
    );

    expect(container).toMatchSnapshot();
    unmount();
  });
});
