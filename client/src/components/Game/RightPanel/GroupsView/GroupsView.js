import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GroupView from "./GroupView";
import "./groupView.css";
import { showrooms, showroom } from "../../../../actions/rooms.js";
const GroupsView = ({ setButtons, setWindowOfElements, socket }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  const returnToPlayerDangeons = () => {
    setWindowOfElements(5);
  };
  const joiningRoom = (roomName, idOfRoom) => {
    socket.emit("joinRoom", roomName, idOfRoom);
  };
  const refreshGroups = () => {
    dispatch(showrooms());
  };
  useEffect(() => {
    dispatch(showrooms());
  }, []);
  return (
    <div className="groupsView">
      <div className="title">
        <button
          className="optionRefresh"
          onClick={() => {
            refreshGroups();
          }}
        >
          Odśwież
        </button>
        <button
          className="optionBack"
          onClick={() => {
            returnToPlayerDangeons();
          }}
        >
          Wróć
        </button>
        Grupy
      </div>
      <div className="groups">
        {rooms.length
          ? rooms.map((room) => (
              <div key={room._id}>
                <GroupView room={room} joiningRoom={joiningRoom} setButtons={setButtons} setWindowOfElements={setWindowOfElements} socket={socket} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default GroupsView;
