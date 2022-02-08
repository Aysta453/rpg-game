import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerValues } from "../../../../actions/playerGame";
import { joinroom, showrooms, showroom } from "../../../../actions/rooms";
import playerGameValues from "../../../../functions/playerGameValues";
import creatingItemClient from "../../../../functions/creatingItemClient";
import GroupViewPopup from "./GroupViewPopup";
const GroupView = ({ room, setButtons, setWindowOfElements, socket }) => {
  const [popupValue, setPopupValueset] = useState(false);
  const hero = useSelector((state) => state.hero);
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const stats = useSelector((state) => state.stats);
  const itemInUse = useSelector((state) => state.itemInUse);
  const skills = useSelector((state) => state.skills);

  const playerGame = useSelector((state) => state.playerGame);
  let data = playerGameValues(hero, itemInUse, stats, skills.passive);

  const moveToActualGroups = () => {
    setWindowOfElements(110);
  };

  const showPopup = () => {
    setPopupValueset(!popupValue);
  };
  let assaignToJoin = false;
  let infoTextError;
  //  infoTextError = 'Brak dostępnych miejsc.';
  if (hero.level >= room.monster.monsterLevel - 2 && hero.level <= room.monster.monsterLevel + 2 && room.players.length < 3) {
    assaignToJoin = true;
  }
  if (hero.level <= room.monster.monsterLevel - 2) {
    infoTextError = "Za niski poziom postaci. Min :" + (room.monster.monsterLevel - 2) + ".";
  }
  if (hero.level >= room.monster.monsterLevel + 2) {
    infoTextError = "Za wysoki poziom postaci. Max :" + (room.monster.monsterLevel + 2) + ".";
  }
  if (room.players.length === 3) {
    infoTextError = "Brak wolnych miejsc w grupie.";
  }
  let itemChance;
  let itemChanceRandom = Math.random() * 100 + 1;
  let styleColorText;
  switch (room.dungeonDifficult) {
    case "easy":
      styleColorText = "easy";
      itemChance = 5;
      break;
    case "medium":
      styleColorText = "medium";
      itemChance = 10;
      break;
    case "hard":
      styleColorText = "hard";
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

  const joinRoomFunction = (id) => {
    let { member } = {};
    let idOfRoom = id;
    member = {
      heroClass: hero.heroClass,
      level: hero.level,
      nick: hero.nick,
      owner: hero.owner,
      isLeader: false,
      heroPower: playerGame,
      socketId: socket.id,
      item: item,
    };
    dispatch(joinroom({ id: idOfRoom, member: member }));
    socket.emit("joinRoom", room.roomName);
    setWindowOfElements(200);
    setButtons();
  };

  useEffect(() => {
    dispatch(setPlayerValues(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="groupView">
      <div className="groupLeader">{room.roomName}</div>
      <div className="groupMissionName">
        <span className={`${styleColorText}`}>{room.dungeonTitle}</span>
      </div>
      <div className="missionInfo">
        <button
          onClick={() => {
            showPopup();
          }}
        >
          Szczegóły misji
        </button>
      </div>
      <GroupViewPopup room={room} valueOfPopup={popupValue} showPopup={showPopup} />
      <div className="groupSize">{room.players.length}/3</div>
      <div className="actionJoinButton">
        {assaignToJoin ? (
          <button
            onClick={() => {
              joinRoomFunction(room._id);
            }}
          >
            Dołącz
          </button>
        ) : (
          <button
            disabled
            onClick={() => {
              joinRoomFunction(room._id);
            }}
          >
            Dołącz
            <div className="tooltipJoinInfo">{infoTextError}</div>
          </button>
        )}
      </div>
    </div>
  );
};
export default GroupView;
