import { CREATE_MISSIONS, SHOW_MISSIONS, NEW_MISSIONS } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const createmissions = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createMissions(formData);

    dispatch({ type: CREATE_MISSIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const showmissions = (formData) => async (dispatch) => {
  try {
    const { data } = await api.showMissions(formData);

    dispatch({ type: SHOW_MISSIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const newmissions = (formData) => async (dispatch) => {
  try {
    const { data } = await api.newMissions(formData);

    dispatch({ type: NEW_MISSIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
