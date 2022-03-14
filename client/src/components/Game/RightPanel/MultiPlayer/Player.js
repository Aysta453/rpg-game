import React, { useState, useEffect } from "react";

const Player = ({ player }) => {
  const [playerBattleHpBar, setPlayerBattleHpBar] = useState(0);
  const [playerBattleMpBar, setPlayerBattleMpBar] = useState(0);
  let playerImage;
  let widthOfMainHealthPointsBar = 7.5;
  let widthOfMainManaPointsBar = 5.2;

  switch (player.heroClass) {
    case "Mage":
      playerImage = "/images/charactersAvatars/1.png";
      break;
    case "Priest":
      playerImage = "/images/charactersAvatars/4.png";
      break;
    case "Warrior":
      playerImage = "/images/charactersAvatars/2.png";
      break;
    case "Berserk":
      playerImage = "/images/charactersAvatars/5.png";
      break;
    case "Hunter":
      playerImage = "/images/charactersAvatars/3.png";
      break;
    default:
      break;
  }
  useEffect(() => {
    let changeBarHpPlayer = (player.heroPower.currentHealthPoints / player.heroPower.healthPoints) * widthOfMainHealthPointsBar;
    if (changeBarHpPlayer > widthOfMainHealthPointsBar) {
      changeBarHpPlayer = widthOfMainHealthPointsBar;
    } else if (changeBarHpPlayer <= 0) {
      changeBarHpPlayer = 0;
    }
    setPlayerBattleHpBar(changeBarHpPlayer);
    // eslint-disable-next-line
  }, [player.heroPower.currentHealthPoints]);

  useEffect(() => {
    let changeBarHpPlayer = (player.heroPower.currentManaPoints / player.heroPower.manaPoints) * widthOfMainManaPointsBar;
    if (changeBarHpPlayer > widthOfMainManaPointsBar) {
      changeBarHpPlayer = widthOfMainManaPointsBar;
    } else if (changeBarHpPlayer <= 0) {
      changeBarHpPlayer = 0;
    }
    setPlayerBattleMpBar(changeBarHpPlayer);
    // eslint-disable-next-line
  }, [player.heroPower.currentManaPoints]);

  return (
    <div className="player">
      <div className="avatarBox">
        <div className="avatar">
          <img alt="" src={`${playerImage}`} />
        </div>
      </div>
      <div className="nick">{player.nick}</div>
      <div className="healtPoints">
        <div className="healtPoints-div" style={{ width: `${widthOfMainHealthPointsBar}vw` }}>
          <div style={{ width: `${playerBattleHpBar}vw` }} className="progressPlayerHealthPoints" />
        </div>
      </div>
      <div className="manaPoints">
        <div className="manaPoints-div" style={{ width: `${widthOfMainManaPointsBar}vw` }}>
          <div style={{ width: `${playerBattleMpBar}vw` }} className="progressPlayerManaPoints" />
        </div>
      </div>
    </div>
  );
};

export default Player;
