import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockStore from 'Mock/store';
import MockCards from 'Mock/cards';
import * as types from 'Types';
import addCard from '../addCard';

describe('addCard action: ', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch add new card', async () => {
    const store = mockStore(MockStore);
    await store.dispatch(addCard(MockCards[0]));
    const actionsList = store.getActions();
    const needAction = actionsList.find(action => action.type === types.ADD_CARD);
    expect(needAction.type).toEqual(types.ADD_CARD);
  });
});
