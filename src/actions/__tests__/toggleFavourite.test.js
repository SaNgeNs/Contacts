import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockStore from 'Mock/store';
import * as types from 'Types';
import toggleFavourite from '../toggleFavourite';

describe('toggleFavourite action: ', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should add favourite card', async () => {
    const store = mockStore(MockStore);

    await store.dispatch(toggleFavourite({
      id: MockStore.cards.ids[0],
      isFavourite: true,
    }));
    const actionsList = store.getActions();
    const needAction = actionsList.find(action => action.type === types.TOGGLE_FAVOURITE);
    expect(needAction.type).toEqual(types.TOGGLE_FAVOURITE);
  });

  it("should don't dispatch", async () => {
    const store = mockStore(MockStore);

    await store.dispatch(toggleFavourite({}));
    const actionsList = store.getActions();
    const needAction = actionsList.find(action => action.type === types.TOGGLE_FAVOURITE);
    expect(needAction).toEqual(undefined);
  });
});