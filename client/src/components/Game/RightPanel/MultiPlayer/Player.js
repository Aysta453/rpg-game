import React from "react";

const Player = () => {
  return (
    <div className="player">
      <div className="avatarBox">
        <div className="avatar">
          <img alt="" src="/images/charactersAvatars/3.png" />
        </div>
      </div>
      <div className="nick">Aysta</div>
      <div className="healtPoints">
        <div className="healtPoints-div" style={{ width: `${130}px` }}>
          <div style={{ width: `${40}px` }} className="progressPlayerHealthPoints" />
        </div>
      </div>
      <div className="manaPoints">
        <div className="manaPoints-div" style={{ width: `${100}px` }}>
          <div style={{ width: `${40}px` }} className="progressPlayerManaPoints" />
        </div>
      </div>
    </div>
  );
};

export default Player;
