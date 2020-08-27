import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';

const CardList = loadable(() => import(/* webpackChunkName: "card_list_component" */'./CardList'));

export default withErrorHandler(CardList);
