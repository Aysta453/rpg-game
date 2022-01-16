import React, { useState } from "react";

const PlayerInfoExtend = ({ showPopup, valueOfPopup, player }) => {
  const [playerInfo, setPlayerInfo] = useState(player);
  return valueOfPopup ? (
    <div className="popup-playerInfoExtend">
      <div className="playerInfoExtend-inner">
        <button
          className="close-btn"
          onClick={() => {
            showPopup();
          }}
        >
          X
        </button>
        <div className="stats">
          <div className="statExtended">
            <div className="nameOfStat">Punkty życia</div>
            <div className="valueOfStat">{playerInfo.heroPower.healthPoints}</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Punkty many</div>
            <div className="valueOfStat">{playerInfo.heroPower.manaPoints}</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Regeneracja życia</div>
            <div className="valueOfStat">{playerInfo.heroPower.regHp}/s</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Regeneracja many</div>
            <div className="valueOfStat">{playerInfo.heroPower.regMp}/s</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Obrona</div>
            <div className="valueOfStat">{playerInfo.heroPower.defensePoints}</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Atak</div>
            <div className="valueOfStat">
              {playerInfo.heroPower.minAttack} - {playerInfo.heroPower.maxAttack}
            </div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Szansa na blok</div>
            <div className="valueOfStat">{Math.round(playerInfo.heroPower.chanceOnBlock * 100) / 100} % </div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Szansa na unik</div>
            <div className="valueOfStat">{Math.round(playerInfo.heroPower.chanceOnDodge * 100) / 100} %</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Szansa na cios</div>
            <div className="valueOfStat">{Math.round(playerInfo.heroPower.chanceOnHit * 100) / 100} %</div>
          </div>
          <div className="statExtended">
            <div className="nameOfStat">Szansa na cios krytyczny</div>
            <div className="valueOfStat">{Math.round(playerInfo.heroPower.chanceOnCritHit * 100) / 100} % </div>
          </div>
          <div className="statExtended2">
            <div className="nameOfStat">Bonus do umiejętności specjalnych</div>
            <div className="valueOfStat">{playerInfo.heroPower.bonusToSpecialAttack}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PlayerInfoExtend;
