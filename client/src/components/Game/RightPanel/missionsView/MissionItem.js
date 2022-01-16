import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../functions/showingEquipmentImage';
const MissionItem = ({ valueOfPopup, missionItem, showPopup }) => {
    const hero = useSelector(state => state.hero);
        const itemInUse = useSelector(state => state.itemInUse);
    let equipmentItem;
    let image = showingEquipmentImage(hero.heroClass, missionItem.typeOfItem, missionItem.numberOfItem);

    let typeOfItem;
    switch (missionItem.typeOfItem) {
        case 'head':
            typeOfItem = 'Hełm';
            equipmentItem = itemInUse.head;
            break;
        case 'necklace':
            typeOfItem = 'Naszyjnik';
            equipmentItem = itemInUse.necklace;
            break;
        case 'armor':
            typeOfItem = 'Zbroja';
            equipmentItem = itemInUse.armor;
            break;
        case 'pants':
            typeOfItem = 'Spodnie';
            equipmentItem = itemInUse.pants;
            break;
        case 'boots':
            typeOfItem = 'Buty';
            equipmentItem = itemInUse.boots;
            break;
        case 'weapon':
            typeOfItem = 'Broń';
            equipmentItem = itemInUse.weapon;
            break;
        default:
            break;
    }

    return (valueOfPopup) ? (
         <div className="popup-missionItem">
            <div className="missionItem-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{missionItem.nameOfItem}</div>
                <div className="image"><img src={`/images/eq${image}.png`} alt=""/></div>
                <div className="typeOfItem">{typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            {missionItem.minAttack !== 0 || missionItem.maxAttack !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span></p></div>
                                     <div className='statValue'><p className={"dmg"}>{missionItem.minAttack} - {missionItem.maxAttack}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{ equipmentItem.minAttack} - {equipmentItem.maxAttack }</span></div>
                                    <div className='diffrenceValue'>
                                        {(missionItem.minAttack + missionItem.maxAttack) >= (equipmentItem.minAttack + equipmentItem.maxAttack) ? (
                                            (equipmentItem.minAttack + equipmentItem.maxAttack) === (missionItem.minAttack + missionItem.maxAttack) ? (<span style={{ color: 'grey' }}>~{(missionItem.minAttack + missionItem.maxAttack) - (equipmentItem.minAttack + equipmentItem.maxAttack)}</span>) :
                                            (<span style={{ color: 'green' }}> + ~{(missionItem.minAttack+missionItem.maxAttack)-(equipmentItem.minAttack+equipmentItem.maxAttack)}</span>)
                                            ):(<span style={{ color: 'red' }}> - ~{((missionItem.minAttack+missionItem.maxAttack)-(equipmentItem.minAttack+equipmentItem.maxAttack))*(-1)}</span>)}
                                    </div>
                                </div>
                            ) : (null)}
                            {missionItem.defensive !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"def"}><span className={"defd"}>Obrona:</span></p></div>
                                     <div className='statValue'><p className={"def"}>{missionItem.defensive}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.defensive}</span></div>
                                    <div className='diffrenceValue'>{(missionItem.defensive - equipmentItem.defensive) >= 0 ? (
                                     (equipmentItem.defensive - missionItem.defensive) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.defensive - missionItem.defensive}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.defensive - missionItem.defensive)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.defensive - missionItem.defensive}</span>)}</div>
                                </div>
                            ) : (null)}
                            {missionItem.strength !== 0 ?(
                                <div className='row'>
                                    <div className='statName'><p className={"str"}><span className={"strd"}>Siła:</span></p></div>
                                     <div className='statValue'><p className={"str"}>{missionItem.strength}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.strength}</span></div>
                                    <div className='diffrenceValue'> {(missionItem.strength - equipmentItem.strength) >= 0 ? (
                                     (equipmentItem.strength - missionItem.strength) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.strength - missionItem.strength}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.strength - missionItem.strength)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.strength - missionItem.strength}</span>)}</div>
                                </div>
                            ) : (null)}  
                            {missionItem.dexterity !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"agl"}><span className={"agld"}>Zręczność:</span></p></div>
                                     <div className='statValue'><p className={"agl"}>{missionItem.dexterity}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.dexterity}</span></div>
                                    <div className='diffrenceValue'>{(missionItem.dexterity - equipmentItem.dexterity) >= 0 ? (
                                     (equipmentItem.dexterity - missionItem.dexterity) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.dexterity - missionItem.dexterity}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.dexterity - missionItem.dexterity)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.dexterity - missionItem.dexterity}</span>)}</div>
                                </div>
                            ) : (null)}
                            {missionItem.intellect !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"int"}><span className={"intd"}>Inteligencja:</span></p></div>
                                     <div className='statValue'><p className={"int"}>{missionItem.intellect}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.intellect}</span></div>
                                    <div className='diffrenceValue'> {(missionItem.intellect - equipmentItem.intellect) >= 0 ? (
                                     (equipmentItem.intellect - missionItem.intellect) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.intellect - missionItem.intellect}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.intellect - missionItem.intellect)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.intellect - missionItem.intellect}</span>)}</div>
                                </div>
                            ) : (null)}
                            {missionItem.stamina !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span></p></div>
                                     <div className='statValue'><p className={"stm"}>{missionItem.stamina}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.stamina}</span></div>
                                    <div className='diffrenceValue'>
                                        {(missionItem.stamina - equipmentItem.stamina) >= 0 ? (
                                     (equipmentItem.stamina - missionItem.stamina) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.stamina - missionItem.stamina}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.stamina - missionItem.stamina)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.stamina - missionItem.stamina}</span>)}</div>
                                </div>
                            ) : (null)}
                            {missionItem.spirit !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"luk"}><span className={"lukd"}>Szczęście:</span></p></div>
                                    <div className='statValue'><p className={"luk"}>{missionItem.spirit}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.spirit}</span></div>
                                     <div className='diffrenceValue'>
                                    {(missionItem.spirit - equipmentItem.spirit) >= 0 ? (
                                     (equipmentItem.spirit - missionItem.spirit) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.spirit - missionItem.spirit}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.spirit - missionItem.spirit)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.spirit - missionItem.spirit}</span>)}</div>
                                </div>
                            ) : (null)}
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
