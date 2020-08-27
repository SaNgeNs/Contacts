import * as types from 'Types';
import normalizr from 'Utils/normalizr';

export const toggleFavourite = ({
  id = '',
  isFavourite = false,
}) => (dispatch, getState) => {
  const state = getState();
  const card = state.cards.entities[id];

  if (card) {
    dispatch({
      type: types.TOGGLE_FAVOURITE,
      payload: normalizr({
        ...card,
        isFavourite,
      }),
    });
  }
};

export default toggleFavourite;
