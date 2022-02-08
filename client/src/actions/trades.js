import { CREATE_ALL_TRADE_ITEMS, FETCH_ALL_TRADE_ITEMS, UPDATE_ALL_TRADE_ITEMS, UPDATE_ONE_TRADE_ITEMS } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const createalltradeitems = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createAllTradeItems(formData);
    dispatch({ type: CREATE_ALL_TRADE_ITEMS, data });
  } catch (error) {
    console.log(error);
  }
};

export const getalltradeitems = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getAllTradeItems(formData);
    dispatch({ type: FETCH_ALL_TRADE_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatealltradeitems = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateAllTradeItems(formData);
    dispatch({ type: UPDATE_ALL_TRADE_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateonetradeitems = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateOneTradeItems(formData);
    dispatch({ type: UPDATE_ONE_TRADE_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
