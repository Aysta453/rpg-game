import { SET_PLAYER} from '../constants/actionTypes';

export default (player = [], action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.payload;
    default:
      return player;
  }
};

