import React from 'react';
import customRender from 'Mock/customRender';

import App from '../App';

describe('<App />', () => {
  it('should render component', () => {
    const { container, unmount } = customRender(
      <App />
    );

    expect(container).toMatchSnapshot();
    unmount();
  });
});
