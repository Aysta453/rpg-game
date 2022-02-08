import { FETCH_O_INVENTORY, DELETE_ITEM, CREATE_ITEM, DELETE_AND_ASSIGN_ITEM_TO_INVENTORY } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getallitems = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getAllItems(formData);

    dispatch({ type: FETCH_O_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletethisitem = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteThisItem(formData);

    dispatch({ type: DELETE_ITEM, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createnewitem = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNewItem(formData);

    dispatch({ type: CREATE_ITEM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteandassignitem = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteAndAssignItem(formData);

    dispatch({ type: DELETE_AND_ASSIGN_ITEM_TO_INVENTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
