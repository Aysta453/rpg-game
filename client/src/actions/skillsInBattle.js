import {CREATE_SKILLS_IN_BATTLE ,GET_SKILLS_IN_BATTLE,ASSIGN_TO_SKILLS_IN_BATTLE,UNASSIGN_TO_SKILLS_IN_BATTLE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createskillstobattle = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createSkillsToBattle(formData);
    
    dispatch({ type: CREATE_SKILLS_IN_BATTLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getheroskillstobattle = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getHeroSkillsToBattle(formData);
    dispatch({ type: GET_SKILLS_IN_BATTLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateskillsinbattle = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateSkillsInBattle(formData);
    dispatch({ type: ASSIGN_TO_SKILLS_IN_BATTLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateskillsinbattle2 = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const { data } = await api.updateSkillsInBattle2(formData);
    console.log(data);
    dispatch({ type: UNASSIGN_TO_SKILLS_IN_BATTLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
