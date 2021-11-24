import React,{useState} from 'react';
import { useSelector} from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import CharacterItemInUsePopup from './CharacterItemInUsePopup';
const CharacterItemInUse = ({ itemRightNow,size }) => {
    const hero = useSelector(state => state.hero)
    let image = showingEquipmentImage(hero.heroClass, itemRightNow.typeOfItem, size, itemRightNow.numberOfItem);
     const [popupValue, setPopupValueset] = useState(false);
    
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }
    return (
        <div className='itemInUse'>
            <img className="imageSkill" src={`/images/eq${image}.png`} alt=""/>
            <button className="active-btn" onClick={() => { showPopup() }}>i</button>
            <CharacterItemInUsePopup size={0} valueOfPopup={popupValue} itemInUse={itemRightNow} showPopup={showPopup}/>
        </div>
    );
};
export default CharacterItemInUse;