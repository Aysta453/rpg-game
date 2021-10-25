import { SET_GAME} from '../constants/actionTypes';

export default (game = [], action) => {
  switch (action.type) {
    case SET_GAME:
      return action.payload;
    default:
      return game;
  }
};

