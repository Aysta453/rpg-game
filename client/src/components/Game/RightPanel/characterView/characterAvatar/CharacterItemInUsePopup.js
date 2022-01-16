import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
import './characterItemInUsePopup.css'
const CharacterItemInUsePopup = ({ valueOfPopup, itemInUse, showPopup }) => {

    const hero = useSelector(state => state.hero);

    let image = showingEquipmentImage(hero.heroClass, itemInUse.typeOfItem, itemInUse.numberOfItem);

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
                            {itemInUse.minAttack !== 0 || itemInUse.maxAttack !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> </p></div>
                                    <div className='statValue'><p className={"dmg"}>{itemInUse.minAttack} - {itemInUse.maxAttack}</p></div>
                                </div>
                            ) : (null)}
                            {itemInUse.defensive !== 0 ? (
                                <div className='row'>
                                    <div className='statName'> <p className={"def"}><span className={"defd"}>Obrona:</span></p></div>
                                    <div className='statValue'> <p className={"def"}>{itemInUse.defensive}</p></div>
                                </div>
                            ) : (null)}
                            {itemInUse.strength !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"str"}><span className={"strd"}>Siła:</span></p></div>
                                    <div className='statValue'><p className={"str"}>{itemInUse.strength}</p></div>
                                </div>
                            ) : (null)}
                            {itemInUse.dexterity !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"agl"}><span className={"agld"}>Zręczność:</span></p></div>
                                    <div className='statValue'><p className={"agl"}> {itemInUse.dexterity}</p></div>
                                </div>
                            ) : (null)}
                            {itemInUse.intellect !== 0 ? (
                                <div className='row'>
                                    <div className='statName'> <p className={"int"}><span className={"intd"}>Inteligencja:</span></p></div>
                                    <div className='statValue'><p className={"int"}>{itemInUse.intellect}</p></div>
                                </div>
                            ) : (null)}
                            {itemInUse.stamina !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span></p></div>
                                    <div className='statValue'><p className={"stm"}>{itemInUse.stamina}</p></div>
                                </div>
                            ) : (null)}
                            {itemInUse.spirit !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"luk"}><span className={"lukd"}>Szczęście:</span></p></div>
                                    <div className='statValue'><p className={"luk"} >{itemInUse.spirit}</p></div>
                                </div>
                             ) : (null)}
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
