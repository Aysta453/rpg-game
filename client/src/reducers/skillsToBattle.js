import { CREATE_SKILLS_IN_BATTLE,GET_SKILLS_IN_BATTLE,ASSIGN_TO_SKILLS_IN_BATTLE,UNASSIGN_TO_SKILLS_IN_BATTLE} from '../constants/actionTypes';

export default (skillsToBattle = [], action) => {
  switch (action.type) {
    case CREATE_SKILLS_IN_BATTLE:
      return [...skillsToBattle, action.payload];
     case GET_SKILLS_IN_BATTLE:
      return action.payload;
     case ASSIGN_TO_SKILLS_IN_BATTLE:
      return action.payload;
     case UNASSIGN_TO_SKILLS_IN_BATTLE:
      return action.payload;
    default:
      return skillsToBattle;
  }
};
