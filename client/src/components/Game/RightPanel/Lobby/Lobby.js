import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Lobby.css";
import LobbyDungeonInfo from "./LobbyDungeonInfo";
import PlayerInfo from "./PlayerInfo";
import { deleteroom, showroom, showroombyname, showrooms } from "../../../../actions/rooms.js";
import LobbyInfoPopup from "./LobbyInfoPopup";
const Lobby = ({ setButtons, setWindowOfElements, socket }) => {
  const rooms = useSelector((state) => state.rooms);
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  const [popupValue, setPopupValueset] = useState(false);
  const [popupValue1, setPopupValueset1] = useState(false);
  const [popupDestroyGroupValue, setPopupDestroyGroupValue] = useState(false);
  const [controlRefresh, setControlRefresh] = useState(0);
  const [controlRefreshId, setControlRefreshId] = useState("");
  let players = [];
  let isRoomOwner;
  let isEnoughPlayers;

  if (rooms !== null || rooms !== undefined) {
    if (Array.isArray(rooms.players)) {
      players = rooms.players;
    }
    if (hero.owner === rooms.owner) {
      isRoomOwner = true;
    } else {
      isRoomOwner = false;
    }
  }

  const showPopup = () => {
    setPopupValueset(!popupValue);
  };
  const showPopup1 = () => {
    setPopupValueset1(!popupValue1);
  };
  const moveToGroups = () => {
    setWindowOfElements(110);
    setButtons();
  };
  const showDestroyPopup = () => {
    setPopupDestroyGroupValue(!popupDestroyGroupValue);
  };
  const refreshRoom = (idOfRoom) => {
    dispatch(showroom({ id: idOfRoom }));
  };
  const destroyingRoom = () => {
    socket.emit("closeRoom", rooms.roomName);
    dispatch(deleteroom({ id: rooms._id }));
  };
  const kickingPlayer = (socketId, id) => {
    socket.emit("kickFromRoom", socketId, id);
  };

  useEffect(() => {
    socket.on("leavingRoom", (mess) => {
      console.log(mess);
      socket.emit("leaveRoom", mess);
      showDestroyPopup();
    });
  }, []);
  // if (players.length === 5) {
  //   isEnoughPlayers = true;
  // } else {
  //   isEnoughPlayers = false;
  // }

  useEffect(() => {
    socket.on("mess", (mess) => {
      setControlRefresh((controlRefresh) => controlRefresh + 1);
      setControlRefreshId((controlRefreshId) => (controlRefreshId = mess));
    });
  });
  useEffect(() => {
    if (controlRefreshId !== "") {
      refreshRoom(controlRefreshId);
    }
  }, [controlRefresh]);
  // useEffect(() => {
  //   dispatch(showroombyname({ roomName: hero.nick }));
  // }, []);

  return (
    <div className="lobbyView">
      <div className="title">
        Grupa
        {isRoomOwner ? (
          <button
            className="dismissGroup"
            onClick={() => {
              destroyingRoom();
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
        <LobbyInfoPopup showPopup={showDestroyPopup} moveToGroups={moveToGroups} valueOfPopup={popupDestroyGroupValue} />
        <LobbyDungeonInfo room={rooms} showPopup={showPopup} valueOfPopup={popupValue} />
      </div>
      <div className="players">
        <div className="playerInfo">
          <div className="heroNickLabel">Nazwa postaci</div>
          <div className="heroClassLabel">Klasa postaci</div>
          <div className="heroLevelLabel">Poziom postaci</div>
          <div className="heroStatsLabel">Dane postaci</div>
          <div className="kickButtonLabel">Zarządzaj</div>
        </div>
        {players.length
          ? players.map((player) => (
              <div key={player.owner}>
                <PlayerInfo player={player} isRoomOwner={isRoomOwner} kickingPlayer={kickingPlayer} />
              </div>
            ))
          : ""}
      </div>
      <div className="missionStart">{isEnoughPlayers ? <button onClick={() => {}}>Rozpocznij misję</button> : ""}</div>
      <button
        onClick={() => {
          dispatch(showroom({ id: rooms._id }));
          console.log(rooms);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Lobby;
