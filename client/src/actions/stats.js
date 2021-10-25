import { CREATE,STATS_FETCH,
STATS_STR_IN,STATS_DEX_IN,STATS_INT_IN,STATS_STA_IN,STATS_SPI_IN } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createnewstats = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createNewStats(formData);
      dispatch({ type: CREATE, data });
      
      
       
    } catch (error) {
        console.log(error);
    }
};

export const getinfoaboutstats = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getInfoAboutStats(formData);
    dispatch({ type: STATS_FETCH, payload: data });
    console.log({ data });
  } catch (error) {
    console.log(error);
  }
};


export const increasestatstrength = (formData) => async (dispatch) => {
  try {
    const { data } = await api.increaseStatStrength(formData);
    dispatch({ type: STATS_STR_IN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const increasestatdexterity = (formData) => async (dispatch) => {
  try {
    const { data } = await api.increaseStatDexterity(formData);
    dispatch({ type: STATS_DEX_IN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const increasestatintellect = (formData) => async (dispatch) => {
  try {
    const { data } = await api.increaseStatIntellect(formData);
    dispatch({ type: STATS_INT_IN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const increasestatstamina = (formData) => async (dispatch) => {
  try {
    const { data } = await api.increaseStatStamina(formData);
    dispatch({ type: STATS_STA_IN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const increasestatspirit = (formData) => async (dispatch) => {
  try {
    const { data } = await api.increaseStatSpirit(formData);
    dispatch({ type: STATS_SPI_IN, payload: data });
  } catch (error) {
    console.log(error);
  }
};





