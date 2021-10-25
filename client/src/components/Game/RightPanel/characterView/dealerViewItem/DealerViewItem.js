import React, { useState } from 'react';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import DealerViewitemPopup from './DealerViewitemPopup';
const DealerViewItem = ({ dealerItem, getNewTradeItem, positionOfItem, hero ,buyItem,size}) => {
         const [popupValue, setPopupValueset] = useState(false);
    let image = showingEquipmentImage(hero.heroClass, dealerItem.typeOfItem, size, dealerItem.numberOfItem);
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }
    let statementToBuy;
    if (hero.gold >= dealerItem.cost) {
        statementToBuy = true;
    } else {
        statementToBuy = false;
    }

    return (<>
        <div className="dealerViewItem">
             <img className="imageDealerItem" src={`/images/eq${image}.png`}  alt=""/>
            <button className="itemDealer-btn" onClick={() => { showPopup() }}>+</button>
            <DealerViewitemPopup size={0} buyItem={buyItem} positionOfItem={positionOfItem} specyficItem={dealerItem} valueOfPopup={popupValue} showPopup={showPopup} />
        </div>
      
        </>
    );
};

export default DealerViewItem;