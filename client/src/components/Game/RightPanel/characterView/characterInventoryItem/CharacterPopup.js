import React from 'react'
import './CharacterPopup.css';
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
const CharacterPopup = ({ valueOfPoup, showPopup, specyficItem,handleChangeItemIntoUse,slotNumber,sellThisItem,size }) => {
 
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
    let typeOfItem;
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
                <div className="image"><img src={`/images/eq${image}.png`} alt=""/></div>
                <div className="typeOfItem">{typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            {specyficItem.minAttack !== 0 || specyficItem.maxAttack !==0 ? (<p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {specyficItem.minAttack} - {specyficItem.maxAttack}</p>): (null)}
                             {specyficItem.defensive !== 0 ? (<p className={"def"}><span className={"defd"}>Obrona:</span> {specyficItem.defensive}</p>): (null)}
                             {specyficItem.strength !== 0 ? (<p className={"str"}><span className={"strd"}>Siła:</span> {specyficItem.strength}</p>): (null)}
                             {specyficItem.dexterity !== 0 ? (<p className={"agl"}><span className={"agld"}>Zręczność:</span> {specyficItem.dexterity}</p>): (null)}
                             {specyficItem.intellect !== 0 ? (<p className={"int"}><span className={"intd"}>Inteligencja:</span> {specyficItem.intellect}</p>): (null)}
                             {specyficItem.stamina !== 0 ? (<p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {specyficItem.stamina}</p>): (null)}
                             {specyficItem.spirit !== 0 ? (<p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {specyficItem.spirit}</p>): (null)}
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