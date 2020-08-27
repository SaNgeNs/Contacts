import * as types from 'Types';

const saveCardsInLocalStorage = (data) => {
  localStorage.setItem('myCards', JSON.stringify({
    entities: data.entities,
    ids: data.ids
  }));
};

export const initialState = {
  entities: {},
  ids: [],
  isFetching: false,
  isRequestFailed: false,
  isInitialized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD:
    case types.UPDATE_CARD:
    case types.TOGGLE_FAVOURITE: {
      const newState =  {
        ...state,
        entities: {
          ...state.entities,
          ...action.payload.entities
        },
        ids: [...new Set([
          ...state.ids,
          ...action.payload.result
        ])],
      };

      saveCardsInLocalStorage(newState);

      return newState;
    }

    case types.GET_MY_CARDS: {
      return {
        ...state,
        entities: action.payload.entities,
        ids: action.payload.ids,
      };
    }

    default:
      return state;
  }
};
