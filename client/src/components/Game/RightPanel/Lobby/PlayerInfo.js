import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlayerInfoExtend from "./PlayerInfoExtend";

const PlayerInfo = ({ player, isRoomOwner, kickingPlayer, roomNameOfParty }) => {
  const hero = useSelector((state) => state.hero);
  const [popupValue, setPopupValue] = useState(false);
  const showPopup = () => {
    setPopupValue(!popupValue);
  };
  let isPlayer;
  let isLeader;
  if (isRoomOwner === true) {
    isLeader = true;
  } else if (isRoomOwner === false) {
    isLeader = false;
  }

  if (player.owner === hero.owner) {
    isPlayer = true;
  } else if (player.owner !== hero.owner) {
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
        isPlayer ? (
          ""
        ) : (
          <div className="kickButton">
            <button
              onClick={() => {
                kickingPlayer(player.socketId, player.owner, roomNameOfParty);
              }}
            >
              Wyrzuć z grupy
            </button>
          </div>
        )
      ) : isPlayer ? (
        <div className="kickButton">
          <button onClick={() => {}}>Wyjdź z grupy</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PlayerInfo;
