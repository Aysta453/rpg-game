import creatingItem from "./creatingItem.js";

export default function createMission(firstValue,secondValue,level,dificultMode,heroClass) {
    let { mission } = {};
    let nameOfMission;
    let descriptionOfMission;
    let timeOfMission;
    let goldOfMission;
    let experienceOfMission;
    let nameOfMissions = ['Mroczny Las', 'Ludowe Pustkowie', 'Zakazane Bagno', 'Królewskie Przedmieścia', 'Wielki Targ', 'Las RavenHood', 'Szmaragdowa Wieża', 'Lodowa Góra', 'Lochy'];
    let descriptionOfMissions = ['Kupiec przemierzajacy mroczny las został napadniety przez dużego zielonego orka. Została wystawiona wysoka nagroda. Podejmiesz się wyprawy do mrocznego Lasu?',
        'Książęca wyprawa do sąsiedniego kraju została przerwana przez koczującego potwora na lodowym pustkowiu. Nagroda jest spora. Na pewno przyda Ci się gruby ubiór oraz coś ciepłego do picia. To jak, ruszasz?',
        'Wieśniacy są napadani przez głodnego orka w niewielkiej wiosce Landerwood. A jak dobrze wiemy, głodny ork to zły ork. Czas ruszać.',
        'Po małej sprzeczce z królem, jeden z jego zabójców postanowił działać na swoją rękę i terroryzuje przedmieścia. Czy chciałbyś należycie go oduczyć złych manier? Król słono płaci.',
        'W mieście krąży plotka o grasującym Johnym, który ostatnio zabardzo rozwinął skrzydła na miejscowym targu. Pasuje mu dać nauczkę by nie przywłaszczał swoich rzeczy.',
        'W okolicznym lesie zaczął szaleć jakiś Robin Chłód czy jakoś tak i okrada bogatych. Podobno rozdaje biednym, ale znając jego siedzi w barze i chwali się jaki to bogaty. Czeka na wizytę.',
        'W szmaragdowym mieście, w szmaragdowej wieży, królewna piękna w opresji długo czeka... Jakoś tak to szło, historia piękna ale czy prawdziwa? Sprawdź, na coś się przydasz.',
        'W dalekich górach jest stara legenda, że wielki lodowy smok śpi na ogromnym skarbu. Sprawdzisz to czy to tylko plotki?',
        'W podmiejskich lochach zaczął grasować wielki czarny jak smoła smok. Coraz więcej osadników jest przerażona, że zostanie pożarta i uciekają smoka. Król błaga Cię o pomoc. Pewien szewczyk kombinuje coś z magiczną owcą. Pokonasz smoka po swojemu czy się boisz?'];
    let nameOfMonsters = ['Zielony Ork', 'Lodowy Ork', 'Bagnisty Ork', 'Królewski Zabójca', 'Johny Lepkie Rączki', 'Leśny Łotrzyk', 'Szmaragdowy Smok', 'Lodowy Smok', 'Czarny Smok'];
    let timeOfMissions = [10, 20, 30, 40, 50, 60, 70, 90, 100,120];

    let nameOfMonster;
    let monsterHealtPoints;
    let monsterDefense;
    let monsterMinAttack;
    let monsterMaxAttack;
    let monsterNumber;
    
    switch (firstValue) {
        case 1:
            nameOfMission = nameOfMissions[0];
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
        default:
           
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
            break;
    };
function logCalc(base, x) {
	var a = Math.log(x);
    var b = Math.log(base);
  
    return a / b;
}

    goldOfMission = ((secondValue * level) * 2) * Math.floor((Math.random() * 10) + 1);  
    experienceOfMission = ((secondValue * level) * 3) * Math.floor((Math.random() * 10) + 1);

    monsterHealtPoints = ((dificultMode * level) * 20) * Math.floor((Math.random() * 10) + 1);
    monsterDefense =Math.floor(logCalc(1.30,((dificultMode * level) * 1) * Math.floor((Math.random() * 8) + 1)));
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