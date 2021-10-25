import React from 'react'
import './CharacterPopup.css';
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
const CharacterPopup = ({ valueOfPoup, showPopup, specyficItem,handleChangeItemIntoUse,slotNumber,sellThisItem,size }) => {
    let typeOfItem;
    const hero = useSelector(state => state.hero)
    let image = showingEquipmentImage(hero.heroClass, specyficItem.typeOfItem, size, specyficItem.numberOfItem);
    const sellingButton = (itemNumber,item) => {
        sellThisItem(itemNumber, item);
        showPopup();
    };
    const changingButton = (itemNumber, item) => {
        handleChangeItemIntoUse(itemNumber, item);
        showPopup();
    }
    switch (specyficItem.typeOfItem) {
        case 'head':
            typeOfItem = 'Hełm';
            break;
        case 'necklace':
            typeOfItem = 'Naszyjnik';
            break;
        case 'armor':
            typeOfItem = 'Zbroja';
            break;
        case 'pants':
            typeOfItem = 'Spodnie';
            break;
        case 'boots':
            typeOfItem = 'Buty';
            break;
        case 'weapon':
            typeOfItem = 'Broń';
            break;
        default:
            break;
    }
     return (valueOfPoup) ? (
        <div className="popup-inventoryItem">
            <div className="inventoryItem-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{specyficItem.nameOfItem}</div>
                <div className="image"><img src={`/images/eq${image}.png`}/></div>
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
                     <button onClick={()=>{changingButton(slotNumber,specyficItem)}}> Załóź</button>
                     <button onClick={()=>{sellingButton(slotNumber,specyficItem)}}> Sprzedaj</button>
                 </div>
            </div>
         </div>
       
     ) : "";
}
export default CharacterPopup;