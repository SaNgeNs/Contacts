import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockStore from 'Mock/store';
import MockCards from 'Mock/cards';
import * as types from 'Types';
import updateCard from '../updateCard';

describe('updateCard action: ', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch update card', async () => {
    const store = mockStore(MockStore);
    await store.dispatch(updateCard(MockCards[0]));
    const actionsList = store.getActions();
    const needAction = actionsList.find(action => action.type === types.UPDATE_CARD);
    expect(needAction.type).toEqual(types.UPDATE_CARD);
  });
});
