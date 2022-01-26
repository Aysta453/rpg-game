import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const MainPlayer = ({ hpPlayer, manaPlayer }) => {
  const [hp, setHp] = useState(hpPlayer);
  const [mp, setMp] = useState(manaPlayer);
  const hero = useSelector((state) => state.hero);
  const playerGame = useSelector((state) => state.playerGame);
  let playerImage;
  let widthOfMainHealthPointsBar = 13;
  let widthOfMainManaPointsBar = 11.5;
  switch (hero.heroClass) {
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
    let changeBarHpPlayer = (hpPlayer / playerGame.healthPoints) * widthOfMainHealthPointsBar;
    if (changeBarHpPlayer > widthOfMainHealthPointsBar) {
      changeBarHpPlayer = widthOfMainHealthPointsBar;
    } else if (changeBarHpPlayer <= 0) {
      changeBarHpPlayer = 0;
    }
    setHp(changeBarHpPlayer);
    // eslint-disable-next-line
  }, [hpPlayer]);
  useEffect(() => {
    let changeBarMpPlayer = (manaPlayer / playerGame.manaPoints) * widthOfMainManaPointsBar;
    if (changeBarMpPlayer > widthOfMainManaPointsBar) {
      changeBarMpPlayer = widthOfMainManaPointsBar;
    } else if (changeBarMpPlayer <= 0) {
      changeBarMpPlayer = 0;
    }
    setMp(changeBarMpPlayer);
    // eslint-disable-next-line
  }, [manaPlayer]);
  return (
    <div className="mainPlayer">
      <div className="avatarBox">
        <div className="avatar">
          {" "}
          <img alt="" src={`${playerImage}`} />
        </div>
      </div>
      <div className="nick">{hero.nick}</div>
      <div className="healtPoints">
        <div className="healtPoints-div" style={{ width: `${widthOfMainHealthPointsBar}vw` }}>
          <div style={{ width: `${hp}vw` }} className="progressPlayerHealthPoints" />
        </div>
      </div>
      <div className="manaPoints">
        <div className="manaPoints-div" style={{ width: `${widthOfMainManaPointsBar}vw` }}>
          <div style={{ width: `${mp}vw` }} className="progressPlayerManaPoints" />
        </div>
      </div>
    </div>
  );
};

export default MainPlayer;
