import { CREATE_DUNGEONS,SHOW_DUNGEONS,NEW_DUNGEONS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createdungeons = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createDungeons(formData);

    dispatch({ type: CREATE_DUNGEONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const showdungeons = (formData) => async (dispatch) => {
  try {
    const { data } = await api.showDungeons(formData);
   
    dispatch({ type: SHOW_DUNGEONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const newdungeons = (formData) => async (dispatch) => {
  try {
    const { data } = await api.newDungeons(formData);
   
    dispatch({ type: NEW_DUNGEONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};





