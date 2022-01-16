import creatingItem from "./creatingItem.js";
import createMissionDescription from "./createMissionDescription.js";

export default function createMission(firstValue, secondValue, level, dificultMode, heroClass) {
  let { mission } = {};

  let timeOfMission;
  let goldOfMission;
  let experienceOfMission;
  let timeOfMissions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

  let monsterHealtPoints;
  let monsterDefense;
  let monsterMinAttack;
  let monsterMaxAttack;

  switch (secondValue) {
    case 1:
      timeOfMission = timeOfMissions[0];

      break;
    case 2:
      timeOfMission = timeOfMissions[1];

      break;
    case 3:
      timeOfMission = timeOfMissions[2];

      break;
    case 4:
      timeOfMission = timeOfMissions[3];

      break;
    case 5:
      timeOfMission = timeOfMissions[4];

      break;
    case 6:
      timeOfMission = timeOfMissions[5];

      break;
    case 7:
      timeOfMission = timeOfMissions[6];
      break;
    case 8:
      timeOfMission = timeOfMissions[7];

      break;
    case 9:
      timeOfMission = timeOfMissions[8];

      break;
    case 10:
      timeOfMission = timeOfMissions[9];
      break;
    default:
      break;
  }
  let levelDificult;
  if (level < 10) {
    levelDificult = 50;
  } else if (level >= 10 && level < 20) {
    levelDificult = 150;
  } else if (level >= 20 && level < 30) {
    levelDificult = 400;
  } else if (level >= 30 && level < 40) {
    levelDificult = 750;
  } else if (level >= 40 && level < 50) {
    levelDificult = 1000;
  } else if (level >= 50 && level < 60) {
    levelDificult = 1250;
  } else if (level >= 60 && level < 70) {
    levelDificult = 2000;
  } else if (level >= 70 && level < 80) {
    levelDificult = 2500;
  }

  goldOfMission = secondValue * level * 4 * Math.floor(Math.random() * 10 + 1);
  experienceOfMission = secondValue * level * 5 * Math.floor(Math.random() * 10 + 1);
  monsterHealtPoints = dificultMode * level * Math.floor(Math.random() * levelDificult + 1000);
  monsterDefense = Math.floor(dificultMode * level * Math.floor(Math.random() * 10 + 5));
  do {
    monsterMinAttack = dificultMode * level * Math.floor(Math.random() * 2 + 1);
    monsterMaxAttack = dificultMode * level * Math.floor(Math.random() * 3 + 1);
  } while (monsterMinAttack >= monsterMaxAttack);

  let { dataOfItem } = {};
  let chanceOnItem = Math.random() * 100 + 1;
  if (chanceOnItem <= 20) {
    let itemInMission = creatingItem(heroClass, level, 0, 0, 0);
    dataOfItem = itemInMission;
  } else {
    dataOfItem = {
      isEmpty: true,
    };
  }
  let missionData = createMissionDescription(firstValue);
  mission = {
    missionTitle: missionData.missionTitle,
    missionDescription: missionData.missionDescription,
    missionTime: timeOfMission,
    missionRewardGold: goldOfMission,
    missionRewardExp: experienceOfMission,
    item: dataOfItem,
    monster: {
      monsterName: missionData.nameOfMonster,
      monsterHealtPoints: monsterHealtPoints,
      monsterMinAttack: monsterMinAttack,
      monsterMaxAttack: monsterMaxAttack,
      monsterDefense: monsterDefense,
      monsterLevel: level,
      monsterNumber: missionData.monsterNumber,
    },
  };

  return mission;
}
