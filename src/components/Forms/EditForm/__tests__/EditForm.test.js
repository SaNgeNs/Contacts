import React from 'react';
import { fireEvent } from '@testing-library/react';
import customRender from 'Mock/customRender';
import { reduxForm } from 'redux-form';

import EditForm from '../EditForm';

describe('<EditForm />', () => {
  it('should render edit form', () => {
    const Component = reduxForm({
      form: 'editCard',
    })(EditForm);

    const { container, unmount } = customRender(
      <Component
        initialValues={{
          name: '123',
          phone: '123123123',
          email: 'asdsd@masil.asd',
        }}
      />,
    );

    expect(container).toMatchSnapshot();
    unmount();
  });

  it('should called func onClickAfterSubmit: ', () => {
    const Component = reduxForm({
      form: 'editCard',
    })(EditForm);

    const mockFn = jest.fn();

    const { container, unmount } = customRender(
      <Component
        onClickAfterSubmit={mockFn}
        initialValues={{
          name: '123',
          phone: '123123123',
          email: 'asdsd@masil.asd',
        }}
      />,
    );

    const button = container.querySelector('[type="submit"]');
    fireEvent.click(button);

    expect(mockFn).toBeCalledTimes(1);
    unmount();
  });

  it('should return form with default props: ', () => {
    const Component = reduxForm({
      form: 'editCard',
    })(EditForm);

    const { container, unmount } = customRender(
      <Component />,
    );

    expect(container).toMatchSnapshot();
    unmount();
  });
});
