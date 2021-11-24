import { ERROR_HANDLE,CLEAR_ERROR} from '../constants/actionTypes';

export default (error = null, action) => {
  switch (action.type) {
    case ERROR_HANDLE:
        return action.payload;
    case CLEAR_ERROR:
        return null;
    default:
      return error;
  }
};

