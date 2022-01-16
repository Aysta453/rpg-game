import { CREATE_ROOM,DELETE_ROOM,JOIN_ROOM,LEAVE_ROOM,SHOW_ROOM,SHOW_ROOMS } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const showrooms = () => async (dispatch) => {
  try {
    const { data } = await api.showRooms();

    dispatch({ type: SHOW_ROOMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.createRoom(post);

    dispatch({ type: CREATE_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const showroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.showRoom(post);

    dispatch({ type: SHOW_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.deleteRoom(post);

    dispatch({ type: DELETE_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const joinroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.joinRoom(post);

    dispatch({ type: JOIN_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const leaveroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.leaveRoom(post);

    dispatch({ type: LEAVE_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};