import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import './index.css';
import RightPanel from './RightPanel/RightPanel.js';
import LeftPanel from './LeftPanel/LeftPanel.js';

import { getinfoabouthero } from '../../actions/hero';
import { getinfoaboutstats } from '../../actions/stats';
import { getiteminuse } from '../../actions/itemInUse';
import { getheroskills } from '../../actions/skills';
import { showmissions } from '../../actions/missions';
import {getalltradeitems } from '../../actions/trades';
import {getheroskillstobattle } from '../../actions/skillsInBattle';
import { getinventory } from '../../actions/inventory';

const Game = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const currentOwner = user?.result?._id;


    const [windowOfElements, setWindowOfElements] = useState(0);
    const [buttonsControl, setButtonsControl] = useState(false);

    const setButtons = () => {
        setButtonsControl(!buttonsControl);
    }

        useEffect(() => {   
        dispatch(getinfoabouthero({ owner: currentOwner }));
        dispatch(getinfoaboutstats({ owner: currentOwner }));
        dispatch(getiteminuse({ owner: currentOwner }));
        dispatch(getheroskills({ owner: currentOwner }));
        dispatch(showmissions({ owner: currentOwner }));
        dispatch(getalltradeitems({ owner: currentOwner }));
        dispatch(getheroskillstobattle({ owner: currentOwner }));
            dispatch(getinventory({ owner: currentOwner }));

        // eslint-disable-next-line
        }, [dispatch]);

    
    return (
        <div className='main'>
            <LeftPanel user={currentOwner} buttonsControl={buttonsControl} setUser={setUser} setWindowOfElements={setWindowOfElements} />
            <RightPanel user={currentOwner} setButtons={setButtons} setUser={setUser} setWindowOfElements={setWindowOfElements} windowOfElements={windowOfElements}/>            
        </div>
    ) 
    };
export default Game;
