import { CREATE, HERO_FETCH,HERO_GOLD_DE,HERO_AFTER_MISSION } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createnewhero = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNewHero(formData);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getinfoabouthero = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getInfoAboutHero(formData);
    dispatch({ type: HERO_FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const decreasegold = (formData) => async (dispatch) => {
  try {
    const { data } = await api.decreaseGold(formData);
    dispatch({ type: HERO_GOLD_DE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const increasegold = (formData) => async (dispatch) => {
  try {
    const { data } = await api.increaseGold(formData);
    dispatch({ type: HERO_GOLD_DE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addrewardsaftermission = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addRewardsAfterMission(formData);
    dispatch({ type: HERO_AFTER_MISSION, payload: data });
  } catch (error) {
    console.log(error);
  }
};





