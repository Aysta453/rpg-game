import React from "react";
import { useSelector, useDispatch } from "react-redux";
import showingEquipmentImage from "../../../../functions/showingEquipmentImage";
import { addrewardsaftermission, increasediamond } from "../../../../actions/hero";
import { newmissions } from "../../../../actions/missions";
import { assignitemtoinventory } from "../../../../actions/inventory";
import { addnewavailablepoint } from "../../../../actions/skills";
import { newdungeons } from "../../../../actions/dungeons";
import { deleteroom } from "../../../../actions/rooms";

const MultiGamePopupWin = ({ valueOfPopup, setButtons, setWindowOfElements, changePopup, socket, memberPartyId }) => {
  const rooms = useSelector((state) => state.rooms);
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  let isItemAsReward = rooms.players[memberPartyId].item.isEmpty;
  let diamondReward = 0;
  let diamondChance = Math.random() * 100 + 1;
  if (diamondChance <= 10) {
    diamondReward = 1;
  }
  const handleSubmit = () => {
    let exp = hero.expStart + rooms.dungeonRewardExp;
    if (exp >= hero.expStop && (hero.level + 1) % 6 === 0) {
      dispatch(addnewavailablepoint({ owner: hero.owner }));
    } else {
    }
    if (diamondReward > 0) {
      dispatch(increasediamond({ owner: hero.owner, amountOfDiamonds: diamondReward }));
    } else {
    }
    dispatch(addrewardsaftermission({ owner: hero.owner, amountOfGold: rooms.dungeonRewardGold, Exp: rooms.dungeonRewardExp }));
    dispatch(newdungeons({ owner: hero.owner, level: hero.level }));
    if (isItemAsReward === false) {
      dispatch(assignitemtoinventory({ owner: hero.owner, item: rooms.players[memberPartyId].item }));
    }
    socket.emit("leaveRoom", rooms.roomName);
    if (hero.owner === rooms.owner) {
      dispatch(deleteroom({ id: rooms._id }));
    }
    setButtons();
    changePopup(1);
    setWindowOfElements(1);
  };

  let image;
  if (isItemAsReward === false) {
    image = showingEquipmentImage(hero.heroClass, rooms.players[memberPartyId].item.typeOfItem, rooms.players[memberPartyId].item.numberOfItem);
  }

  return valueOfPopup ? (
    <div className="popup-win">
      <div className="win-inner">
        <div className="title">Zwycięstwo!</div>
        <div className="description">
          <p>
            {" "}
            Odniosłeś zwycięstwo w trakcie wykonywania misji {rooms.dungeonTitle} pokonując potężnego potwora {rooms.monster.monsterName}.
          </p>
          <p> Jednak nie spoczywaj na laurach, to jest dopiero początek Twojej wielkiej przygody.</p>
        </div>
        <div className="rewards">
          <div className="title">Wynagrodzenie</div>
          <div className="money">
            Złoto: <span className={"moni"}>{rooms.dungeonRewardGold}</span>
          </div>
          {diamondReward > 0 ? (
            <div className="diamonds">
              Diamenty: <span className={"diam"}>{diamondReward}</span>
            </div>
          ) : (
            ""
          )}

          <div className="expoints">
            Punkty doświadczenia: <span className={"xp"}>{rooms.dungeonRewardExp}</span>
          </div>
          <div className="itemBox">
            {isItemAsReward ? (
              <div className="item"></div>
            ) : (
              <div className="item">
                <img className="imageSkill" src={`/images/eq${image}.png`} alt="" />
              </div>
            )}
          </div>
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
export default MultiGamePopupWin;
