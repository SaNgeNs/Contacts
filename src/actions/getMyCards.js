import * as types from 'Types';

export const getMyCards = () => async (dispatch) => {
  const myCards = localStorage.getItem('myCards');

  if (myCards) {
    dispatch({
      type: types.GET_MY_CARDS,
      payload: JSON.parse(myCards),
    });
  }
};

export default getMyCards;
