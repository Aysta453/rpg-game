import summaryStatsFromItems from "./summaryStatsFromItems.js";

export default function playerGameValues(hero, itemsInUse, stats) {
    let sumStatsFromItemsStrength=summaryStatsFromItems(itemsInUse, 1);
    let sumStatsFromItemsDexterity=summaryStatsFromItems(itemsInUse, 2);
    let sumStatsFromItemsIntellect=summaryStatsFromItems(itemsInUse, 3);
    let sumStatsFromItemsStamina=summaryStatsFromItems(itemsInUse, 4);
    let sumStatsFromItemsSpirit=summaryStatsFromItems(itemsInUse, 5);
    let sumStatsFromItemsDefensive=summaryStatsFromItems(itemsInUse, 6);

    let { data } = {};
    let healthPoints;
    let manaPoints;
    let minAttack;
    let maxAttack;
    let magicMinAttack;
    let magicMaxAttack;
    let healingPower;
    let defensePoints;
    let chanceOnDodge;
    let chanceOnBlock;
    let chanceOnCritHit;
    let chanceOnHit;


    switch (hero.heroClass) {
        case 'Mage':

            healthPoints = Math.floor(((stats.stamina + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsStamina) * 2) / 2);
            manaPoints = Math.floor(((stats.spirit + stats.intellect + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect) * 4) / 2);
            minAttack = Math.floor((((stats.strength + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsStrength) * itemsInUse.weapon.minAttack) * 1) / 10);
            maxAttack = Math.floor((((stats.strength + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsStrength) * itemsInUse.weapon.maxAttack) * 1) / 10);
            magicMinAttack = Math.floor((((stats.intellect + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect) * itemsInUse.weapon.minAttack) * 5) / 10);
            magicMaxAttack = Math.floor((((stats.intellect + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect) * itemsInUse.weapon.maxAttack) * 5) / 10);
            healingPower = Math.floor(((stats.spirit + stats.intellect + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect) * 0) / 2);
            defensePoints = Math.floor(((stats.spirit + stats.stamina + stats.strength + sumStatsFromItemsStrength + sumStatsFromItemsSpirit + sumStatsFromItemsStamina + sumStatsFromItemsDefensive) * 2) / 2)*1/10;
            chanceOnDodge = ((((((stats.spirit + stats.dexterity + sumStatsFromItemsSpirit + sumStatsFromItemsDexterity) * 2) / 2) / 10)));
            chanceOnBlock = ((((stats.strength + stats.stamina + stats.spirit + sumStatsFromItemsDefensive + sumStatsFromItemsSpirit + sumStatsFromItemsStrength) * 1) / 2) / 10);
            chanceOnCritHit = ((((stats.intellect + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect) * 5) / 2) / 10);
            chanceOnHit = ((((stats.dexterity + stats.intellect + stats.spirit + sumStatsFromItemsIntellect + sumStatsFromItemsSpirit + sumStatsFromItemsDexterity) * 4) / 2) / 10);
            break;
        
        case 'Warrior':
        break;
    }

    data = {
        healthPoints:healthPoints,
        manaPoints:manaPoints,
        minAttack:minAttack,
        maxAttack:maxAttack,
        magicMinAttack:magicMinAttack,
        magicMaxAttack:magicMaxAttack,
        healingPower:healingPower,
        defensePoints:defensePoints,
        chanceOnDodge:chanceOnDodge,
        chanceOnBlock:chanceOnBlock,
        chanceOnCritHit:chanceOnCritHit,
        chanceOnHit:chanceOnHit,
    }
    return data;
}


