import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CharacterAvatar from "./characterAvatar/CharacterAvatar";
import CharacterItemInUse from "./characterAvatar/CharacterItemInUse";
import CharacterInventoryItem from "./characterInventoryItem/CharacterInventoryItem";
import CharacterStatistic from "./characterStatistic/CharacterStatistic";
import CharStatExtended from "./charStatExtended/CharStatExtended";

import { increasestatstrength, increasestatdexterity, increasestatintellect, increasestatstamina, increasestatspirit } from "../../../../actions/stats";
import { decreasegold, increasegold } from "../../../../actions/hero";

import { changeiteminuse } from "../../../../actions/itemInUse";
import { deleitemfrominventory, getinventory, changeitemininventory } from "../../../../actions/inventory";

import "./characterView.css";
import playerGameValues from "../../../../functions/playerGameValues";
import { setPlayerValues } from "../../../../actions/playerGame";

const CharacterView = ({ user }) => {
  const stats = useSelector((state) => state.stats);
  const hero = useSelector((state) => state.hero);
  const itemInUse = useSelector((state) => state.itemInUse);
  const inventory = useSelector((state) => state.inventory);
  const skills = useSelector((state) => state.skills);
  let playerStats = playerGameValues(hero, itemInUse, stats, skills.passive);
  const dispatch = useDispatch();
  const handleSubmit = (a, b) => {
    if (hero.gold > b) {
      switch (a) {
        case 1:
          dispatch(increasestatstrength({ owner: user }));
          break;
        case 2:
          dispatch(increasestatdexterity({ owner: user }));
          break;
        case 3:
          dispatch(increasestatintellect({ owner: user }));
          break;
        case 4:
          dispatch(increasestatstamina({ owner: user }));
          break;
        case 5:
          dispatch(increasestatspirit({ owner: user }));
          break;
        default:
          break;
      }
      dispatch(decreasegold({ owner: user, amountOfGold: b }));
    }
  };
  const sellThisItem = (slotNumber, item) => {
    let cost = item.cost;
    dispatch(deleitemfrominventory({ owner: user, itemNumber: slotNumber }));
    dispatch(increasegold({ owner: user, amountOfGold: cost }));
  };

  const handleChangeItemIntoUse = (slotNumber, item) => {
    let typeOfItem = item.typeOfItem;
    let itemToInventory = {};
    switch (typeOfItem) {
      case "head":
        itemToInventory = itemInUse.head;
        break;
      case "necklace":
        itemToInventory = itemInUse.necklace;
        break;
      case "armor":
        itemToInventory = itemInUse.armor;
        break;
      case "pants":
        itemToInventory = itemInUse.pants;
        break;
      case "boots":
        itemToInventory = itemInUse.boots;
        break;
      case "weapon":
        itemToInventory = itemInUse.weapon;
        break;
      default:
        break;
    }
    dispatch(changeitemininventory({ owner: user, itemNumber: slotNumber, item: itemToInventory }));
    dispatch(changeiteminuse({ owner: user, item: item }));
  };

  useEffect(() => {
    dispatch(getinventory({ owner: user }));
    // eslint-disable-next-line
  }, [dispatch]);
  useEffect(() => {
    dispatch(setPlayerValues(playerStats));
  });

  return (
    <>
      <div className="characterView">
        <div className="FirstBox">
          <div className="left">
            <CharacterItemInUse itemRightNow={itemInUse.head} />
            <CharacterItemInUse itemRightNow={itemInUse.necklace} />
            <CharacterItemInUse itemRightNow={itemInUse.armor} />
          </div>
          <div className="middle">
            <CharacterAvatar />
          </div>
          <div className="right">
            <CharacterItemInUse itemRightNow={itemInUse.pants} />
            <CharacterItemInUse itemRightNow={itemInUse.boots} />
            <CharacterItemInUse itemRightNow={itemInUse.weapon} />
          </div>
        </div>
        <div className="thirdBox">
          <div className="row" id="bottomBorder">
            <CharacterInventoryItem
              typeOfPosition={1}
              slotNumber={1}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.firstItem.isEmpty}
              specyficItem={inventory.firstItem}
            />
            <CharacterInventoryItem
              typeOfPosition={1}
              slotNumber={2}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.secondItem.isEmpty}
              specyficItem={inventory.secondItem}
            />
            <CharacterInventoryItem
              typeOfPosition={0}
              slotNumber={3}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.thirdItem.isEmpty}
              specyficItem={inventory.thirdItem}
            />
          </div>
          <div className="row" id="bottomBorder">
            <CharacterInventoryItem
              typeOfPosition={1}
              slotNumber={4}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.forthItem.isEmpty}
              specyficItem={inventory.forthItem}
            />
            <CharacterInventoryItem
              typeOfPosition={1}
              slotNumber={5}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.fifthItem.isEmpty}
              specyficItem={inventory.fifthItem}
            />
            <CharacterInventoryItem
              typeOfPosition={0}
              slotNumber={6}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.sixthItem.isEmpty}
              specyficItem={inventory.sixthItem}
            />
          </div>
          <div className="row">
            <CharacterInventoryItem
              typeOfPosition={1}
              slotNumber={7}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.seventhItem.isEmpty}
              specyficItem={inventory.seventhItem}
            />
            <CharacterInventoryItem
              typeOfPosition={1}
              slotNumber={8}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.eigthItem.isEmpty}
              specyficItem={inventory.eigthItem}
            />
            <CharacterInventoryItem
              typeOfPosition={0}
              slotNumber={9}
              sellThisItem={sellThisItem}
              handleChangeItemIntoUse={handleChangeItemIntoUse}
              valueOfItem={inventory.ninthItem.isEmpty}
              specyficItem={inventory.ninthItem}
            />
          </div>
        </div>
        <div className="secondBox">
          <CharacterStatistic typeOfStat={1} handleSubmit={handleSubmit} value={stats.strength} user={user} />
          <CharacterStatistic typeOfStat={2} handleSubmit={handleSubmit} value={stats.dexterity} user={user} />
          <CharacterStatistic typeOfStat={3} handleSubmit={handleSubmit} value={stats.intellect} user={user} />
          <CharacterStatistic typeOfStat={4} handleSubmit={handleSubmit} value={stats.stamina} user={user} />
          <CharacterStatistic typeOfStat={5} handleSubmit={handleSubmit} value={stats.spirit} user={user} />
        </div>
        <div className="forthBox">
          <CharStatExtended />
        </div>
      </div>
    </>
  );
};

export default CharacterView;
