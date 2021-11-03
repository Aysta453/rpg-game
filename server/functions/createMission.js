import creatingItem from "./creatingItem.js";

export default function createMission(firstValue,secondValue,level,dificultMode,heroClass) {
    let { mission } = {};
    let nameOfMission;
    let descriptionOfMission;
    let timeOfMission;
    let goldOfMission;
    let experienceOfMission;
    let nameOfMissions = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10'];
    let descriptionOfMissions = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10'];
    let nameOfMonsters = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10'];
    let timeOfMissions = [30, 60, 120, 150, 180, 240, 300, 450, 520, 600];

    let nameOfMonster;
    let monsterHealtPoints;
    let monsterDefense;
    let monsterMinAttack;
    let monsterMaxAttack;
    let monsterNumber;
    
    switch (firstValue) {
        case 1:
            nameOfMission = nameOfMissions[firstValue];
            descriptionOfMission = descriptionOfMissions[0];
            nameOfMonster = nameOfMonsters[0];
            monsterNumber = 0;
            break;
        case 2:
            nameOfMission = nameOfMissions[1];
            descriptionOfMission = descriptionOfMissions[1];
            nameOfMonster = nameOfMonsters[1];
            monsterNumber = 1;
            break;
        case 3:
            nameOfMission = nameOfMissions[2];
            descriptionOfMission = descriptionOfMissions[2];
            nameOfMonster = nameOfMonsters[2];
            monsterNumber = 2;
            break;
        case 4:
            nameOfMission = nameOfMissions[3];
            descriptionOfMission = descriptionOfMissions[3];
            nameOfMonster = nameOfMonsters[3];
            monsterNumber = 3;
            break;
        case 5:
            nameOfMission = nameOfMissions[4];
            descriptionOfMission = descriptionOfMissions[4];
            nameOfMonster = nameOfMonsters[4];
            monsterNumber = 4;
            break;
        case 6:
            nameOfMission = nameOfMissions[5];
            descriptionOfMission = descriptionOfMissions[5];
            nameOfMonster = nameOfMonsters[5];
            monsterNumber = 5;
            break;
        case 7:
            nameOfMission = nameOfMissions[6];
            descriptionOfMission = descriptionOfMissions[6];
            nameOfMonster = nameOfMonsters[6];
            monsterNumber = 6;
            break;
        case 8:
            nameOfMission = nameOfMissions[7];
            descriptionOfMission = descriptionOfMissions[7];
            nameOfMonster = nameOfMonsters[7];
            monsterNumber = 7;
            break;
        case 9:
            
            nameOfMission = nameOfMissions[8];
            descriptionOfMission = descriptionOfMissions[8];
            nameOfMonster = nameOfMonsters[8];
            monsterNumber = 8;
            break;
        case 10:
            
            nameOfMission = nameOfMissions[9];
            descriptionOfMission = descriptionOfMissions[9];
            nameOfMonster = nameOfMonsters[9];
            monsterNumber = 9;
            break;
        default:
            nameOfMission = nameOfMissions[0];
            descriptionOfMission = descriptionOfMissions[0];
            nameOfMonster = nameOfMonsters[0];
            monsterNumber = 0;
            break;
    };

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
            timeOfMission = timeOfMissions[0];
            break;
    };

    goldOfMission = ((secondValue * level) * 2) * Math.floor((Math.random() * 10) + 1);  
    experienceOfMission = ((secondValue * level) * 3) * Math.floor((Math.random() * 10) + 1);

    monsterHealtPoints = ((dificultMode * level) * 20) * Math.floor((Math.random() * 10) + 1);
    monsterDefense = ((dificultMode * level) * 2) * Math.floor((Math.random() * 8) + 1);
    do {
        monsterMinAttack = ((dificultMode * level) * 1) * Math.floor((Math.random() * 2) + 1);
        monsterMaxAttack = ((dificultMode * level) * 2) * Math.floor((Math.random() * 2) + 1);
    }while (monsterMinAttack>= monsterMaxAttack)

    let { dataOfItem } = {};
    let chanceOnItem = Math.random() * 100 + 1;
    if (chanceOnItem <= 20) {
        let itemInMission = creatingItem(heroClass, level, 0, 0, 0);
        dataOfItem = itemInMission;
        
    } else {
        dataOfItem = {
            isEmpty: true,
        }
    }

    
    mission = {
        missionTitle: nameOfMission,
        missionDescription: descriptionOfMission,
        missionTime: timeOfMission,
        missionRewardGold: goldOfMission,
        missionRewardExp: experienceOfMission,
        item: dataOfItem,
        monster: {
            monsterName: nameOfMonster ,
            monsterHealtPoints:monsterHealtPoints,
            monsterMinAttack: monsterMinAttack,
            monsterMaxAttack: monsterMaxAttack,
            monsterDefense: monsterDefense,
            monsterLevel: level,
            monsterNumber:monsterNumber,
        },
    };

    return mission;
}