import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import './characterItemInUsePopup.css'
const CharacterItemInUsePopup = ({ valueOfPopup, itemInUse, showPopup, size }) => {

    const hero = useSelector(state => state.hero);

    let image = showingEquipmentImage(hero.heroClass, itemInUse.typeOfItem, size, itemInUse.numberOfItem);

    let typeOfItem;

    switch (itemInUse.typeOfItem) {
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

    return (valueOfPopup) ? (
         <div className="popup-itemInUse">
            <div className="itemInUse-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{itemInUse.nameOfItem}</div>
                <div className="image"><img src={`/images/eq${image}.png`} alt=""/></div>
                <div className="typeOfItem">{typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            {itemInUse.minAttack !== 0 || itemInUse.maxAttack !==0 ? (<p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {itemInUse.minAttack} - {itemInUse.maxAttack}</p>): (null)}
                             {itemInUse.defensive !== 0 ? (<p className={"def"}><span className={"defd"}>Obrona:</span> {itemInUse.defensive}</p>): (null)}
                             {itemInUse.strength !== 0 ? (<p className={"str"}><span className={"strd"}>Siła:</span> {itemInUse.strength}</p>): (null)}
                             {itemInUse.dexterity !== 0 ? (<p className={"agl"}><span className={"agld"}>Zręczność:</span> {itemInUse.dexterity}</p>): (null)}
                             {itemInUse.intellect !== 0 ? (<p className={"int"}><span className={"intd"}>Inteligencja:</span> {itemInUse.intellect}</p>): (null)}
                             {itemInUse.stamina !== 0 ? (<p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {itemInUse.stamina}</p>): (null)}
                             {itemInUse.spirit !== 0 ? (<p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {itemInUse.spirit}</p>): (null)}
                        </div>
                    </div>
                <div className="sellInfo">
                    Możliwa sprzedaż za: {itemInUse.cost} złota
                </div>
                </div>   
            </div>
        </div>
     ) : "";
}

export default CharacterItemInUsePopup
