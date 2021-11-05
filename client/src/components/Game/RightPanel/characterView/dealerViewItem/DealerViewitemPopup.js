import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../../functions/showingEquipmentImage';

const DealerViewitemPopup = ({ valueOfPopup, showPopup, specyficItem, positionOfItem, buyItem ,size}) => {
    const inventory = useSelector(state => state.inventory);
    const hero = useSelector(state => state.hero)

    let image = showingEquipmentImage(hero.heroClass, specyficItem.typeOfItem, size, specyficItem.numberOfItem);
    const buyingButton = (item, positionOfItem) => {
        buyItem(item, positionOfItem);
        showPopup();
    };
    let statementToBuy;
    if ((inventory.firstItem.isEmpty == false && inventory.secondItem.isEmpty == false && inventory.thirdItem.isEmpty == false && inventory.forthItem.isEmpty == false &&
        inventory.fifthItem.isEmpty == false && inventory.sixthItem.isEmpty == false && inventory.seventhItem.isEmpty == false && inventory.eigthItem.isEmpty == false &&
        inventory.ninthItem.isEmpty == false ) || (hero.gold <= 0)|| (hero.gold < specyficItem.cost)) {
        statementToBuy = false;
    } else {
        statementToBuy =true;
    }


     return (valueOfPopup) ? (
        <div className="popup-itemDealer">
            <div className="itemDealer-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{specyficItem.nameOfItem}</div>
                 <div className="image"><img src={`/images/eq${image}.png`} /></div>
                <div className="typeOfItem">{specyficItem.typeOfItem}</div>
                <div className="infoAboutItem">
                    <div className="undertitle">
                        Statystyki
                    </div>
                    <div className="stats">
                        <div className="values">
                            <p className={"dmg"}><span className={"dmgd"}>Obrażenia:</span> {specyficItem.minAttack} - {specyficItem.maxAttack}</p>
                            <p className={"def"}><span className={"defd"}>Obrona:</span> {specyficItem.defensive}</p>
                            <p className={"str"}><span className={"strd"}>Siła:</span> {specyficItem.strength}</p>
                            <p className={"agl"}><span className={"agld"}>Zręczność:</span> {specyficItem.dexterity}</p>
                            <p className={"int"}><span className={"intd"}>Inteligencja:</span> {specyficItem.intellect}</p>
                            <p className={"stm"}><span className={"stmd"}>Wytrzymałość:</span> {specyficItem.stamina}</p>
                            <p className={"luk"} ><span className={"lukd"}>Szczęście:</span> {specyficItem.spirit}</p>
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
