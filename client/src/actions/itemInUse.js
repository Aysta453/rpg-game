import { FETCH_O_ITEMS, CHANGE_ITEM, CREATE_O_ITEMS } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const createnewiteminuse = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNewItemInUse(formData);

    dispatch({ type: CREATE_O_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getiteminuse = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getItemInUse(formData);

    dispatch({ type: FETCH_O_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const changeiteminuse = (formData) => async (dispatch) => {
  try {
    const { data } = await api.changeItemInUse(formData);

    dispatch({ type: CHANGE_ITEM, payload: data });
  } catch (error) {
    console.log(error);
  }
};
