import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import convertingTime from '../../../../functions/convertingTime';
import './SinglePlayerGameView.css';
const SinglePlayerGameView = ({setWindowOfElements ,setButtons}) => {
    const game = useSelector(state => state.game);
    const [time, setTime] = useState(game.missionTime);
    const [timeBar, setTimeBar] = useState(0);
    let width = 1300;
    let progress = width / game.missionTime;
    const cancelingMission = () => {
        setWindowOfElements(4);
        setButtons();
    }
     const sleep = (ms) => {
         return new Promise(resolve => setTimeout(resolve, ms));
        }

    useEffect(() => {
        setInterval(() => {
              setTimeBar(timeBar => timeBar + progress);
            setTime(time => time - 1);
          
        }, 1 * 1000);
    }, []);
    useEffect(() => {
        if (time == 0) {
            sleep(1000).then(() => {
                setWindowOfElements(10);
            });
        }
    }, [time]);
    console.log(game);
    return(<>
        <div className="singleGameWaitingView">
            <div className="title">
                {game.missionTitle}
            </div>
            <div className="description">
                {game.missionDescription}
            </div>
            <div className="time">
                <div className="progress-div-wait" style={{ width: width }}>
                    <div style={{ width: `${timeBar}px` }} className="progresswait"/>
                </div>
                <div className="progress-div-time-wait">
                    {convertingTime(time)} / {convertingTime(game.missionTime)}
                </div>
                 
            </div>
            <div className="stopBoxButton">
                <button onClick={()=>{cancelingMission()}}>przerwij</button>
            </div>
        </div>
        </>
    );
};

export default SinglePlayerGameView; 