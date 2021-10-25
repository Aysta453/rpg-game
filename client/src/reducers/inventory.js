import {CHANGE_ITEM_IN_INVENTORY,DELETE_ITEM_FORM_INVENTORY,CREATE_NEW_INVENTORY,ASSIGN_ITEM_TO_INVENTORY,GET_INVENTORY } from '../constants/actionTypes';

export default (inventory = [], action) => {
    switch (action.type) {
        case CHANGE_ITEM_IN_INVENTORY:
            return action.payload;
        case DELETE_ITEM_FORM_INVENTORY:
            return action.payload;
        case CREATE_NEW_INVENTORY:
            return action.payload;
        case ASSIGN_ITEM_TO_INVENTORY:
            return action.payload;
        case GET_INVENTORY:
            return action.payload;
        default:
            return inventory;
  }
};

