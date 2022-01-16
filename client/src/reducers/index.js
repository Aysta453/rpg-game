import { combineReducers } from 'redux';

import auth from './auth.js';
import hero from './hero.js';
import stats from './stats.js';
import item from './item.js';
import itemInUse from './itemInUse.js';
import skills from './skills.js';
import missions from './missions.js';
import trades from './trades.js';
import game from './game.js';
import skillsToBattle from './skillsToBattle.js';
import playerGame from './playerGame.js';
import inventory from './inventory.js';
import error from './error.js';
import dungeons from './dungeons.js';
import rooms from './rooms.js';

export const reducers = combineReducers({auth,hero,stats,item,itemInUse,skills,missions,trades,game,skillsToBattle,playerGame,inventory,error,dungeons,rooms});
