import summaryStatsFromItems from "./summaryStatsFromItems.js";

export default function playerGameValues(hero, itemsInUse, stats,passsiveSkills) {
    let sumStatsFromItemsStrength=summaryStatsFromItems(itemsInUse, 1);
    let sumStatsFromItemsDexterity=summaryStatsFromItems(itemsInUse, 2);
    let sumStatsFromItemsIntellect=summaryStatsFromItems(itemsInUse, 3);
    let sumStatsFromItemsStamina=summaryStatsFromItems(itemsInUse, 4);
    let sumStatsFromItemsSpirit=summaryStatsFromItems(itemsInUse, 5);
    let sumStatsFromItemsDefensive = summaryStatsFromItems(itemsInUse, 6);

    let strength;
    let dexterity;
    let intellect;
    let stamina;
    let spirit;
    let bp1;
    let bp2;
    let bp3;
    let bp4;
    let bp5;
    let bp6;
    let bp7;
    let bp8;
    let bp9;
    let bp10;
    let bp11;
    let bp12;
    let bpatt1min;
    let bpatt1max;
    let bpatt2min;
    let bpatt2max;
    let bpatt3min;
    let bpatt3max;

    let { data } = {};
    let healthPoints;
    let manaPoints;
    let minAttack;
    let maxAttack;
    let bonusToSpecialAttack;
    let defensePoints;
    let chanceOnDodge;
    let chanceOnBlock;
    let chanceOnCritHit;
    let chanceOnHit;
    let regHp;
    let regMp;
    console.log('test');
    console.log(passsiveSkills.firstSkill);

    switch (hero.heroClass) {
        case 'Mage':
             bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.intellect * passsiveSkills.firstSkill.valueOfBonus) : (0);
             bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.stamina * passsiveSkills.secondSkill.valueOfBonus) : (0);
             bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.spirit * passsiveSkills.thirdSkill.valueOfBonus) : (0);
             bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.dexterity * passsiveSkills.forthSkill.valueOfBonus) : (0);
             bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.strength * passsiveSkills.fifthSkill.valueOfBonus) : (0);
             bp9= passsiveSkills.ninthSkill.isUnlocked ? (stats.intellect * passsiveSkills.ninthSkill.valueOfBonus) : (0);
             bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfBonus) : (0);
            
             strength = stats.strength + sumStatsFromItemsStrength + bp5;
             dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp4;
             intellect = stats.intellect + sumStatsFromItemsIntellect + bp9 + bp1;
             stamina = stats.stamina + sumStatsFromItemsStamina + bp2;
             spirit = stats.spirit + sumStatsFromItemsSpirit + bp10 + bp3;

            healthPoints = Math.floor(((stamina + (spirit / 10)) * 5) / 2);
            bp7= passsiveSkills.seventhSkill.isUnlocked ? (healthPoints * passsiveSkills.seventhSkill.valueOfBonus) : (0);
            healthPoints = Math.floor(healthPoints +bp7);

            manaPoints = Math.floor(((intellect + (spirit / 10)) * 4) / 2);
            bp8 = passsiveSkills.eighthSkill.isUnlocked ? (manaPoints * passsiveSkills.eighthSkill.valueOfBonus) : (0);
            manaPoints = Math.floor(manaPoints + bp8);
            defensePoints = Math.floor(sumStatsFromItemsDefensive / 10);
            chanceOnDodge = (((dexterity+ (spirit / 10)) * 1) / 10);
            chanceOnBlock = ((strength + sumStatsFromItemsDefensive + (spirit / 10)) * 1 / 10);        
            chanceOnCritHit = (( + intellect + spirit) * 5 / 10);
            chanceOnHit = ((dexterity+intellect+(spirit/10)) * 1 / hero.level);
            bonusToSpecialAttack = Math.floor((intellect + (spirit / 10)));
            regHp = 1;

            regMp = 1;
            bp11= passsiveSkills.eleventhSkill.isUnlocked ? ( passsiveSkills.eleventhSkill.valueOfBonus) : (0);
            regMp = regMp + bp11;

            minAttack = Math.floor((intellect + (spirit / 10)) * (itemsInUse.weapon.minAttack * 1) / 10);
            maxAttack = Math.floor((intellect + (spirit / 10)) * (itemsInUse.weapon.maxAttack * 1) / 10);

    
            bpatt1min = passsiveSkills.sixthSkill.isUnlocked ? (minAttack * passsiveSkills.sixthSkill.valueOfBonus) : (0);
            bpatt1max = passsiveSkills.sixthSkill.isUnlocked ? (maxAttack * passsiveSkills.sixthSkill.valueOfBonus) : (0);
            bpatt2min = passsiveSkills.twelfthSkill.isUnlocked ? (minAttack * passsiveSkills.twelfthSkill.valueOfBonus) : (0);
            bpatt2max = passsiveSkills.twelfthSkill.isUnlocked ? (maxAttack * passsiveSkills.twelfthSkill.valueOfBonus) : (0);
            minAttack = Math.floor(minAttack + bpatt1min + bpatt2min);
            maxAttack = Math.floor(maxAttack + bpatt1max + bpatt2max);


            break;
        
        case 'Warrior':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.stamina * passsiveSkills.firstSkill.valueOfBonus) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.strength * passsiveSkills.secondSkill.valueOfBonus) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.dexterity * passsiveSkills.thirdSkill.valueOfBonus) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.spirit * passsiveSkills.forthSkill.valueOfBonus) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfBonus) : (0);
            bp9= passsiveSkills.ninthSkill.isUnlocked ? (stats.spirit * passsiveSkills.ninthSkill.valueOfBonus) : (0);
            bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.strength * passsiveSkills.tenthSkill.valueOfBonus) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp10 + bp2;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp3;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp5;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp1;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp9 + bp4;
            
            manaPoints = Math.floor(((intellect + ((spirit) / 10)) * 1) / 2);
            chanceOnDodge = ((((dexterity) + ((spirit) / 10)) * 4) / 10);
            chanceOnBlock = (((strength) + sumStatsFromItemsDefensive + ((spirit) / 10)) * 5 / 10);
            chanceOnCritHit = (((strength) + (spirit)) * 1 / 10);
            chanceOnHit = (((dexterity) + (strength) + ((spirit) / 10)) * 1 / hero.level);
            regHp = 1;
            regMp = 1;
            bonusToSpecialAttack = Math.floor(((strength) + ((spirit) / 10)));
            
            healthPoints = Math.floor(((stamina + ((spirit) / 10)) * 5) / 2);
            bp6= passsiveSkills.sixthSkill.isUnlocked ? (healthPoints * passsiveSkills.sixthSkill.valueOfBonus) : (0);
            bp12= passsiveSkills.twelfthSkill.isUnlocked ? (healthPoints * passsiveSkills.twelfthSkill.valueOfBonus) : (0);
            healthPoints = Math.floor(healthPoints + bp6 + bp12);


            defensePoints = Math.floor(sumStatsFromItemsDefensive / 10);
            bp7 = passsiveSkills.seventhSkill.isUnlocked ? (defensePoints * passsiveSkills.seventhSkill.valueOfBonus) : (0);
            bp11 = passsiveSkills.eleventhSkill.isUnlocked ? (defensePoints* passsiveSkills.eleventhSkill.valueOfBonus) : (0);
            defensePoints = Math.floor(defensePoints + bp7 + bp11);

            
            minAttack = Math.floor(((strength) + ((spirit) / 10)) * (itemsInUse.weapon.minAttack * 4) / 10);
            maxAttack = Math.floor(((strength) + ((spirit) / 10)) * (itemsInUse.weapon.maxAttack * 4) / 10);
            bpatt1min = passsiveSkills.eighthSkill.isUnlocked ? (minAttack * passsiveSkills.eighthSkill.valueOfBonus) : (0);
            bpatt1min = passsiveSkills.eighthSkill.isUnlocked ? (maxAttack * passsiveSkills.eighthSkill.valueOfBonus) : (0);
            minAttack = Math.floor(minAttack + bpatt1min);
            minAttack = Math.floor(maxAttack + bpatt1max);

            break;
        case 'Hunter':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.dexterity * passsiveSkills.firstSkill.valueOfBonus) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.stamina * passsiveSkills.secondSkill.valueOfBonus) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.spirit * passsiveSkills.thirdSkill.valueOfBonus) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.strength * passsiveSkills.forthSkill.valueOfBonus) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfBonus) : (0);

            bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfBonus) : (0);
            bp11= passsiveSkills.eleventhSkill.isUnlocked ? (stats.dexterity * passsiveSkills.eleventhSkill.valueOfBonus) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp4;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp1+bp11;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp5;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp2;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp3 + bp10;
            
            regHp = 1;
            regMp = 1;
            defensePoints = Math.floor(sumStatsFromItemsDefensive / 10);
            chanceOnBlock = (((strength) + sumStatsFromItemsDefensive + ((spirit) / 10)) * 3 / 10);
            chanceOnCritHit = (((dexterity) + (spirit)) * 3 / 10);
            chanceOnHit = (((dexterity) + (strength) + ((spirit) / 10)) * 1 / hero.level);
            bonusToSpecialAttack = Math.floor(((dexterity) + ((spirit) / 10)));
            chanceOnDodge = ((((dexterity) + ((spirit) / 10)) * 5) / 10);
            bp9 = passsiveSkills.ninthSkill.isUnlocked ? (passsiveSkills.ninthSkill.valueOfBonus) : (0);
            chanceOnDodge = (chanceOnDodge + bp9);

            healthPoints = Math.floor(((stamina + ((spirit) / 10)) * 3) / 2);
            bp7 = passsiveSkills.seventhSkill.isUnlocked ? (healthPoints * passsiveSkills.ninthSkill.valueOfBonus) : (0);
            healthPoints = Math.floor(healthPoints + bp7);

            manaPoints = Math.floor(((intellect + ((spirit) / 10)) * 2) / 2);
            bp8 = passsiveSkills.eighthSkill.isUnlocked ? (manaPoints * passsiveSkills.eighthSkill.valueOfBonus) : (0);
            manaPoints = Math.floor(manaPoints + bp8);


            minAttack = Math.floor(((dexterity) + ((spirit) / 10)) * (itemsInUse.weapon.minAttack * 4) / 10);
            maxAttack = Math.floor(((dexterity) + ((spirit) / 10)) * (itemsInUse.weapon.maxAttack * 4) / 10);

            bpatt1min = passsiveSkills.sixthSkill.isUnlocked ? (minAttack* passsiveSkills.sixthSkill.valueOfBonus): (0);
            bpatt1max = passsiveSkills.sixthSkill.isUnlocked ? (maxAttack* passsiveSkills.sixthSkill.valueOfBonus): (0);
            bpatt2min = passsiveSkills.twelfthSkill.isUnlocked ? (minAttack* passsiveSkills.twelfthSkill.valueOfBonus): (0);
            bpatt2max = passsiveSkills.twelfthSkill.isUnlocked ? (maxAttack * passsiveSkills.twelfthSkill.valueOfBonus) : (0);
            
            minAttack = Math.floor(minAttack + bpatt1min + bpatt2min);
            minAttack = Math.floor(maxAttack + bpatt1max + bpatt2max);
            break;
        case 'Priest':

            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.spirit * passsiveSkills.firstSkill.valueOfBonus) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.intellect * passsiveSkills.secondSkill.valueOfBonus) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.stamina * passsiveSkills.thirdSkill.valueOfBonus) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.dexterity * passsiveSkills.forthSkill.valueOfBonus) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.strength * passsiveSkills.fifthSkill.valueOfBonus) : (0);

            bp9 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfBonus) : (0);
            bp10= passsiveSkills.eleventhSkill.isUnlocked ? (stats.intellect * passsiveSkills.eleventhSkill.valueOfBonus) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp5;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp4;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp2+bp10;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp3;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp1 + bp9;
            regHp = 1;
            bonusToSpecialAttack = Math.floor(((intellect) + ((spirit) / 10)));     
            defensePoints = Math.floor(sumStatsFromItemsDefensive / 10);
            chanceOnDodge = ((((dexterity) + ((spirit) / 10)) * 2) / 10);
            chanceOnBlock = (((strength) + sumStatsFromItemsDefensive + ((spirit) / 10)) * 2 / 10);
            chanceOnCritHit = ((intellect + spirit) * 2 / 10);
             chanceOnHit = ((dexterity + intellect + ((spirit) / 10)) * 1 / hero.level);
           
            regMp = 1;
            bp11 = passsiveSkills.eleventhSkill.isUnlocked ? (passsiveSkills.eleventhSkill.valueOfBonus) : (0);
            regMp = regMp + bp11;
            healthPoints = Math.floor(((stamina + ((spirit) / 10)) * 1) / 2);
            bp6 = passsiveSkills.sixthSkill.isUnlocked ? (healthPoints* passsiveSkills.sixthSkill.valueOfBonus) : (0);
            healthPoints = Math.floor(healthPoints + bp6);

            manaPoints = Math.floor(((intellect + ((spirit) / 10)) * 5) / 2);
            bp8 = passsiveSkills.eighthSkill.isUnlocked ? (manaPoints* passsiveSkills.eighthSkill.valueOfBonus): (0);
            bp12 = passsiveSkills.twelfthSkill.isUnlocked ? (manaPoints * passsiveSkills.twelfthSkill.valueOfBonus) : (0);
            manaPoints = Math.floor(manaPoints + bp8 + bp12);

        
            minAttack = Math.floor((intellect + (spirit/ 10)) * (itemsInUse.weapon.minAttack * 1) / 10);
            maxAttack = Math.floor((intellect + (spirit / 10)) * (itemsInUse.weapon.maxAttack * 1) / 10);
            
            bpatt1min = passsiveSkills.seventhSkill.isUnlocked ? (minAttack* passsiveSkills.seventhSkill.valueOfBonus): (0);
            bpatt1max = passsiveSkills.seventhSkill.isUnlocked ? (maxAttack * passsiveSkills.seventhSkill.valueOfBonus) : (0);
             
            minAttack = Math.floor(minAttack + bpatt1min );
            minAttack = Math.floor(maxAttack + bpatt1max );
 break;
        case 'Berserk':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.strength * passsiveSkills.firstSkill.valueOfBonus) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.dexterity * passsiveSkills.secondSkill.valueOfBonus) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.stamina * passsiveSkills.thirdSkill.valueOfBonus) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.spirit * passsiveSkills.forthSkill.valueOfBonus) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfBonus) : (0);

            bp6 = passsiveSkills.sixthSkill.isUnlocked ? (stats.strength * passsiveSkills.sixthSkill.valueOfBonus) : (0);
            bp8= passsiveSkills.eighthSkill.isUnlocked ? (stats.spirit * passsiveSkills.eighthSkill.valueOfBonus) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp1 + bp6;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp2;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp5;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp3;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp4 + bp8;

 
            regMp = 1;
            manaPoints = Math.floor(((intellect + (spirit / 10)) * 1) / 2);

            bonusToSpecialAttack = Math.floor(((strength) + ((spirit) / 10)));
            defensePoints = Math.floor(sumStatsFromItemsDefensive / 10);
            chanceOnDodge = (((dexterity + (spirit / 10)) * 3) / 10);
            chanceOnBlock = ((strength + sumStatsFromItemsDefensive + (spirit / 10)) * 4 / 10);
            chanceOnCritHit = ((  strength + spirit) * 4 / 10);
            chanceOnHit = ((dexterity + strength + (spirit / 10)) * 1 / hero.level);
            

            regHp = 1;
            bp11 = passsiveSkills.eleventhSkill.isUnlocked ? (passsiveSkills.eleventhSkill.valueOfBonus) : (0);
            regHp = regHp + bp11;

            healthPoints = Math.floor(((stamina + (spirit / 10)) * 4) / 2);
            bp10 = passsiveSkills.tenthSkill.isUnlocked ? (healthPoints* passsiveSkills.tenthSkill.valueOfBonus): (0);
            healthPoints = Math.floor(healthPoints + bp10);

            minAttack = Math.floor((strength+ (spirit / 10)) * (itemsInUse.weapon.minAttack * 5) / 10);
            maxAttack = Math.floor((strength + (spirit / 10)) * (itemsInUse.weapon.maxAttack * 5) / 10);

            bpatt1min = passsiveSkills.seventhSkill.isUnlocked ? (minAttack* passsiveSkills.seventhSkill.valueOfBonus): (0);
            bpatt1max = passsiveSkills.seventhSkill.isUnlocked ? (maxAttack* passsiveSkills.seventhSkill.valueOfBonus): (0);
            bpatt2min = passsiveSkills.ninthSkill.isUnlocked ? (minAttack* passsiveSkills.ninthSkill.valueOfBonus): (0);
            bpatt2max = passsiveSkills.ninthSkill.isUnlocked ? (maxAttack * passsiveSkills.ninthSkill.valueOfBonus) : (0);
            bpatt3min = passsiveSkills.twelfthSkill.isUnlocked ? (minAttack* passsiveSkills.twelfthSkill.valueOfBonus): (0);
            bpatt3max = passsiveSkills.twelfthSkill.isUnlocked ? (maxAttack * passsiveSkills.twelfthSkill.valueOfBonus) : (0);
            minAttack = Math.floor(minAttack + bpatt1min + bpatt2min + bpatt3min);
            minAttack = Math.floor(maxAttack + bpatt1max + bpatt2max + bpatt3max);
            break;
        default:
            break;
    }

    data = {
        healthPoints:healthPoints,
        manaPoints:manaPoints,
        minAttack:minAttack,
        maxAttack:maxAttack,
        bonusToSpecialAttack:bonusToSpecialAttack,
        defensePoints:defensePoints,
        chanceOnDodge:chanceOnDodge,
        chanceOnBlock:chanceOnBlock,
        chanceOnCritHit:chanceOnCritHit,
        chanceOnHit: chanceOnHit,
        regMp: regMp,
        regHp:regHp,
    }
    return data;
}


