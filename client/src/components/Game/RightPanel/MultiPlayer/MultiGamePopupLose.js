import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newdungeons } from "../../../../actions/dungeons";
import { deleteroom } from "../../../../actions/rooms";

const MultiGamePopupLose = ({ valueOfPopup, setButtons, setWindowOfElements, changePopup, socket }) => {
  const rooms = useSelector((state) => state.rooms);
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setButtons();
    changePopup(0);
    setWindowOfElements(1);
    dispatch(newdungeons({ owner: hero.owner, level: hero.level }));
    socket.emit("leaveRoom", rooms.roomName);
    if (hero.owner === rooms.owner) {
      dispatch(deleteroom({ id: rooms._id }));
    }
  };

  return valueOfPopup ? (
    <div className="popup-lose">
      <div className="lose-inner">
        <div className="title">Porażka</div>
        <div className="description">
          <p>
            Zostałeś sromotnie pokonany w trakcie wykonywania misji <span className="gold"> {rooms.dungeonTitle} </span> przez potwora <span className="gold"> {rooms.monster.monsterName}</span>.
          </p>
          <p>Wyostrz umysł, pomyśl nad strategią i spróbuj jeszcze raz!</p>
          <p>Powodzenia bohaterze!</p>
        </div>
        <div className="submitButtonBox">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Zakończ
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MultiGamePopupLose;
