import React,{useEffect} from 'react';

import CharacterView from './characterView/CharacterView';
import SkillsView from './skillsView/SkillsView';
import DealerView from './characterView/DealerView';


import DungeonsView from './dungeonsView/DungeonsView';
import MissionsView from './missionsView/MissionsView';
import SinglePlayerGameView from './singlePlayerGame/SinglePlayerGameView';
import SingleGame from './SingleGame/SingleGame.js';

import './rightPanel.css';
import SingleGamePopupLose from './SingleGame/SingleGamePopupLose';
import SingleGamePopupWin from './SingleGame/SingleGamePopupWin';
import playerGameValues from '../../../functions/playerGameValues';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerValues } from '../../../actions/playerGame';
import Test from './Test.js';

//
//               
const RightPanel = ({ windowOfElements, user, setWindowOfElements, setButtons }) => {

    return (
        
        <div className='rightPanel'>
                {windowOfElements === 1 && <CharacterView user={user} /> }
                {windowOfElements === 2 &&  <SkillsView />  }
                {windowOfElements === 3 &&  <DealerView user={user} />  }
                {windowOfElements === 4 && <MissionsView setWindowOfElements={setWindowOfElements} setButtons={setButtons} />}
                {windowOfElements === 5 && <DungeonsView />}
                {windowOfElements === 7 && <SinglePlayerGameView setButtons={setButtons} setWindowOfElements={setWindowOfElements}/>}
                {windowOfElements === 6 && <> tu bedzie logout </>}
                {windowOfElements === 10 && <SingleGame setButtons={setButtons} setWindowOfElements={setWindowOfElements}/> }
                {windowOfElements === 20 && <Test/> }
               
            </div>
    );
};

export default RightPanel;