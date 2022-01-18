import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Lobby.css";
import LobbyDungeonInfo from "./LobbyDungeonInfo";
import PlayerInfo from "./PlayerInfo";
import { deleteroom, showroom, showrooms } from "../../../../actions/rooms.js";
const Lobby = ({ setButtons, setWindowOfElements, socket }) => {
  const rooms = useSelector((state) => state.rooms);
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  const [popupValue, setPopupValueset] = useState(false);
  const [popupValue1, setPopupValueset1] = useState(false);
  const [players, setPlayers] = useState(rooms.players);
  // if (!Array.isArray(rooms)) {
  //   players = rooms.players;
  // }
  console.log(rooms);
  const showPopup = () => {
    setPopupValueset(!popupValue);
  };
  const showPopup1 = () => {
    setPopupValueset1(!popupValue1);
  };
  const refreshRoom = (idOfRoom) => {
    console.log(idOfRoom);
    dispatch(showrooms());
    dispatch(showroom({ id: idOfRoom }));
    setPlayers(rooms);

    console.log(players);
  };
  let isRoomOwner;
  if (hero.owner === rooms.owner) {
    isRoomOwner = true;
  } else {
    isRoomOwner = false;
  }
  let isEnoughPlayers;
  // if (players.length === 5) {
  //   isEnoughPlayers = true;
  // } else {
  //   isEnoughPlayers = false;
  // }
  useEffect(() => {
    socket.on("mess", (mess) => {
      refreshRoom(mess);
    });
    console.log("works");
  }, []);

  return (
    <div className="lobbyView">
      <div className="title">
        Grupa
        {isRoomOwner ? (
          <button
            className="dismissGroup"
            onClick={() => {
              dispatch(deleteroom({ id: rooms._id }));
              setWindowOfElements(110);
              setButtons();
            }}
          >
            Rozwiąż grupę
          </button>
        ) : (
          ""
        )}
        <button
          className="showMissionInfo"
          onClick={() => {
            showPopup();
          }}
        >
          Szczegóły misji
        </button>
        <LobbyDungeonInfo rooms={rooms} showPopup={showPopup} valueOfPopup={popupValue} />
      </div>
      <div className="players">
        <div className="playerInfo">
          <div className="heroNickLabel">Nazwa postaci</div>
          <div className="heroClassLabel">Klasa postaci</div>
          <div className="heroLevelLabel">Poziom postaci</div>
          <div className="heroStatsLabel">Dane postaci</div>
          <div className="kickButtonLabel">Zarządzaj</div>
        </div>
        {/* {players.length
          ? players.map((player) => (
              <div key={player.owner}>
                <PlayerInfo player={player} isRoomOwner={isRoomOwner} />
              </div>
            ))
          : ""} */}
      </div>
      <div className="missionStart">{isEnoughPlayers ? <button onClick={() => {}}>Rozpocznij misję</button> : ""}</div>
    </div>
  );
};

export default Lobby;
