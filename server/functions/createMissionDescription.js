export default function createMissionDescription(firstValue) {
    let nameOfMission;
    let descriptionOfMission;
    let nameOfMonster;
    let monsterNumber;
    let nameOfMissions = ['Mroczny Las', 'Lodowe Pustkowie', 'Zakazane Bagno', 'Królewskie Przedmieścia', 'Wielki Targ', 'Port Myrefall', 'Szmaragdowa Wieża', 'Lodowa Góra', 'Lochy'];
    let descriptionOfMissions = ['W Mrocznym lesie grasuje Zielony Ork napadający na przechodzących kupców i wieśniaków. Starszy wioski wyznaczył za niego sowitą nagrodę. Wyrusz w podróż do Mrocznego Lasu i zabij tę bestię!',
        'Słyszysz pogłoskę o kreaturze zamieszkującej lodowe pustkowie. Wyprawa książęca nie może wyruszyć, dopóki bestia nie zostanie zabita. Zgładź bydlaka!',
        'Wieśniacy są napadani przez orka z odstraszającym zapachem cebuli. Bestia zamieszkuje bagno, znajdujące się przy wiosce Landerwood. Pozbądź się jej.',
        'Królewski zabójca obrócił się przeciwko swojemu władcy. Wyrusz na przedmieścia miasta i odnajdź zdrajcę, zanim dokona zamachu na królestwo Veltewind. Za tą przysługę, Król słono Ci zapłaci.',
        'W mieście jak co tydzień odbywa się targ. Straż otrzymała informację o grasującym złodzieju. Złap go, a otrzymasz nagrodę.',
        'W leśnej gęstwinie grasuje łotr napadający na bogatych, jak i biednych. Wszystkie te pieniądze wydaje na rozrywki w porcie. Sprawdź, że następną wizytę odbędzie u Ciebie.',
        'W szmaragdowym mieście, w szmaragdowej wieży, szmaragdowy smok, broni ją od grabieży. Pozbądź się bestii, aby odzyskać królewski skarb.',
        'W dalekich górach jest stara legenda, że wielki lodowy smok śpi na ogromnym skarbie. Sprawdź, czy są to wyłącznie plotki.',
        'W podmiejskich lochach zaczął grasować wielki czarny jak smoła smok. Coraz więcej osadników jest przerażona, że zostanie pożarta i uciekają z miasta. Król błaga Cię o pomoc. Pewien szewczyk kombinuje coś z magiczną owcą. Pokonasz smoka czy zostawisz to zadanie szewczykowi?'];
    let nameOfMonsters = ['Zielony Ork', 'Lodowy Ork', 'Bagnisty Ork', 'Królewski Zabójca', 'Złodziej Kieł', 'Portowy Łotrzyk', 'Szmaragdowy Smok', 'Lodowy Smok', 'Czarny Smok'];

    let {missionData} = {};

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

    missionData = {
        missionTitle: nameOfMission,
        missionDescription: descriptionOfMission,
        nameOfMonster: nameOfMonster,
        monsterNumber: monsterNumber,
    }
    return missionData;
}