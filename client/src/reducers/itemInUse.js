import { FETCH_O_ITEMS,CHANGE_ITEM,CREATE_O_ITEMS} from '../constants/actionTypes';

export default (itemInUse = [], action) => {
  switch (action.type) {
    case CREATE_O_ITEMS:
      return [...itemInUse, action.payload];
     case FETCH_O_ITEMS:
      return action.payload;
    case CHANGE_ITEM:
      return action.payload;
    default:
      return itemInUse;
  }
};
