import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';
import { reduxForm } from 'redux-form';

const AddForm = loadable(() => import(/* webpackChunkName: "add_form_component" */'./AddForm'));

export default withErrorHandler(reduxForm({
  form: 'createCard',
  initialValues: {
    name: '',
    phone: '',
    email: '',
  },
})(AddForm));
