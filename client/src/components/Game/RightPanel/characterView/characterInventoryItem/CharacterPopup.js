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
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {specyficItem.minAttack} - {specyficItem.maxAttack}</p>
                            <p className={"def"}><span className={"defd"}>Obrona:</span> {specyficItem.defensive}</p>
                            <p className={"str"}><span className={"strd"}>Siła:</span> {specyficItem.strength}</p>
                            <p className={"agl"}><span className={"agld"}>Zręczność:</span> {specyficItem.dexterity}</p>
                            <p className={"int"}><span className={"intd"}>Inteligencja:</span> {specyficItem.intellect}</p>
                            <p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {specyficItem.stamina}</p>
                            <p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {specyficItem.spirit}</p>
                        </div>
                    </div>  
                 </div>
                  <div className="sellInfo">
                    Możliwa sprzedaż za: {specyficItem.cost} złota
                     </div>
                 <div className="inventoryItemButtons">
                     <button id={"puton"} onClick={()=>{changingButton(slotNumber,specyficItem)}}> Załóź</button>
                     <button id={"sell"} onClick={()=>{sellingButton(slotNumber,specyficItem)}}> Sprzedaj</button>
                 </div>
            </div>
         </div>
       
     ) : "";
}
export default CharacterPopup;