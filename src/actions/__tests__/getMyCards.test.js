import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockStore from 'Mock/store';
import * as types from 'Types';
import getMyCards from '../getMyCards';

describe('getMyCards action: ', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch my cards', async () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({
      entities: MockStore.cards.entities,
      ids: MockStore.cards.ids,
    }));

    const store = mockStore(MockStore);
    await store.dispatch(getMyCards());
    const actionsList = store.getActions();
    const needAction = actionsList.find(action => action.type === types.GET_MY_CARDS);
    expect(needAction.type).toEqual(types.GET_MY_CARDS);
  });
});