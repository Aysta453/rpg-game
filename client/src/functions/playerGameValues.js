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


    
    function logCalc(base, x) {
	var a = Math.log(x);
    var b = Math.log(base);
  
    return a / b;
}

    switch (hero.heroClass) {
        case 'Mage':
             bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.intellect * passsiveSkills.firstSkill.valueOfSkill) : (0);
             bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.stamina * passsiveSkills.secondSkill.valueOfSkill) : (0);
             bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.spirit * passsiveSkills.thirdSkill.valueOfSkill) : (0);
             bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.dexterity * passsiveSkills.forthSkill.valueOfSkill) : (0);
             bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.strength * passsiveSkills.fifthSkill.valueOfSkill) : (0);
             bp9= passsiveSkills.ninthSkill.isUnlocked ? (stats.intellect * passsiveSkills.ninthSkill.valueOfSkill) : (0);
             bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfSkill) : (0);
            
             strength = stats.strength + sumStatsFromItemsStrength + bp5;
             dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp4;
             intellect = stats.intellect + sumStatsFromItemsIntellect + bp9 + bp1;
             stamina = stats.stamina + sumStatsFromItemsStamina + bp2;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp10 + bp3;
            
            healthPoints = Math.floor((stamina + (spirit / 10))*1);
            bp7= passsiveSkills.seventhSkill.isUnlocked ? (healthPoints * passsiveSkills.seventhSkill.valueOfSkill) : (0);
            healthPoints = Math.floor(healthPoints +bp7);

            manaPoints = Math.floor(intellect + (spirit / 10));
            bp8 = passsiveSkills.eighthSkill.isUnlocked ? (manaPoints * passsiveSkills.eighthSkill.valueOfSkill) : (0);
            manaPoints = Math.floor(manaPoints + bp8);

             defensePoints = Math.floor(sumStatsFromItemsDefensive/10);

            chanceOnDodge =logCalc(1.50, ((dexterity+ (spirit / 10)) / 10));
            chanceOnBlock =logCalc(1.60, (((strength + sumStatsFromItemsDefensive + (spirit / 10))/ 10)));        
            chanceOnCritHit = logCalc(1.20, (intellect + spirit / 10));
            chanceOnHit = logCalc(1.06, ((dexterity + strength+ intellect + (spirit / 10))/ hero.level));
            bonusToSpecialAttack = Math.floor((intellect + (spirit / 10)) / 1);
            
            regHp = 1;
            regMp = 1;
            bp11= passsiveSkills.eleventhSkill.isUnlocked ? ( passsiveSkills.eleventhSkill.valueOfSkill) : (0);
            regMp = regMp + bp11;

            minAttack = Math.floor(((intellect + (spirit / 10)) +itemsInUse.weapon.minAttack ));
            maxAttack = Math.floor(((intellect + (spirit / 10)) +itemsInUse.weapon.maxAttack ));

            bpatt1min = passsiveSkills.sixthSkill.isUnlocked ? (minAttack * passsiveSkills.sixthSkill.valueOfSkill) : (0);
            bpatt1max = passsiveSkills.sixthSkill.isUnlocked ? (maxAttack * passsiveSkills.sixthSkill.valueOfSkill) : (0);
            bpatt2min = passsiveSkills.twelfthSkill.isUnlocked ? (minAttack * passsiveSkills.twelfthSkill.valueOfSkill) : (0);
            bpatt2max = passsiveSkills.twelfthSkill.isUnlocked ? (maxAttack * passsiveSkills.twelfthSkill.valueOfSkill) : (0);
            minAttack = Math.floor(minAttack + bpatt1min + bpatt2min);
            maxAttack = Math.floor(maxAttack + bpatt1max + bpatt2max);
            break;       
        case 'Warrior':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.stamina * passsiveSkills.firstSkill.valueOfSkill) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.strength * passsiveSkills.secondSkill.valueOfSkill) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.dexterity * passsiveSkills.thirdSkill.valueOfSkill) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.spirit * passsiveSkills.forthSkill.valueOfSkill) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfSkill) : (0);
            bp9= passsiveSkills.ninthSkill.isUnlocked ? (stats.spirit * passsiveSkills.ninthSkill.valueOfSkill) : (0);
            bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.strength * passsiveSkills.tenthSkill.valueOfSkill) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp10 + bp2;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp3;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp5;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp1;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp9 + bp4;
            
            manaPoints = Math.floor(intellect + ((spirit) / 10));

            chanceOnDodge = logCalc(1.40, ((dexterity + (spirit / 10) / 10)));
            chanceOnBlock = logCalc(1.15,(((strength + sumStatsFromItemsDefensive + (spirit / 10)) / 10)));
            chanceOnCritHit = logCalc(1.30,((strength + spirit) / 10));
            chanceOnHit = logCalc(1.06, ((dexterity + strength+ intellect + (spirit / 10))/ hero.level));
            regHp = 1;
            regMp = 1;
            
            healthPoints = Math.floor((stamina + (spirit / 10))*5);
            bp6= passsiveSkills.sixthSkill.isUnlocked ? (healthPoints * passsiveSkills.sixthSkill.valueOfSkill) : (0);
            bp12= passsiveSkills.twelfthSkill.isUnlocked ? (healthPoints * passsiveSkills.twelfthSkill.valueOfSkill) : (0);
            healthPoints = Math.floor(healthPoints + bp6 + bp12);


             defensePoints = Math.floor(sumStatsFromItemsDefensive/10);
            bp7 = passsiveSkills.seventhSkill.isUnlocked ? (defensePoints * passsiveSkills.seventhSkill.valueOfSkill) : (0);
            bp11 = passsiveSkills.eleventhSkill.isUnlocked ? (defensePoints* passsiveSkills.eleventhSkill.valueOfSkill) : (0);
            defensePoints = Math.floor(defensePoints + bp7 + bp11);
            minAttack = Math.floor(((strength + (spirit / 10)) +itemsInUse.weapon.minAttack ));
            maxAttack = Math.floor(((strength + (spirit / 10)) + itemsInUse.weapon.maxAttack));

            bonusToSpecialAttack = Math.floor((strength + (spirit / 10))/5);
            
            bpatt1min = passsiveSkills.eighthSkill.isUnlocked ? (minAttack *(0.1* passsiveSkills.eighthSkill.valueOfSkill)) : (0);
            bpatt1max = passsiveSkills.eighthSkill.isUnlocked ? (maxAttack *(0.1* passsiveSkills.eighthSkill.valueOfSkill)) : (0);

            minAttack = Math.floor(minAttack + bpatt1min);
            maxAttack = Math.floor(maxAttack + bpatt1max);

            break;
        case 'Hunter':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.dexterity * passsiveSkills.firstSkill.valueOfSkill) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.stamina * passsiveSkills.secondSkill.valueOfSkill) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.spirit * passsiveSkills.thirdSkill.valueOfSkill) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.strength * passsiveSkills.forthSkill.valueOfSkill) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfSkill) : (0);

            bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfSkill) : (0);
            bp11= passsiveSkills.eleventhSkill.isUnlocked ? (stats.dexterity * passsiveSkills.eleventhSkill.valueOfSkill) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp4;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp1+bp11;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp5;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp2;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp3 + bp10;
            
            regHp = 1;
            regMp = 1;
             defensePoints = Math.floor(sumStatsFromItemsDefensive/10);
            chanceOnBlock =logCalc(1.35, (((strength + sumStatsFromItemsDefensive + (spirit / 10))/ 10)));    
            chanceOnCritHit = logCalc(1.25,(((dexterity) + (spirit)) * 3 / 10));
            chanceOnHit = logCalc(1.06, ((dexterity + strength+ intellect + (spirit / 10))/ hero.level));

            chanceOnDodge =((dexterity+ (spirit / 10)) / 10);
            bp9 = passsiveSkills.ninthSkill.isUnlocked ? (passsiveSkills.ninthSkill.valueOfSkill) : (0);
            chanceOnDodge = logCalc(1.20,(chanceOnDodge + bp9));

            healthPoints = Math.floor((stamina + (spirit / 10))*2);
            bp7 = passsiveSkills.seventhSkill.isUnlocked ? (healthPoints * passsiveSkills.ninthSkill.valueOfSkill) : (0);
            healthPoints = Math.floor(healthPoints + bp7);


            manaPoints = Math.floor(intellect + (spirit / 10));
            bp8 = passsiveSkills.eighthSkill.isUnlocked ? (manaPoints * passsiveSkills.eighthSkill.valueOfSkill) : (0);
            manaPoints = Math.floor(manaPoints + bp8);

            minAttack = Math.floor(((dexterity + (spirit / 10)) +itemsInUse.weapon.minAttack ));
            maxAttack = Math.floor(((dexterity + (spirit / 10)) + itemsInUse.weapon.maxAttack));
            bonusToSpecialAttack = Math.floor((dexterity + (spirit / 10))/3);

            bpatt1min = passsiveSkills.sixthSkill.isUnlocked ? (minAttack* passsiveSkills.sixthSkill.valueOfSkill): (0);
            bpatt1max = passsiveSkills.sixthSkill.isUnlocked ? (maxAttack* passsiveSkills.sixthSkill.valueOfSkill): (0);
            bpatt2min = passsiveSkills.twelfthSkill.isUnlocked ? (minAttack* passsiveSkills.twelfthSkill.valueOfSkill): (0);
            bpatt2max = passsiveSkills.twelfthSkill.isUnlocked ? (maxAttack * passsiveSkills.twelfthSkill.valueOfSkill) : (0);
            
            minAttack = Math.floor(minAttack + bpatt1min + bpatt2min);
            maxAttack = Math.floor(maxAttack + bpatt1max + bpatt2max);
            break;
        case 'Priest':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.spirit * passsiveSkills.firstSkill.valueOfSkill) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.intellect * passsiveSkills.secondSkill.valueOfSkill) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.stamina * passsiveSkills.thirdSkill.valueOfSkill) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.dexterity * passsiveSkills.forthSkill.valueOfSkill) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.strength * passsiveSkills.fifthSkill.valueOfSkill) : (0);

            bp9 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfSkill) : (0);
            bp10= passsiveSkills.eleventhSkill.isUnlocked ? (stats.intellect * passsiveSkills.eleventhSkill.valueOfSkill) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp5;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp4;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp2+bp10;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp3;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp1 + bp9;
            regHp = 1;
            bonusToSpecialAttack = Math.floor((intellect + (spirit / 10)) / 2);   
             defensePoints = Math.floor(sumStatsFromItemsDefensive/10);

            chanceOnDodge =logCalc(1.50, ((dexterity+ (spirit / 10)) / 10));
            chanceOnBlock =logCalc(1.60, (((strength + sumStatsFromItemsDefensive + (spirit / 10))/ 10)));        
            chanceOnCritHit = logCalc(1.25, (intellect + spirit / 10));
            chanceOnHit = logCalc(1.06, ((dexterity + strength + intellect + (spirit / 10)) / hero.level));
     
            regMp = 1;
            bp11 = passsiveSkills.eleventhSkill.isUnlocked ? (passsiveSkills.eleventhSkill.valueOfSkill) : (0);
            regMp = regMp + bp11;
            healthPoints = Math.floor((stamina + (spirit / 10))*1);
            bp6 = passsiveSkills.sixthSkill.isUnlocked ? (healthPoints* passsiveSkills.sixthSkill.valueOfSkill) : (0);
            healthPoints = Math.floor(healthPoints + bp6);

            manaPoints = Math.floor(intellect + (spirit / 10));
            bp8 = passsiveSkills.eighthSkill.isUnlocked ? (manaPoints* passsiveSkills.eighthSkill.valueOfSkill): (0);
            bp12 = passsiveSkills.twelfthSkill.isUnlocked ? (manaPoints * passsiveSkills.twelfthSkill.valueOfSkill) : (0);
            manaPoints = Math.floor(manaPoints + bp8 + bp12);

        
           
            minAttack = Math.floor(((intellect + (spirit / 10)) +itemsInUse.weapon.minAttack ));
            maxAttack = Math.floor(((intellect + (spirit / 10)) +itemsInUse.weapon.maxAttack ));
            
            bpatt1min = passsiveSkills.seventhSkill.isUnlocked ? (minAttack* passsiveSkills.seventhSkill.valueOfSkill): (0);
            bpatt1max = passsiveSkills.seventhSkill.isUnlocked ? (maxAttack * passsiveSkills.seventhSkill.valueOfSkill) : (0);
             
            minAttack = Math.floor(minAttack + bpatt1min );
            maxAttack = Math.floor(maxAttack + bpatt1max );
 break;
        case 'Berserk':
            bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.strength * passsiveSkills.firstSkill.valueOfSkill) : (0);
            bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.dexterity * passsiveSkills.secondSkill.valueOfSkill) : (0);
            bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.stamina * passsiveSkills.thirdSkill.valueOfSkill) : (0);
            bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.spirit * passsiveSkills.forthSkill.valueOfSkill) : (0);
            bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfSkill) : (0);

            bp6 = passsiveSkills.sixthSkill.isUnlocked ? (stats.strength * passsiveSkills.sixthSkill.valueOfSkill) : (0);
            bp8= passsiveSkills.eighthSkill.isUnlocked ? (stats.spirit * passsiveSkills.eighthSkill.valueOfSkill) : (0);

            strength = stats.strength + sumStatsFromItemsStrength + bp1 + bp6;
            dexterity = stats.dexterity + sumStatsFromItemsDexterity + bp2;
            intellect = stats.intellect + sumStatsFromItemsIntellect + bp5;
            stamina = stats.stamina + sumStatsFromItemsStamina + bp3;
            spirit = stats.spirit + sumStatsFromItemsSpirit + bp4 + bp8;

 
            regMp = 1;
            manaPoints = Math.floor(intellect + (spirit / 10));
            bonusToSpecialAttack = Math.floor((intellect + (spirit / 10)) / 4);
             defensePoints = Math.floor(sumStatsFromItemsDefensive/10);
       
 
            chanceOnDodge =logCalc(1.45, ((dexterity+ (spirit / 10)) / 10));
            chanceOnBlock =logCalc(1.60, (((strength + sumStatsFromItemsDefensive + (spirit / 10))/ 10)));        
            chanceOnCritHit = logCalc(1.22, (intellect + spirit / 10));
            chanceOnHit = logCalc(1.06, ((dexterity + strength+ intellect + (spirit / 10))/ hero.level));

            regHp = 1;
            bp11 = passsiveSkills.eleventhSkill.isUnlocked ? (passsiveSkills.eleventhSkill.valueOfSkill) : (0);
            regHp = regHp + bp11;

            healthPoints = Math.floor((stamina + (spirit / 10))*3);
            bp10 = passsiveSkills.tenthSkill.isUnlocked ? (healthPoints* passsiveSkills.tenthSkill.valueOfSkill): (0);
            healthPoints = Math.floor(healthPoints + bp10);

            minAttack = Math.floor(((strength + (spirit / 10)) +itemsInUse.weapon.minAttack ));
            maxAttack = Math.floor(((strength + (spirit / 10)) +itemsInUse.weapon.maxAttack ));

            bpatt1min = passsiveSkills.seventhSkill.isUnlocked ? (minAttack* passsiveSkills.seventhSkill.valueOfSkill): (0);
            bpatt1max = passsiveSkills.seventhSkill.isUnlocked ? (maxAttack * passsiveSkills.seventhSkill.valueOfSkill) : (0);

            bpatt2min = passsiveSkills.ninthSkill.isUnlocked ? (minAttack* passsiveSkills.ninthSkill.valueOfSkill): (0);
            bpatt2max = passsiveSkills.ninthSkill.isUnlocked ? (maxAttack * passsiveSkills.ninthSkill.valueOfSkill) : (0);

            bpatt3min = passsiveSkills.twelfthSkill.isUnlocked ? (minAttack* passsiveSkills.twelfthSkill.valueOfSkill): (0);
            bpatt3max = passsiveSkills.twelfthSkill.isUnlocked ? (maxAttack * passsiveSkills.twelfthSkill.valueOfSkill) : (0);

            minAttack = Math.floor(minAttack + bpatt1min + bpatt2min + bpatt3min);
            maxAttack = Math.floor(maxAttack + bpatt1max + bpatt2max + bpatt3max);
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


