import * as types from 'Types';
import normalizr from 'Utils/normalizr';

export const addCard = item => ({
  type: types.ADD_CARD,
  payload: normalizr(item),
});

export default addCard;