import { SET_GAME } from '../constants/actionTypes';


export const setMissionValue = (formData) => async (dispatch) => {
   let { data } = {};
  try {
    data = formData;
    dispatch({ type: SET_GAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};