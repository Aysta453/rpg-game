import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlayerInfoExtend from "./PlayerInfoExtend";

const PlayerInfo = ({ player, isRoomOwner }) => {
  const hero = useSelector((state) => state.hero);
  const [popupValue, setPopupValue] = useState(false);
  console.log(player);
  const showPopup = () => {
    setPopupValue(!popupValue);
  };
  let isPlayer;
  let isLeader;
  if (player.owner === hero.owner && isRoomOwner === true) {
    isLeader = true;
  } else if (player.owner !== hero.owner && isRoomOwner === true) {
    isLeader = false;
  }

  if (player.owner === hero.owner && isRoomOwner === false) {
    isPlayer = true;
  } else if (player.owner !== hero.owner && isRoomOwner === false) {
    isPlayer = false;
  }
  return (
    <div className="player">
      <div className="heroNick">{player.nick}</div>
      <div className="heroClass">{player.heroClass}</div>
      <div className="heroLevel">{player.level}</div>
      <div className="heroStats">
        <button
          onClick={() => {
            showPopup();
          }}
        >
          Statystyki
        </button>
      </div>
      <PlayerInfoExtend player={player} valueOfPopup={popupValue} showPopup={showPopup} />
      {isLeader ? (
        ""
      ) : (
        <div className="kickButton">
          <button onClick={() => {}}>Wyrzuć z grupy</button>
        </div>
      )}
      {!isPlayer && isLeader === false ? (
        ""
      ) : (
        <div className="kickButton">
          <button onClick={() => {}}>Wyrzuć z grupy</button>
        </div>
      )}
    </div>
  );
};

export default PlayerInfo;
