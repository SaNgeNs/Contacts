import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';

const FieldInput = loadable(() => import(/* webpackChunkName: "field_input_component" */'./FieldInput'));

export default withErrorHandler(FieldInput);
