import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CharacterAvatar from "./characterAvatar/CharacterAvatar";
import CharacterItemInUse from './characterAvatar/CharacterItemInUse';

import CharacterInventoryItem from './characterInventoryItem/CharacterInventoryItem';

import CharStatExtended from './charStatExtended/CharStatExtended';

import { decreasediamond, decreasegold, increasegold } from '../../../../actions/hero';

import { getinventory,assignitemtoinventory,deleitemfrominventory,changeitemininventory } from '../../../../actions/inventory.js';

import {updatealltradeitems,updateonetradeitems } from '../../../../actions/trades.js';


import { changeiteminuse } from '../../../../actions/itemInUse';
import './characterView.css';
import './dealerViewItem/dealerViewItems.css';
import DealerViewItem from './dealerViewItem/DealerViewItem';
import playerGameValues from '../../../../functions/playerGameValues';
import { setPlayerValues } from '../../../../actions/playerGame';




const DealerView = (user) => {

    const itemInUse = useSelector(state => state.itemInUse);

    const hero = useSelector(state => state.hero);
    const trades = useSelector(state => state.trades);
    const inventory = useSelector(state => state.inventory);
    const stats = useSelector(state => state.stats);
    const skills = useSelector(state => state.skills);
    let playerStats = playerGameValues(hero, itemInUse, stats,skills.passive);
    const dispatch = useDispatch();
    
    const getNewTradeItems = () => {
        dispatch(decreasediamond({owner:user.user,amountOfDiamonds:1}))
        dispatch(updatealltradeitems({ owner:user.user, heroClass:hero.heroClass, level:hero.level }));
    }
    const buyItem = (item,positionOfTradeItem) => {
        let newCost = Math.round(item.cost / 10);
        let { data } = {};
          data = {
            nameOfItem: item.nameOfItem,
            typeOfItem: item.typeOfItem,
            minAttack: item.minAttack,
            maxAttack: item.maxAttack,
            defensive: item.defensive,
            strength: item.strength,
            dexterity: item.dexterity,
            intellect: item.intellect,
            stamina: item.stamina,
            spirit: item.spirit,
            cost: newCost,
            isEmpty: item.isEmpty,
            numberOfItem:item.numberOfItem,
        };
        dispatch(decreasegold({ owner: user.user, amountOfGold: item.cost }));
        dispatch(updateonetradeitems({ owner: user.user, heroClass: hero.heroClass, level: hero.level, numberOfTradeItem: positionOfTradeItem }));
        dispatch(assignitemtoinventory({ owner: user.user, item: data }));

    };
    

    const sellThisItem = (slotNumber, item) => {
        let cost = item.cost;
        dispatch(deleitemfrominventory({ owner: user.user, itemNumber: slotNumber }));
        dispatch(increasegold({ owner: user.user, amountOfGold: cost }));
        
    }
    let statementToChangeItems;
    if (hero.diamond > 0) {
        statementToChangeItems = true;

    } else {
        statementToChangeItems = false;
    }


    const handleChangeItemIntoUse = (slotNumber,item) => {
        let typeOfItem = item.typeOfItem;
        let itemToInventory = {};
        switch (typeOfItem) {
            case 'head':
                itemToInventory = itemInUse.head;
                break;
            case 'necklace':
                itemToInventory = itemInUse.necklace;
                break;
            case 'armor':
                itemToInventory = itemInUse.armor;
                break;
            case 'pants':
                itemToInventory = itemInUse.pants;
                break;
            case 'boots':
                itemToInventory = itemInUse.boots;
                break;
            case 'weapon':
                itemToInventory = itemInUse.weapon;
                break;
            default:
                break;
        };
        dispatch(changeitemininventory({ owner: user.user, itemNumber: slotNumber, item: itemToInventory }));
        dispatch(changeiteminuse({ owner: user.user, item: item }));
    

    
    };


    useEffect(() => {
        
     dispatch(getinventory({ owner: user.user }));
      // eslint-disable-next-line
    }, [dispatch]);
    useEffect(() => {
               dispatch(setPlayerValues(playerStats));
    })
    

    return(<>
        <div className='characterView'>
              <div className='FirstBox'>
                    <div className="left">
                    <CharacterItemInUse  itemRightNow={itemInUse.head}/>
                        <CharacterItemInUse  itemRightNow={itemInUse.necklace}/>
                        <CharacterItemInUse  itemRightNow={itemInUse.armor}/>
                    </div>
                    <div className="middle">
                        <CharacterAvatar />
                    </div>
                    <div className="right">
                        <CharacterItemInUse  itemRightNow={itemInUse.pants}/>
                        <CharacterItemInUse  itemRightNow={itemInUse.boots}/>
                        <CharacterItemInUse  itemRightNow={itemInUse.weapon}/>
                    </div>
            </div>
            <div className='thirdBox'>
                <div className='row' id="bottomBorder">
                    <CharacterInventoryItem typeOfPosition={1} slotNumber={1} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.firstItem.isEmpty} specyficItem={inventory.firstItem} />                
                     <CharacterInventoryItem typeOfPosition={1} slotNumber={2} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.secondItem.isEmpty} specyficItem={inventory.secondItem} />
                     <CharacterInventoryItem typeOfPosition={0} slotNumber={3} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.thirdItem.isEmpty} specyficItem={inventory.thirdItem} />
                </div>
                <div className='row' id="bottomBorder">
                    <CharacterInventoryItem typeOfPosition={1} slotNumber={4} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.forthItem.isEmpty} specyficItem={inventory.forthItem} />
                     <CharacterInventoryItem typeOfPosition={1} slotNumber={5} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.fifthItem.isEmpty} specyficItem={inventory.fifthItem} />
                     <CharacterInventoryItem  typeOfPosition={0} slotNumber={6} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.sixthItem.isEmpty} specyficItem={inventory.sixthItem} />
                </div>
                <div className='row'>
                    <CharacterInventoryItem  typeOfPosition={1} slotNumber={7} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.seventhItem.isEmpty} specyficItem={inventory.seventhItem} />
                     <CharacterInventoryItem  typeOfPosition={1} slotNumber={8} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.eigthItem.isEmpty} specyficItem={inventory.eigthItem} />
                     <CharacterInventoryItem  typeOfPosition={0} slotNumber={9} sellThisItem={sellThisItem} handleChangeItemIntoUse={handleChangeItemIntoUse} valueOfItem={inventory.ninthItem.isEmpty} specyficItem={inventory.ninthItem} />
                </div>
            </div>
            <div className='forthBoxDealer'>
                  
                    <CharStatExtended  />
            </div>   

            <div className='dealerView'>
                <div className='dealerViewChange'>
                    {statementToChangeItems ? ( <button className='buttonDealerChange' type="button" onClick={() => {
                        getNewTradeItems(hero.owner, hero.heroClass, hero.level);
                    }
                    }>Zmień Towar
                    <div className="tooltipButtonDealerChange">
                         <p>Koszt: 1 Diament</p>      
                        </div>
                    </button>
                
                ):(<button className='buttonDealerChange' disabled type="button" onClick={() => {
                        getNewTradeItems(hero.owner, hero.heroClass, hero.level);
                        dispatch(decreasediamond({owner:hero.owner,amountOfDiamonds:1}))
                    }
                    }>Zmień Towar
                    <div className="tooltipButtonDealerChange">
                         <p>Brak środków</p>      
                        </div>
                    </button>)}
                   
                   </div> 
                    <div className='dealerViewItems'>
                    <div className='row' id="bottomBorder1">
                        <DealerViewItem hero={hero}  typeOfPosition={1}  dealerItem={trades.items.firstItemForSell}  buyItem={buyItem} positionOfItem={1} />
                        <DealerViewItem hero={hero}  typeOfPosition={1} dealerItem={trades.items.secondItemForSell}  buyItem={buyItem} positionOfItem={2} />
                        
                        <DealerViewItem hero={hero} typeOfPosition={0}  dealerItem={trades.items.thirdItemForSell}  buyItem={buyItem} positionOfItem={3}  />
                    </div>
                    <div className='row'>
                        <DealerViewItem hero={hero}  typeOfPosition={1} dealerItem={trades.items.forthItemForSell} buyItem={buyItem} positionOfItem={4} />
                        <DealerViewItem hero={hero}  typeOfPosition={1} dealerItem={trades.items.fifthItemForSell}  buyItem={buyItem} positionOfItem={5}  />
                        <DealerViewItem hero={hero}  typeOfPosition={0} dealerItem={trades.items.sixthItemForSell}  buyItem={buyItem} positionOfItem={6}  />
                    </div>
                </div>
           </div>
        </div>
        </>
    );
};

export default DealerView;