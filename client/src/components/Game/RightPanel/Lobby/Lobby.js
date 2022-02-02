import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Lobby.css";
import LobbyDungeonInfo from "./LobbyDungeonInfo";
import PlayerInfo from "./PlayerInfo";
import { deleteroom, showroom, leaveroom } from "../../../../actions/rooms.js";
import LobbyInfoPopup from "./LobbyInfoPopup";
const Lobby = ({ setButtons, setWindowOfElements, socket, memberPartyId, setMemberPartyId }) => {
  const rooms = useSelector((state) => state.rooms);
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  const [popupValue, setPopupValueset] = useState(false);
  const [popupValue1, setPopupValueset1] = useState(false);
  const [popupDestroyGroupValue, setPopupDestroyGroupValue] = useState(false);
  const [playerInfoError, setPlayerInfoError] = useState("");
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

    if (players.length === 3) {
      isEnoughPlayers = true;
    } else {
      isEnoughPlayers = false;
    }
    for (let index = 0; index < players.length; index++) {
      if (hero.owner === players[index].owner) {
        setMemberPartyId(index);
      }
    }
  }
  const setMemberId = () => {
    if (rooms !== null || rooms !== undefined) {
      for (let index = 0; index < players.length; index++) {
        if (hero.owner === players[index].owner) {
          setMemberPartyId(index);
        }
      }
    }
  };
  console.log(memberPartyId);
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
    console.log("refreshed");
    dispatch(showroom({ id: idOfRoom }));
    setMemberId();
  };
  const destroyingRoom = () => {
    dispatch(deleteroom({ id: rooms._id }));
    socket.emit("closeRoom", rooms.roomName);
  };
  const kickingPlayer = (socketId, id, roomNameOfParty, idOfRoom) => {
    socket.emit("kickFromRoom", socketId, id, roomNameOfParty, idOfRoom);
  };
  const leavingFromGroup = (owner, roomNameOfParty, idOfRoom) => {
    dispatch(leaveroom({ id: idOfRoom, memberToLeave: owner }));
    socket.emit("leaveRoom", roomNameOfParty);
    setPlayerInfoError("Opuściłeś grupę. Zostaniesz przeniesiony do ekranu grup.");
    showDestroyPopup();
  };
  const kickPlayer = (owner, roomNameOfParty, idOfRoom) => {
    dispatch(leaveroom({ id: idOfRoom, memberToLeave: owner }));
    socket.emit("leaveRoom", roomNameOfParty);
    setPlayerInfoError("Zostałeś wyrzucony z grupy. Zostaniesz przeniesiony do ekranu grup.");
    showDestroyPopup();
  };

  const startingGame = () => {
    socket.emit("startGame", rooms.roomName);
  };
  useEffect(() => {
    socket.on("leavingRoom", (mess) => {
      socket.emit("leaveRoom", mess);
      setPlayerInfoError("Grupa została rozwiązana. Zostaniesz przeniesiony do ekranu grup.");
      showDestroyPopup();
    });
  }, []);
  useEffect(() => {
    socket.on("gameStarted", () => {
      setWindowOfElements(90);
    });
  }, []);
  useEffect(() => {
    socket.on("mess", (mess) => {
      if (mess !== "") return refreshRoom(mess);
    });
  }, []);
  useEffect(() => {
    socket.on("kicked", (mess, roomNameOfParty, idOfRoom) => {
      kickPlayer(mess, roomNameOfParty, idOfRoom);
    });
  }, []);

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
          Szczegóły wyprawy
        </button>
        <LobbyInfoPopup showPopup={showDestroyPopup} moveToGroups={moveToGroups} valueOfPopup={popupDestroyGroupValue} playerInfoError={playerInfoError} />
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
                <PlayerInfo player={player} isRoomOwner={isRoomOwner} kickingPlayer={kickingPlayer} roomNameOfParty={rooms.roomName} idOfRoom={rooms._id} leavingFromGroup={leavingFromGroup} />
              </div>
            ))
          : ""}
      </div>
      <div className="missionStart">
        {isEnoughPlayers && isRoomOwner ? (
          <button
            onClick={() => {
              startingGame();
            }}
          >
            Rozpocznij wyprawe
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Lobby;
