import { SET_PLAYER } from '../constants/actionTypes';



export const setPlayerValues = (formData) => async (dispatch) => {
   let { data } = {};
  try {
    data = formData;
    dispatch({ type: SET_PLAYER, payload: data });
  } catch (error) {
    console.log(error);
  }
};