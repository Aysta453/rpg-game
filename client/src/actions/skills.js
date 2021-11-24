import {FETCH_SKILLS,CREATE_SKILLS,ASSIGN_SKILLS,UNLOCK_SKILLS,ADD_POINT} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createNewskillstoaccount = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNewSkillsToAccount(formData);
    
    dispatch({ type: CREATE_SKILLS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getheroskills = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getHeroSkills(formData);
    dispatch({ type: FETCH_SKILLS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const unlockedskill = (formData) => async (dispatch) => {
  try {
    const { data } = await api.unlockedSkill(formData);
    dispatch({ type: UNLOCK_SKILLS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const assignskill = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const { data } = await api.assignSkill(formData);

    dispatch({ type: ASSIGN_SKILLS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addnewavailablepoint = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addNewAvailablePoint(formData);

    dispatch({ type: ADD_POINT, payload: data });
  } catch (error) {
    console.log(error);
  }
};