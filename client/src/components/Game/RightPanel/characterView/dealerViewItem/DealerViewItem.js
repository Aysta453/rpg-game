import React, { useState } from 'react';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import DealerViewitemPopup from './DealerViewitemPopup';
const DealerViewItem = ({typeOfPosition, dealerItem, getNewTradeItem, positionOfItem, hero ,buyItem,size}) => {
         const [popupValue, setPopupValueset] = useState(false);
    let image = showingEquipmentImage(hero.heroClass, dealerItem.typeOfItem, size, dealerItem.numberOfItem);
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }
    let id;
    switch (typeOfPosition) {
        case 1:
            id="rightBorder1";
            break;
        case 0:
            id = "noneBorder";
            break;
        default:
            break;
    }
    return (<>
        <div className="dealerViewItem" id={id}>
             <img className="imageDealerItem" src={`/images/eq${image}.png`}  alt=""/>
            <button className="itemDealer-btn" onClick={() => { showPopup() }}>+</button>
            <DealerViewitemPopup size={0} buyItem={buyItem} positionOfItem={positionOfItem} specyficItem={dealerItem} valueOfPopup={popupValue} showPopup={showPopup} />
        </div>
      
        </>
    );
};

export default DealerViewItem;