import { FETCH_ALL_TRADE_ITEMS,CREATE_ALL_TRADE_ITEMS,UPDATE_ALL_TRADE_ITEMS,UPDATE_ONE_TRADE_ITEMS} from '../constants/actionTypes';

export default (trades = [], action) => {
  switch (action.type) {
    case CREATE_ALL_TRADE_ITEMS:
      return [...trades, action.payload];
    case FETCH_ALL_TRADE_ITEMS:
      return action.payload;
    case UPDATE_ALL_TRADE_ITEMS:
      return action.payload;
    case UPDATE_ONE_TRADE_ITEMS:
      return action.payload;
    default:
      return trades;
  }
};
