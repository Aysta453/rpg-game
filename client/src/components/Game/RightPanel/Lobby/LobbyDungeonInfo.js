import React from "react";

const LobbyDungeonInfo = ({ valueOfPopup, showPopup, room }) => {
  let styleColorText;
  let text;
  let text2;
  let value1;
  let value2;
  let value3;
  let value4;
  let value5;

  if (room === null || room === undefined) {
    value1 = "";
    value2 = "";
    value3 = "";
    value4 = "";
    value5 = "hard";
  } else {
    value1 = room.dungeonTitle;
    value2 = room.dungeonDescription;
    value3 = room.dungeonRewardExp;
    value4 = room.dungeonRewardGold;
    value5 = room.dungeonDifficult;
  }

  switch (value5) {
    case "easy":
      styleColorText = "easy";
      text = "łatwy";
      text2 = "Szansa na przedmiot: 5%";
      break;
    case "medium":
      styleColorText = "medium";
      text = "średni";
      text2 = "Szansa na przedmiot: 10%";
      break;
    case "hard":
      styleColorText = "hard";
      text = "trudny";
      text2 = "Szansa na przedmiot: 15%";
      break;
    default:
      styleColorText = "hard";
      text = "trudny";
      text2 = "Szansa na przedmiot: 15%";
      break;
  }
  return valueOfPopup ? (
    <div className="popup-LobbyDungeonInfoPopup">
      <div className="LobbyDungeonInfoPopup-inner">
        <button
          className="close-btn"
          onClick={() => {
            showPopup();
          }}
        >
          X
        </button>
        <div className="title">{value1}</div>
        <div className="description">{value2}</div>
        <div className="difficult"> Poziom trudności:</div>
        <div className="level">
          {" "}
          <span className={`${styleColorText}`}>{text}</span>
        </div>
        <div className="expPoints">Doświadczenie</div>
        <div className="expPointsValue">{value3} XP</div>
        <div className="money">Waluta</div>
        <div className="moneyValue">{value4} Złota</div>
        <div className="itemBox">
          <div className="item">{text2}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default LobbyDungeonInfo;
