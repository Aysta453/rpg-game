import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import './characterItemInUsePopup.css'
const CharacterItemInUsePopup = ({ valueOfPopup, itemInUse, showPopup, size }) => {
    const hero = useSelector(state => state.hero);
    let image = showingEquipmentImage(hero.heroClass, itemInUse.typeOfItem, size, itemInUse.numberOfItem);
    return (valueOfPopup) ? (
         <div className="popup-itemInUse">
            <div className="itemInUse-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{itemInUse.nameOfItem}</div>
                <div className="image"><img src={`/images/eq${image}.png`}/></div>
                <div className="typeOfItem">{itemInUse.typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {itemInUse.minAttack} - {itemInUse.maxAttack}</p>
                            <p className={"def"}><span className={"defd"}>Obrona:</span> {itemInUse.defensive}</p>
                            <p className={"str"}><span className={"strd"}>Siła:</span> {itemInUse.strength}</p>
                            <p className={"agl"}><span className={"agld"}>Zręczność:</span> {itemInUse.dexterity}</p>
                            <p className={"int"}><span className={"intd"}>Inteligencja:</span> {itemInUse.intellect}</p>
                            <p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {itemInUse.stamina}</p>
                            <p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {itemInUse.spirit}</p>
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
