import React,{useState} from 'react'
import GroupViewPopup from './GroupViewPopup';

const GroupView = () => {
    const [popupValue, setPopupValueset] = useState(false);
        const showPopup = () => {
        setPopupValueset(!popupValue);
    }
    return (
        <div className='groupView'>
           <div className='groupLeader'>Aysta</div>
           <div className='groupMissionName'>Szmaragdowa Wieża</div>
            <div className='missionInfo'><button onClick={() => { showPopup() }}>Szczegóły misji</button></div>
            <GroupViewPopup valueOfPopup={popupValue} showPopup={showPopup}/>
           <div className='groupSize'>4/5</div>
           <div className='actionJoinButton'><button onClick={()=>{}}>Dołącz</button></div>

        </div>
    )
}
export default GroupView;