import { CHANGE_ITEM_IN_INVENTORY, DELETE_ITEM_FORM_INVENTORY, CREATE_NEW_INVENTORY, ASSIGN_ITEM_TO_INVENTORY, GET_INVENTORY } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const createnewinventory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNewInventory(formData);

    dispatch({ type: CREATE_NEW_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const assignitemtoinventory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.assignItemToInventory(formData);

    dispatch({ type: ASSIGN_ITEM_TO_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getinventory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getInventory(formData);

    dispatch({ type: GET_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleitemfrominventory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteItemFromInventory(formData);

    dispatch({ type: DELETE_ITEM_FORM_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const changeitemininventory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.changeItemInInventory(formData);

    dispatch({ type: CHANGE_ITEM_IN_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
