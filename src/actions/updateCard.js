import * as types from 'Types';
import normalizr from 'Utils/normalizr';

export const updateCard = item => ({
  type: types.UPDATE_CARD,
  payload: normalizr(item),
});

export default updateCard;