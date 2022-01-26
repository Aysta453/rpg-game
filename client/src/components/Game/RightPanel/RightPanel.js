import React from "react";
import io from "socket.io-client";
import CharacterView from "./characterView/CharacterView";
import SkillsView from "./skillsView/SkillsView";
import DealerView from "./characterView/DealerView";

import DungeonsView from "./dungeonsView/DungeonsView";
import MissionsView from "./missionsView/MissionsView";
import SinglePlayerGameView from "./singlePlayerGame/SinglePlayerGameView";
import SingleGame from "./SingleGame/SingleGame.js";

import "./rightPanel.css";

import MultiPlayerView from "./MultiPlayer/MultiPlayerView";
import GroupsView from "./GroupsView/GroupsView";
import Lobby from "./Lobby/Lobby";
//const API = axios.create({ baseURL: "https://aysta-game-server.herokuapp.com/" });
//const socket = io("http://localhost:7215", {
const socket = io("https://aysta-game-server.herokuapp.com/", {
  // withCredentials: "true",
  extraHeaders: {
    "Access-Control-Allow-Origin": "*",
  },
});
socket.on();
const RightPanel = ({ windowOfElements, user, setWindowOfElements, setButtons }) => {
  return (
    <div className="rightPanel">
      {windowOfElements === 1 && <CharacterView user={user} socket={socket} />}
      {windowOfElements === 2 && <SkillsView />}
      {windowOfElements === 3 && <DealerView user={user} />}
      {windowOfElements === 4 && <MissionsView setWindowOfElements={setWindowOfElements} setButtons={setButtons} />}
      {windowOfElements === 5 && <DungeonsView socket={socket} setButtons={setButtons} setWindowOfElements={setWindowOfElements} />}
      {windowOfElements === 7 && <SinglePlayerGameView setButtons={setButtons} setWindowOfElements={setWindowOfElements} />}
      {windowOfElements === 6 && <> tu bedzie logout </>}
      {windowOfElements === 10 && <SingleGame setButtons={setButtons} setWindowOfElements={setWindowOfElements} />}
      {windowOfElements === 90 && <MultiPlayerView setButtons={setButtons} setWindowOfElements={setWindowOfElements} socket={socket} />}
      {windowOfElements === 110 && <GroupsView socket={socket} setButtons={setButtons} setWindowOfElements={setWindowOfElements} />}
      {windowOfElements === 200 && <Lobby socket={socket} setButtons={setButtons} setWindowOfElements={setWindowOfElements} />}
    </div>
  );
};

export default RightPanel;
