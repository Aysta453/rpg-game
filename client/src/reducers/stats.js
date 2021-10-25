import { CREATE,STATS_FETCH,STATS_DEX_IN,STATS_INT_IN,STATS_SPI_IN,STATS_STA_IN,STATS_STR_IN } from '../constants/actionTypes';

export default (stats = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...stats, action.payload];
     case STATS_STR_IN:
      return action.payload;
     case STATS_DEX_IN:
      return action.payload;
     case STATS_INT_IN:
      return action.payload;
     case STATS_SPI_IN:
      return action.payload;
     case STATS_STA_IN:
       return action.payload;
     case STATS_FETCH:
      return action.payload;
    default:
      return stats;
  }
};

