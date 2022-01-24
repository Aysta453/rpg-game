import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerValues } from "../../../../actions/playerGame";
import { joinroom, showrooms, showroom } from "../../../../actions/rooms";
import playerGameValues from "../../../../functions/playerGameValues";
import GroupViewPopup from "./GroupViewPopup";
const GroupView = ({ room, setButtons, setWindowOfElements, socket }) => {
  const [popupValue, setPopupValueset] = useState(false);
  const hero = useSelector((state) => state.hero);
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
  if (hero.level >= room.monster.monsterLevel - 2 && hero.level <= room.monster.monsterLevel + 2 && room.players.length < 5) {
    assaignToJoin = true;
  }
  if (hero.level <= room.monster.monsterLevel - 2) {
    infoTextError = "Za niski poziom postaci. Min :" + room.monster.monsterLevel - 2 + ".";
  }
  if (hero.level >= room.monster.monsterLevel + 2) {
    infoTextError = "Za wysoki poziom postaci. Max :" + room.monster.monsterLevel + 2 + ".";
  }
  if (room.players.length === 5) {
    infoTextError = "Brak wolnych miejsc w grupie.";
  }
  let styleColorText;
  switch (room.dungeonDifficult) {
    case "easy":
      styleColorText = "easy";
      break;
    case "medium":
      styleColorText = "medium";
      break;
    case "hard":
      styleColorText = "hard";
      break;
    default:
      break;
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
    };
    dispatch(joinroom({ id: idOfRoom, member: member }));
    setWindowOfElements(200);
    setButtons();
  };

  useEffect(() => {
    dispatch(setPlayerValues(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="groupView">
      <div className="groupLeader">{room.players[0].nick}</div>
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
      <div className="groupSize">{room.players.length}/5</div>
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
