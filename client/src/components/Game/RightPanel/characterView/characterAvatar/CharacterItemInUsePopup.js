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
                    <div className="title">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p>Obrażenia: {itemInUse.minAttack} - {itemInUse.maxAttack}</p>
                            <p>Obrona: {itemInUse.defense}</p>
                            <p>Siła: {itemInUse.strength}</p>
                            <p>Zręczność: {itemInUse.dexterity}</p>
                            <p>Inteligencja: {itemInUse.intellect}</p>
                            <p>Wytrzymałość: {itemInUse.stamina}</p>
                            <p>Szczęście: {itemInUse.spirit}</p>
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
