import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../functions/showingEquipmentImage';
const MissionItem = ({ valueOfPopup, missionItem, showPopup, size }) => {
    const hero = useSelector(state => state.hero);
    let image = showingEquipmentImage(hero.heroClass, missionItem.typeOfItem, size, missionItem.numberOfItem);

    let typeOfItem;
    switch (missionItem.typeOfItem) {
        case 'head':
            typeOfItem = 'Hełm';
            break;
        case 'necklace':
            typeOfItem = 'Naszyjnik';
            break;
        case 'chest':
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
         <div className="popup-missionItem">
            <div className="missionItem-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{missionItem.nameOfItem}</div>
                <div className="image"><img src={`/images/eq${image}.png`}/></div>
                <div className="typeOfItem">{typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                             {missionItem.minAttack !== 0 || missionItem.maxAttack !==0 ? (<p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {missionItem.minAttack} - {missionItem.maxAttack}</p>): (null)}
                             {missionItem.defensive !== 0 ? (<p className={"def"}><span className={"defd"}>Obrona:</span> {missionItem.defensive}</p>): (null)}
                             {missionItem.strength !== 0 ? (<p className={"str"}><span className={"strd"}>Siła:</span> {missionItem.strength}</p>): (null)}
                             {missionItem.dexterity !== 0 ? (<p className={"agl"}><span className={"agld"}>Zręczność:</span> {missionItem.dexterity}</p>): (null)}
                             {missionItem.intellect !== 0 ? (<p className={"int"}><span className={"intd"}>Inteligencja:</span> {missionItem.intellect}</p>): (null)}
                             {missionItem.stamina !== 0 ? (<p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {missionItem.stamina}</p>): (null)}
                             {missionItem.spirit !== 0 ? (<p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {missionItem.spirit}</p>): (null)}
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
