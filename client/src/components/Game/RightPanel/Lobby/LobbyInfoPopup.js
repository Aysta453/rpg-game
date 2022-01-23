import React from "react";

const LobbyInfoPopup = ({ valueOfPopup, showPopup, moveToGroups }) => {
  return valueOfPopup ? (
    <div className="lobbyinfopopup-error">
      <div className="error-inner">
        <div className="title">Powiadomienie</div>
        <div className="description">Grupa została rozwiązana. Zostaniesz przeniesiony do ekranu grup.</div>
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
