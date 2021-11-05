import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './MissionsView.css'
import { setMissionValue } from '../../../../actions/game.js';
import showingEquipmentImage from '../../../../functions/showingEquipmentImage';
import MissionItem from './MissionItem';
const MissionView = ({mission, setWindowOfElements,setButtons,size}) => {
    const dispatch = useDispatch();
    const [popupValue, setPopupValueset] = useState(false);
    
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }
    const hero = useSelector(state => state.hero);
    const inventory =useSelector(state=>state.inventory);
    const setMission = mission;
    const startingMission = () => {
        setWindowOfElements(7);
        dispatch(setMissionValue(mission));
        setButtons()
    }
    let isItemAssigmentToMission = mission.item.isEmpty;
    let image;
    console.log(isItemAssigmentToMission);
    if (isItemAssigmentToMission == false) {
        image = showingEquipmentImage(hero.heroClass, mission.item.typeOfItem, size, mission.item.numberOfItem);
    }
    let valueOfEmptySlot;
    if (isItemAssigmentToMission == false && inventory.firstItem.isEmpty == false && inventory.secondItem.isEmpty == false && inventory.thirdItem.isEmpty == false &&
    inventory.forthItem.isEmpty == false && inventory.fifthItem.isEmpty == false && inventory.sixthItem.isEmpty == false &&inventory.seventhItem.isEmpty == false &&
        inventory.eigthItem.isEmpty == false && inventory.ninthItem.isEmpty == false) {
        valueOfEmptySlot = false;
    }
    else {
        valueOfEmptySlot =true;
    }
    return(<>
        <div className='missionView'>
            <div className='title'>{setMission.missionTitle}</div>
            <div className='description'>{setMission.missionDescription}</div>

            <div className='expPoints'>Doświadczenie</div>
            <div className='expPointsValue'>{setMission.missionRewardExp} XP</div>
            <div className='money'>Waluta</div>
            <div className='moneyValue'>{setMission.missionRewardGold} Złota</div>
            <div className='time'>Czas Podróży</div>
            <div className='timeValue'>{setMission.missionTime} s</div>
            <div className='itemBox'>
                {isItemAssigmentToMission ? (<div className="item"></div>) :
                    (
                        <div className="item">
                              <img className="imageSkill" src={`/images/eq${image}.png`}/>
                                <button className="active-btn" onClick={() => { showPopup() }}>i</button>
                                <MissionItem size={0} valueOfPopup={popupValue} missionItem={mission.item} showPopup={showPopup}/>
                        </div>
                    )
                }
                   
            </div>
            <div className='missionButton'>
               {(valueOfEmptySlot) ?(<button className='missionStartButton'  onClick={() => {
                    startingMission();
                }}>Rozpocznij</button>):(<button className='missionStartButton'  disabled onClick={() => {
                    startingMission();
                }}>Rozpocznij</button>)} 
            </div>
            
            </div>
        </>
    );
};

export default MissionView;

