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
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {missionItem.minAttack} - {missionItem.maxAttack}</p>
                            <p className={"def"}><span className={"defd"}>Obrona:</span> {missionItem.defensive}</p>
                            <p className={"str"}><span className={"strd"}>Siła:</span> {missionItem.strength}</p>
                            <p className={"agl"}><span className={"agld"}>Zręczność:</span> {missionItem.dexterity}</p>
                            <p className={"int"}><span className={"intd"}>Inteligencja:</span> {missionItem.intellect}</p>
                            <p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {missionItem.stamina}</p>
                            <p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {missionItem.spirit}</p>
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
