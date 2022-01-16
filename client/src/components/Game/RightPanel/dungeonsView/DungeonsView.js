import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DungeonsView.css";
import DungeonView from "./DungeonView";
import { setPlayerValues } from "../../../../actions/playerGame";
import playerGameValues from "../../../../functions/playerGameValues";
const DungeonsView = ({ setWindowOfElements, setButtons, socket }) => {
  socket.on();
  const dispatch = useDispatch();
  const dungeons = useSelector((state) => state.dungeons);
  const hero = useSelector((state) => state.hero);
  const stats = useSelector((state) => state.stats);
  const itemInUse = useSelector((state) => state.itemInUse);
  const skills = useSelector((state) => state.skills);
  let data = playerGameValues(hero, itemInUse, stats, skills.passive);

  const moveToActualGroups = () => {
    setWindowOfElements(110);
  };
  const createRoomSocket = (nameOfRoom) => {
    socket.emit("createRoom", nameOfRoom);
  };
  useEffect(() => {
    dispatch(setPlayerValues(data));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="dungeonsView">
        <div className="title">
          <button
            className="optionJoin"
            onClick={() => {
              moveToActualGroups();
            }}
          >
            Dołącz
          </button>
          Tablica Wypraw
        </div>
        <div className="dungeons">
          <DungeonView dungeon={dungeons.firstDungeon} createRoomSocket={createRoomSocket} setWindowOfElements={setWindowOfElements} setButtons={setButtons} />
          <DungeonView dungeon={dungeons.secondDungeon} createRoomSocket={createRoomSocket} setWindowOfElements={setWindowOfElements} setButtons={setButtons} />
          <DungeonView dungeon={dungeons.thirdDungeon} createRoomSocket={createRoomSocket} setWindowOfElements={setWindowOfElements} setButtons={setButtons} />
        </div>
      </div>
    </>
  );
};

export default DungeonsView;
