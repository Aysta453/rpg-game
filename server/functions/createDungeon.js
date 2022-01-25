import createMissionDescription from "./createMissionDescription.js";

export default function createMission(firstValue, secondValue, level, dificultMode) {
  let { dungeon } = {};

  let goldOfDungeon;
  let experienceOfDungeon;
  let monsterHealtPoints;
  let monsterDefense;
  let monsterMinAttack;
  let monsterMaxAttack;
  let levelDificult;
  let dungeonDifficult;
  if (level < 10) {
    levelDificult = 250;
  } else if (level >= 10 && level < 20) {
    levelDificult = 900;
  } else if (level >= 20 && level < 30) {
    levelDificult = 2000;
  } else if (level >= 30 && level < 40) {
    levelDificult = 3000;
  } else if (level >= 40 && level < 50) {
    levelDificult = 4000;
  } else if (level >= 50 && level < 60) {
    levelDificult = 5000;
  } else if (level >= 60 && level < 70) {
    levelDificult = 10000;
  } else if (level >= 70 && level < 80) {
    levelDificult = 12500;
  }

  if (dificultMode === 2) {
    dungeonDifficult = "easy";
  } else if (dificultMode === 4) {
    dungeonDifficult = "medium";
  } else if (dificultMode === 6) {
    dungeonDifficult = "hard";
  }

  goldOfDungeon = secondValue * level * 10 * Math.floor(Math.random() * 10 + 1);
  experienceOfDungeon = secondValue * level * 15 * Math.floor(Math.random() * 10 + 1);

  monsterHealtPoints = dificultMode * level * Math.floor(Math.random() * levelDificult + 1000);
  monsterDefense = Math.floor(dificultMode * level * Math.floor(Math.random() * 25 + 5));
  do {
    monsterMinAttack = dificultMode * level * Math.floor(Math.random() * 25 + 1);
    monsterMaxAttack = dificultMode * level * Math.floor(Math.random() * 30 + 1);
  } while (monsterMinAttack >= monsterMaxAttack);

  let dungeonData = createMissionDescription(firstValue);

  dungeon = {
    dungeonTitle: dungeonData.missionTitle,
    dungeonDescription: dungeonData.missionDescription,
    dungeonRewardGold: goldOfDungeon,
    dungeonRewardExp: experienceOfDungeon,
    dungeonDifficult: dungeonDifficult,
    monster: {
      monsterName: dungeonData.nameOfMonster,
      monsterHealtPoints: monsterHealtPoints,
      currentMonsterHealtPoints: monsterHealtPoints,
      monsterMinAttack: monsterMinAttack,
      monsterMaxAttack: monsterMaxAttack,
      monsterDefense: monsterDefense,
      monsterLevel: level,
      monsterNumber: dungeonData.monsterNumber,
    },
  };

  return dungeon;
}
