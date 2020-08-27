import React from 'react';
import { fireEvent } from '@testing-library/react';
import customRender from 'Mock/customRender';
import { reduxForm } from 'redux-form';

import AddForm from '../AddForm';

describe('<AddForm />', () => {
  it('should render add form', () => {
    const Component = reduxForm({
      form: 'createCard',
      initialValues: {
        name: '',
        phone: '',
        email: '',
      },
    })(AddForm);

    const { container, unmount } = customRender(
      <Component />,
    );

    expect(container).toMatchSnapshot();
    unmount();
  });

  it('should clear input field after submit', () => {
    const Component = reduxForm({
      form: 'createCard',
      initialValues: {
        name: 'qweqwt',
        phone: '123456789',
        email: 'asd@masdil.ru',
      },
    })(AddForm);

    const { container, unmount } = customRender(
      <Component />,
    );

    const button = container.querySelector('[type="submit"]');

    fireEvent.click(button);

    expect(container).toMatchSnapshot();
    unmount();
  });
});
