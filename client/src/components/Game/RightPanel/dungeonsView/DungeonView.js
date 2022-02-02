import React from "react";
import { useDispatch, useSelector } from "react-redux";
import creatingItemClient from "../../../../functions/creatingItemClient";
import { createroom } from "../../../../actions/rooms";
const DungeonView = ({ dungeon, setWindowOfElements, setButtons, createRoomSocket, socket }) => {
  const hero = useSelector((state) => state.hero);
  const playerGame = useSelector((state) => state.playerGame);
  const inventory = useSelector((state) => state.inventory);
  let { playerInfo } = {};

  let { createDungeonGroup } = {};
  const dispatch = useDispatch();
  let itemChance;
  let itemChanceRandom = Math.random() * 100 + 1;

  let styleColorText;
  let text;
  let text2;
  switch (dungeon.dungeonDifficult) {
    case "easy":
      styleColorText = "easy";
      text = "łatwy";
      text2 = "Szansa na przedmiot: 5%";
      itemChance = 5;
      break;
    case "medium":
      styleColorText = "medium";
      text = "średni";
      text2 = "Szansa na przedmiot: 10%";
      itemChance = 10;
      break;
    case "hard":
      styleColorText = "hard";
      text = "trudny";
      text2 = "Szansa na przedmiot: 15%";
      itemChance = 15;
      break;
    default:
      break;
  }
  let { item } = {};
  if (
    inventory.firstItem.isEmpty === false ||
    inventory.secondItem.isEmpty === false ||
    inventory.thirdItem.isEmpty === false ||
    inventory.forthItem.isEmpty === false ||
    inventory.fifthItem.isEmpty === false ||
    inventory.sixthItem.isEmpty === false ||
    inventory.seventhItem.isEmpty === false ||
    inventory.eigthItem.isEmpty === false ||
    inventory.ninthItem.isEmpty === false
  ) {
    if (itemChanceRandom <= itemChance) {
      let itemTemp = creatingItemClient(hero.heroClass, hero.level, 0, 0, 0);
      item = itemTemp;
    } else {
      item = {
        isEmpty: true,
      };
    }
  } else {
    item = {
      isEmpty: true,
    };
  }

  createDungeonGroup = {
    roomName: hero.nick,
    dungeonTitle: dungeon.dungeonTitle,
    dungeonDescription: dungeon.dungeonDescription,
    dungeonRewardGold: dungeon.dungeonRewardGold,
    dungeonRewardExp: dungeon.dungeonRewardExp,
    dungeonDifficult: dungeon.dungeonDifficult,
    monster: dungeon.monster,
  };

  playerInfo = {
    heroPower: playerGame,
    heroClass: hero.heroClass,
    level: hero.level,
    nick: hero.nick,
    owner: hero.owner,
    isLeader: true,
    socketId: socket.id,
    item: item,
  };
  console.log(item);
  return (
    <>
      <div className="dungeonView">
        <div className="title">{dungeon.dungeonTitle}</div>
        <div className="description">{dungeon.dungeonDescription}</div>
        <div className="difficult"> Poziom trudności:</div>
        <div className="level">
          {" "}
          <span className={`${styleColorText}`}>{text}</span>
        </div>
        <div className="expPoints">Doświadczenie</div>
        <div className="expPointsValue">{dungeon.dungeonRewardExp} XP</div>
        <div className="money">Waluta</div>
        <div className="moneyValue">{dungeon.dungeonRewardGold} Złota</div>
        <div className="itemBox">
          <div className="item">{text2}</div>
        </div>
        <div className="dungeonButtons">
          <button
            className="optionInvite"
            onClick={() => {
              dispatch(createroom({ dungeon: createDungeonGroup, owner: hero.owner, member: playerInfo }));
              createRoomSocket(hero.nick);
              setWindowOfElements(200);
              setButtons();
            }}
          >
            Utwórz grupę
          </button>
        </div>
      </div>
    </>
  );
};

export default DungeonView;
