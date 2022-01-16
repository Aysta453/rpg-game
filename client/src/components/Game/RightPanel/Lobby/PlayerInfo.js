import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlayerInfoExtend from "./PlayerInfoExtend";

const PlayerInfo = ({ player }) => {
  const hero = useSelector((state) => state.hero);
  const [popupValue, setPopupValue] = useState(false);
  console.log(player);
  const showPopup = () => {
    setPopupValue(!popupValue);
  };
  let isPlayer;
  let isLeader;
  if (player.owner === hero.owner && player.isLeader === true) {
    isLeader = true;
    isPlayer = false;
  }
  if (player.owner === hero.owner && player.isLeader === false) {
    isLeader = false;
    isPlayer = true;
  } else {
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
      <div className="kickButton">{!isLeader ? isPlayer ? <button onClick={() => {}}>Wyjdz z grupy</button> : <button onClick={() => {}}>Wyrzuć z grupy</button> : ""}</div>
    </div>
  );
};

export default PlayerInfo;
