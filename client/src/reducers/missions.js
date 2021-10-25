import { SHOW_MISSIONS,CREATE_MISSIONS,NEW_MISSIONS} from '../constants/actionTypes';

export default (missions = [], action) => {
  switch (action.type) {
    case CREATE_MISSIONS:
      return [...missions, action.payload];
     case SHOW_MISSIONS:
      return action.payload;
    case NEW_MISSIONS:
      return action.payload;
    default:
      return missions;
  }
};
