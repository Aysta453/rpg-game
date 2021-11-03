import { CREATE, HERO_FETCH,HERO_GOLD_DE,HERO_AFTER_MISSION,HERO_GOLD_INC} from '../constants/actionTypes';

export default (hero = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...hero, action.payload];
    case HERO_GOLD_DE:
      return action.payload;
        case HERO_GOLD_INC:
      return action.payload;
    case HERO_AFTER_MISSION:
      return action.payload;
    case HERO_FETCH:
      return action.payload;
    default:
      return hero;
  }
};

