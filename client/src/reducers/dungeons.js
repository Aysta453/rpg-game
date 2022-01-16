import { SHOW_DUNGEONS,CREATE_DUNGEONS,NEW_DUNGEONS} from '../constants/actionTypes';

export default (dungeons = [], action) => {
  switch (action.type) {
    case CREATE_DUNGEONS:
      return [...dungeons, action.payload];
     case SHOW_DUNGEONS:
      return action.payload;
    case NEW_DUNGEONS:
      return action.payload;
    default:
      return dungeons;
  }
};
