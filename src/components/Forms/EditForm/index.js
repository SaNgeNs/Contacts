import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';
import { reduxForm } from 'redux-form';

const EditForm = loadable(() => import(/* webpackChunkName: "edit_form_component" */'./EditForm'));

export default withErrorHandler(reduxForm({
  form: 'editCard',
})(EditForm));
