import { FETCH_O_INVENTORY,DELETE_ITEM,CREATE_ITEM,ASSIGN_ITEM_TO_INVENTORY,DELETE_AND_ASSIGN_ITEM_TO_INVENTORY} from '../constants/actionTypes';

export default (item = [], action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return item.map((items) => (items._id === action.payload._id ? action.payload : items));
    case FETCH_O_INVENTORY:
      return action.payload;
    case ASSIGN_ITEM_TO_INVENTORY:
      return item.map((items) => (items._id === action.payload._id ? action.payload : items));
    case DELETE_AND_ASSIGN_ITEM_TO_INVENTORY:
      return item.map((items) => (items._id === action.payload._id ? item.set(action.payload, item.get(action.payload) + 1) : items));
    case DELETE_ITEM:
      return item.map((items) => (items._id === action.payload._id ? action.payload : items));
    default:
      return item;
  }
};
