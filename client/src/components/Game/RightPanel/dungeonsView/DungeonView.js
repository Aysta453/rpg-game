import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createroom } from "../../../../actions/rooms";
const DungeonView = ({ dungeon, setWindowOfElements, setButtons, createRoomSocket }) => {
  const hero = useSelector((state) => state.hero);
  const playerGame = useSelector((state) => state.playerGame);
  let { playerInfo } = {};

  let { createDungeonGroup } = {};
  const dispatch = useDispatch();
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
  };
  let styleColorText;
  let text;
  let text2;
  switch (dungeon.dungeonDifficult) {
    case "easy":
      styleColorText = "easy";
      text = "łatwy";
      text2 = "Szansa na przedmiot: 5%";
      break;
    case "medium":
      styleColorText = "medium";
      text = "średni";
      text2 = "Szansa na przedmiot: 10%";
      break;
    case "hard":
      styleColorText = "hard";
      text = "trudny";
      text2 = "Szansa na przedmiot: 15%";
      break;
    default:
      break;
  }
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
            Stwórz pokój
          </button>
        </div>
      </div>
    </>
  );
};

export default DungeonView;
