import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './MissionsView.css'
import MissionView from './MissionView';
import {addrewardsaftermission } from '../../../../actions/hero';
import { newmissions } from '../../../../actions/missions';
import { setPlayerValues } from '../../../../actions/playerGame';

import playerGameValues from '../../../../functions/playerGameValues';
const MissionsView = ({ setWindowOfElements ,setButtons }) => {
    const dispatch = useDispatch();
    const missions = useSelector(state => state.missions);
    const hero = useSelector(state => state.hero);
    const stats = useSelector(state => state.stats);
    const itemInUse = useSelector(state => state.itemInUse);
    const skills = useSelector(state => state.skills);
    let data = playerGameValues(hero, itemInUse, stats,skills.passive);

 
    const submitClick = (a,b) => {
        dispatch(addrewardsaftermission({ owner: hero.owner, Exp: a, amountOfGold: b }));
        dispatch(newmissions({ owner: hero.owner,level:hero.level}));
    }
    useEffect(() => {
        dispatch(setPlayerValues(data));
        // eslint-disable-next-line
    }, [])
    return(<>
        <div className='missionsView'>
            <div className='topic'>Tablica Ogłoszeń</div>
            <div className='missions'>
                <MissionView submitClick={submitClick} missionType={1} setButtons={setButtons} size={1} setWindowOfElements={setWindowOfElements} mission={missions.firstMission}/>
                <MissionView submitClick={submitClick} missionType={2} setButtons={setButtons} size={1} setWindowOfElements={setWindowOfElements} mission={missions.secondMission}/>
                <MissionView submitClick={submitClick} missionType={3} setButtons={setButtons} size={1} setWindowOfElements={setWindowOfElements} mission={missions.thirdMission}/>
              
            </div>
            </div>
        </>
    );
};

export default MissionsView;