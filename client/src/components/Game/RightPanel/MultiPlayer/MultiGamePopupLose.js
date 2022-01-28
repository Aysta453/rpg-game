import React from "react";
import { useSelector } from "react-redux";

const MultiGamePopupLose = ({ valueOfPopup, setButtons, setWindowOfElements, changePopup }) => {
  const rooms = useSelector((state) => state.rooms);

  const handleSubmit = () => {
    setButtons();
    changePopup(0);
    setWindowOfElements(1);
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
