import React from "react";

const LobbyInfoPopup = ({ valueOfPopup, showPopup, moveToGroups, playerInfoError }) => {
  return valueOfPopup ? (
    <div className="lobbyinfopopup-error">
      <div className="error-inner">
        <div className="title">Powiadomienie</div>
        <div className="description">{playerInfoError}</div>
        <div className="button-div">
          <button
            className="close-btn"
            onClick={() => {
              moveToGroups();
              showPopup();
            }}
          >
            Okey
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default LobbyInfoPopup;
