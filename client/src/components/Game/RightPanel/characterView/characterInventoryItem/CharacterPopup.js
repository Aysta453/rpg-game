import React from 'react'
import './CharacterPopup.css';
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';
const CharacterPopup = ({ valueOfPoup, showPopup, specyficItem,handleChangeItemIntoUse,slotNumber,sellThisItem,size }) => {
 
    const hero = useSelector(state => state.hero)
    const itemInUse = useSelector(state => state.itemInUse);
    let equipmentItem;
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
                             {specyficItem.minAttack !== 0 || specyficItem.maxAttack !== 0 ? (<p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {specyficItem.minAttack} - {specyficItem.maxAttack}
                                 {(specyficItem.minAttack + specyficItem.maxAttack) >= (equipmentItem.minAttack + equipmentItem.maxAttack) ? (
                                     (equipmentItem.minAttack + equipmentItem.maxAttack) === (specyficItem.minAttack + specyficItem.maxAttack) ? (<span style={{ color: 'grey' }}> {equipmentItem.minAttack} - {equipmentItem.maxAttack}<span style={{ color: 'grey' }}>~{(specyficItem.minAttack + specyficItem.maxAttack) - (equipmentItem.minAttack + equipmentItem.maxAttack)}</span></span>) :
                                         (<span style={{color:'grey'}}> { equipmentItem.minAttack} - {equipmentItem.maxAttack }<span style={{ color: 'green' }}> + ~{(specyficItem.minAttack+specyficItem.maxAttack)-(equipmentItem.minAttack+equipmentItem.maxAttack)}</span></span>)
                             ):(<span style={{color:'grey'}}> { equipmentItem.minAttack} - {equipmentItem.maxAttack }<span style={{ color: 'red' }}> - ~{((specyficItem.minAttack+specyficItem.maxAttack)-(equipmentItem.minAttack+equipmentItem.maxAttack))*(-1)}</span></span>)}
                             </p>) : (null)}
                             {specyficItem.defensive !== 0 ? (<p className={"def"}><span className={"defd"}>Obrona:</span> {specyficItem.defensive}
                                 {(specyficItem.defensive - equipmentItem.defensive) >= 0 ? (
                                     (equipmentItem.defensive - specyficItem.defensive) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.defensive - specyficItem.defensive}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.defensive - specyficItem.defensive)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.defensive - specyficItem.defensive}</span>)}
                             </p>) : (null)}
                             {specyficItem.strength !== 0 ? (<p className={"str"}><span className={"strd"}>Siła:</span> {specyficItem.strength}
                                 {(specyficItem.strength - equipmentItem.strength) >= 0 ? (
                                     (equipmentItem.strength - specyficItem.strength) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.strength - specyficItem.strength}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.strength - specyficItem.strength)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.strength - specyficItem.strength}</span>)}
                             </p>) : (null)}
                             {specyficItem.dexterity !== 0 ? (<p className={"agl"}><span className={"agld"}>Zręczność:</span> {specyficItem.dexterity}
                                 {(specyficItem.dexterity - equipmentItem.dexterity) >= 0 ? (
                                     (equipmentItem.dexterity - specyficItem.dexterity) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.dexterity - specyficItem.dexterity}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.dexterity - specyficItem.dexterity)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.dexterity - specyficItem.dexterity}</span>)}
                             </p>) : (null)}
                             {specyficItem.intellect !== 0 ? (<p className={"int"}><span className={"intd"}>Inteligencja:</span> {specyficItem.intellect}
                                    {(specyficItem.intellect - equipmentItem.intellect) >= 0 ? (
                                     (equipmentItem.intellect - specyficItem.intellect) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.intellect - specyficItem.intellect}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.intellect - specyficItem.intellect)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.intellect - specyficItem.intellect}</span>)}
                             </p>) : (null)}
                            
                             {specyficItem.stamina !== 0 ? (<p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {specyficItem.stamina}
                                 {(specyficItem.stamina - equipmentItem.stamina) >= 0 ? (
                                     (equipmentItem.stamina - specyficItem.stamina) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.stamina - specyficItem.stamina}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.stamina - specyficItem.stamina)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.stamina - specyficItem.stamina}</span>)}
                             </p>) : (null)}
                            {specyficItem.spirit !== 0 ? (<p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {specyficItem.spirit}
                                 {(specyficItem.spirit - equipmentItem.spirit) >= 0 ? (
                                     (equipmentItem.spirit - specyficItem.spirit) === 0 ?
                                         (<span style={{ color: 'grey' }}> {equipmentItem.spirit - specyficItem.spirit}</span>)
                                         : (<span style={{color:'green'}}> + {-1*(equipmentItem.spirit - specyficItem.spirit)}</span>)
                             ):(<span style={{color:'red'}}> - {equipmentItem.spirit - specyficItem.spirit}</span>)}
                             </p>) : (null)}
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