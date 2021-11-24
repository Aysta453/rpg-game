import { FETCH_SKILLS,CREATE_SKILLS,UNLOCK_SKILLS,ASSIGN_SKILLS,ADD_POINT} from '../constants/actionTypes';

export default (skills = [], action) => {
  switch (action.type) {
    case CREATE_SKILLS:
      return [...skills, action.payload];
     case UNLOCK_SKILLS:
      return action.payload;
     case ASSIGN_SKILLS:
      return action.payload;
     case FETCH_SKILLS:
      return action.payload;
    case ADD_POINT:
      return action.payload;
    default:
      return skills;
  }
};
