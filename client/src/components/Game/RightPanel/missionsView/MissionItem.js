import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../functions/showingEquipmentImage';
const MissionItem = ({ valueOfPopup, missionItem, showPopup, size }) => {
    const hero = useSelector(state => state.hero);
    let image = showingEquipmentImage(hero.heroClass, missionItem.typeOfItem, size, missionItem.numberOfItem);
    return (valueOfPopup) ? (
         <div className="popup-missionItem">
            <div className="missionItem-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{missionItem.nameOfItem}</div>
                <div className="image"><img src={`/images/eq${image}.png`}/></div>
                <div className="typeOfItem">{missionItem.typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="title">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p>Obrażenia: {missionItem.minAttack} - {missionItem.maxAttack}</p>
                            <p>Obrona: {missionItem.defense}</p>
                            <p>Siła: {missionItem.strength}</p>
                            <p>Zręczność: {missionItem.dexterity}</p>
                            <p>Inteligencja: {missionItem.intellect}</p>
                            <p>Wytrzymałość: {missionItem.stamina}</p>
                            <p>Szczęście: {missionItem.spirit}</p>
                        </div>
                    </div>
                <div className="sellInfo">
                    Możliwa sprzedaż za: {missionItem.cost} złota
                </div>
                </div>   
            </div>
        </div>
     ) : "";
}

export default MissionItem;
