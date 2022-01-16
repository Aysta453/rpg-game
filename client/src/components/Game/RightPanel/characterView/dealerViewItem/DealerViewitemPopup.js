import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';

const DealerViewitemPopup = ({ valueOfPopup, showPopup, specyficItem, positionOfItem, buyItem}) => {
    const inventory = useSelector(state => state.inventory);
    const hero = useSelector(state => state.hero)
    const itemInUse = useSelector(state => state.itemInUse);
    let equipmentItem;
    let image = showingEquipmentImage(hero.heroClass, specyficItem.typeOfItem, specyficItem.numberOfItem);
    const buyingButton = (item, positionOfItem) => {
        buyItem(item, positionOfItem);
        showPopup();
    };
    let statementToBuy;
    if ((inventory.firstItem.isEmpty === false && inventory.secondItem.isEmpty === false && inventory.thirdItem.isEmpty === false && inventory.forthItem.isEmpty === false &&
        inventory.fifthItem.isEmpty === false && inventory.sixthItem.isEmpty === false && inventory.seventhItem.isEmpty === false && inventory.eigthItem.isEmpty === false &&
        inventory.ninthItem.isEmpty === false ) || (hero.gold <= 0)|| (hero.gold < specyficItem.cost)) {
        statementToBuy = false;
    } else {
        statementToBuy =true;
    }

    let typeOfItem;

    switch (specyficItem.typeOfItem) {
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
        <div className="popup-itemDealer">
            <div className="itemDealer-inner">
                 <button className="close-btn" onClick={() => {
                     showPopup();
                 }}>X</button>
                <div className="title">{specyficItem.nameOfItem}</div>
                 <div className="image"><img src={`/images/eq${image}.png`} alt=""/></div>
                <div className="typeOfItem">{typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                         <div className="values">
                            {specyficItem.minAttack !== 0 || specyficItem.maxAttack !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span></p></div>
                                     <div className='statValue'><p className={"dmg"}>{specyficItem.minAttack} - {specyficItem.maxAttack}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{ equipmentItem.minAttack} - {equipmentItem.maxAttack }</span></div>
                                    <div className='diffrenceValue'>
                                        {(specyficItem.minAttack + specyficItem.maxAttack) >= (equipmentItem.minAttack + equipmentItem.maxAttack) ? (
                                            (equipmentItem.minAttack + equipmentItem.maxAttack) === (specyficItem.minAttack + specyficItem.maxAttack) ? (<span style={{ color: 'grey' }}>~{(specyficItem.minAttack + specyficItem.maxAttack) - (equipmentItem.minAttack + equipmentItem.maxAttack)}</span>) :
                                            (<span style={{ color: 'green' }}> + ~{(specyficItem.minAttack+specyficItem.maxAttack)-(equipmentItem.minAttack+equipmentItem.maxAttack)}</span>)
                                            ):(<span style={{ color: 'red' }}> - ~{((specyficItem.minAttack+specyficItem.maxAttack)-(equipmentItem.minAttack+equipmentItem.maxAttack))*(-1)}</span>)}
                                    </div>
                                </div>
                            ) : (null)}
                            {specyficItem.defensive !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"def"}><span className={"defd"}>Obrona:</span></p></div>
                                     <div className='statValue'><p className={"def"}>{specyficItem.defensive}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.defensive}</span></div>
                                    <div className='diffrenceValue'>{(specyficItem.defensive - equipmentItem.defensive) >= 0 ? (
                                     (equipmentItem.defensive - specyficItem.defensive) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.defensive - specyficItem.defensive}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.defensive - specyficItem.defensive)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.defensive - specyficItem.defensive}</span>)}</div>
                                </div>
                            ) : (null)}
                            {specyficItem.strength !== 0 ?(
                                <div className='row'>
                                    <div className='statName'><p className={"str"}><span className={"strd"}>Siła:</span></p></div>
                                     <div className='statValue'><p className={"str"}>{specyficItem.strength}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.strength}</span></div>
                                    <div className='diffrenceValue'> {(specyficItem.strength - equipmentItem.strength) >= 0 ? (
                                     (equipmentItem.strength - specyficItem.strength) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.strength - specyficItem.strength}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.strength - specyficItem.strength)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.strength - specyficItem.strength}</span>)}</div>
                                </div>
                            ) : (null)}  
                            {specyficItem.dexterity !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"agl"}><span className={"agld"}>Zręczność:</span></p></div>
                                     <div className='statValue'><p className={"agl"}>{specyficItem.dexterity}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.dexterity}</span></div>
                                    <div className='diffrenceValue'>{(specyficItem.dexterity - equipmentItem.dexterity) >= 0 ? (
                                     (equipmentItem.dexterity - specyficItem.dexterity) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.dexterity - specyficItem.dexterity}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.dexterity - specyficItem.dexterity)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.dexterity - specyficItem.dexterity}</span>)}</div>
                                </div>
                            ) : (null)}
                            {specyficItem.intellect !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"int"}><span className={"intd"}>Inteligencja:</span></p></div>
                                     <div className='statValue'><p className={"int"}>{specyficItem.intellect}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.intellect}</span></div>
                                    <div className='diffrenceValue'> {(specyficItem.intellect - equipmentItem.intellect) >= 0 ? (
                                     (equipmentItem.intellect - specyficItem.intellect) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.intellect - specyficItem.intellect}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.intellect - specyficItem.intellect)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.intellect - specyficItem.intellect}</span>)}</div>
                                </div>
                            ) : (null)}
                            {specyficItem.stamina !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span></p></div>
                                     <div className='statValue'><p className={"stm"}>{specyficItem.stamina}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.stamina}</span></div>
                                    <div className='diffrenceValue'>
                                        {(specyficItem.stamina - equipmentItem.stamina) >= 0 ? (
                                     (equipmentItem.stamina - specyficItem.stamina) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.stamina - specyficItem.stamina}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.stamina - specyficItem.stamina)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.stamina - specyficItem.stamina}</span>)}</div>
                                </div>
                            ) : (null)}
                            {specyficItem.spirit !== 0 ? (
                                <div className='row'>
                                    <div className='statName'><p className={"luk"}><span className={"lukd"}>Szczęście:</span></p></div>
                                    <div className='statValue'><p className={"luk"}>{specyficItem.spirit}</p></div>
                                    <div className='equipmentValue'><span style={{ color: 'grey' }}>{equipmentItem.spirit}</span></div>
                                     <div className='diffrenceValue'>
                                    {(specyficItem.spirit - equipmentItem.spirit) >= 0 ? (
                                     (equipmentItem.spirit - specyficItem.spirit) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.spirit - specyficItem.spirit}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.spirit - specyficItem.spirit)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.spirit - specyficItem.spirit}</span>)}</div>
                                </div>
                            ) : (null)}
                         </div>
                    </div>  
                 </div>
                  <div className="sellInfo">
                    Kup za: {specyficItem.cost} złota
                     </div>
                 <div className="inventoryItemButtons">
                     {statementToBuy?(  <button onClick={()=>{buyingButton(specyficItem,positionOfItem)}}> Zakup</button>):(  <button disabled onClick={()=>{buyingButton(specyficItem,positionOfItem)}}> Zakup</button>)}
                   

                 </div>
            </div>
         </div>
       
     ) : "";
}

export default DealerViewitemPopup;
