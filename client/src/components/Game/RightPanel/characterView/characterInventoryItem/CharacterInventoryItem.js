import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import CharacterPopup from './CharacterPopup';
const CharacterInventoryItem = ({typeOfPosition ,valueOfItem, specyficItem, slotNumber,sellThisItem,handleChangeItemIntoUse,size}) => {
    
    const [popupValue, setPopupValueset] = useState(false);
    const hero = useSelector(state => state.hero);
    let image = showingEquipmentImage(hero.heroClass, specyficItem.typeOfItem, size, specyficItem.numberOfItem);
    let id;
    switch (typeOfPosition) {
        case 1:
            id="rightBorder";
            break;
        case 0:
            id = "noneBorder";
            break;
        default:
            break;
    }
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }

    return (valueOfItem) ? (
        <div className="inventoryItem"  id={id}>

        </div>
    ) : (        
            <div className='inventoryItem' id={id}>
                <img className="imageItem" src={`/images/eq${image}.png`} alt=""/>
                <button className="itemInventory-btn" onClick={() => { showPopup() }}>+</button>
                <CharacterPopup size={0} handleChangeItemIntoUse={handleChangeItemIntoUse}  slotNumber={slotNumber} sellThisItem={sellThisItem}  valueOfPoup={popupValue} showPopup={showPopup} specyficItem={specyficItem} />
            </div>
        );
            
};

export default CharacterInventoryItem;
