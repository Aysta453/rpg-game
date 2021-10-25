import React from 'react';
import { useDispatch } from 'react-redux';
import './MissionsView.css'
import { setMissionValue } from '../../../../actions/game.js';
const MissionView = ({mission, setWindowOfElements,setButtons}) => {
    const dispatch = useDispatch();
    const setMission = mission;
    const startingMission = () => {
        setWindowOfElements(7);
        dispatch(setMissionValue(mission));
        setButtons()
    }
    return(<>
        <div className='missionView'>
            <div className='title'><h2>{setMission.missionTitle}</h2></div>
            <div className='description'><h3>{setMission.missionDescription}</h3></div>
            <div className='time'>Czas Podróży</div>
            <div className='timeValue'>{setMission.missionTime} s</div>
            <div className='rewards'>Nagrody</div>
            <div className='expPoints'>Doświadczenie</div>
            <div className='expPointsValue'>{setMission.missionRewardExp} Doświadczenia</div>
            <div className='money'>Waluta</div>
            <div className='moneyValue'>{setMission.missionRewardGold} Złota</div>

            <div className='itemBox'>
                <div className="item">

                </div>
            </div>
            <div className='missionButton'>
                <div className='missionStartButton' onClick={() => {
                    startingMission();
                }}>Rozpocznij</div>
            </div>
            
            </div>
        </>
    );
};

export default MissionView;