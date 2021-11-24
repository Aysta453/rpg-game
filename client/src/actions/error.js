import { ERROR_HANDLE,CLEAR_ERROR} from '../constants/actionTypes';


export const getErrors = (formData) => async (dispatch) => {
   let { data } = {};
  try {
    data = formData;
    dispatch({ type: ERROR_HANDLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearErrors = () => async (dispatch) => {
   let { data } = {};
  try {
    dispatch({ type: CLEAR_ERROR, payload: data });
  } catch (error) {
    console.log(error);
  }
};