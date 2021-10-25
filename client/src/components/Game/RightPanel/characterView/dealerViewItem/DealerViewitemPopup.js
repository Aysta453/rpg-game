import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';

const DealerViewitemPopup = ({ valueOfPopup, showPopup, specyficItem, positionOfItem, buyItem ,size}) => {
    const inventory = useSelector(state => state.inventory);
    const hero = useSelector(state => state.hero)

    let image = showingEquipmentImage(hero.heroClass, specyficItem.typeOfItem, size, specyficItem.numberOfItem);
    const buyingButton = (item, positionOfItem) => {
        buyItem(item, positionOfItem);
        showPopup();
    };
    let statementToBuy;
    if ((inventory.firstItem.isEmpty == false && inventory.secondItem.isEmpty == false && inventory.thirdItem.isEmpty == false && inventory.forthItem.isEmpty == false &&
        inventory.fifthItem.isEmpty == false && inventory.sixthItem.isEmpty == false && inventory.seventhItem.isEmpty == false && inventory.eigthItem.isEmpty == false &&
        inventory.ninthItem.isEmpty == false ) || (hero.gold <= 0)|| (hero.gold < specyficItem.cost)) {
        statementToBuy = false;
    } else {
        statementToBuy =true;
    }


     return (valueOfPopup) ? (
        <div className="popup-inventoryItem">
            <div className="inventoryItem-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{specyficItem.nameOfItem}</div>
                 <div className="image"><img src={`/images/eq${image}.png`} /></div>
                <div className="typeOfItem">{specyficItem.typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="title">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p>Obrażenia: {specyficItem.minAttack} - {specyficItem.maxAttack}</p>
                            <p>Obrona: {specyficItem.defensive}</p>
                            <p>Siła: {specyficItem.strength}</p>
                            <p>Zręczność: {specyficItem.dexterity}</p>
                            <p>Inteligencja: {specyficItem.intellect}</p>
                            <p>Wytrzymałość: {specyficItem.stamina}</p>
                            <p>Duch: {specyficItem.spirit}</p>
                        </div>
                    </div>  
                 </div>
                  <div className="sellInfo">
                    Możliwa sprzedaż za: {specyficItem.cost} złota
                     </div>
                 <div className="inventoryItemButtons">
                     {statementToBuy?(  <button onClick={()=>{buyingButton(specyficItem,positionOfItem)}}> Zakup</button>):(  <button disabled onClick={()=>{buyingButton(specyficItem,positionOfItem)}}> Zakup</button>)}
                   

                 </div>
            </div>
         </div>
       
     ) : "";
}

export default DealerViewitemPopup;
