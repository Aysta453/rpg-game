import summaryStatsFromItems from "./summaryStatsFromItems.js";

export default function extendedstatsfunction(hero, itemsInUse, stats, type) {
    let sumStatsFromItemsStrength=summaryStatsFromItems(itemsInUse, 1);
    let sumStatsFromItemsDexterity=summaryStatsFromItems(itemsInUse, 2);
    let sumStatsFromItemsIntellect=summaryStatsFromItems(itemsInUse, 3);
    let sumStatsFromItemsStamina=summaryStatsFromItems(itemsInUse, 4);
    let sumStatsFromItemsSpirit=summaryStatsFromItems(itemsInUse, 5);
    let sumStatsFromItemsDefensive=summaryStatsFromItems(itemsInUse, 6);
    let valueOfExtendedStat;
    console.log(itemsInUse);
    switch (hero.heroClass) {
        case "Mage":
            // Statystyki - Mag 
            switch (type) {
                case 1: // punkty zycia
                    valueOfExtendedStat = Math.floor(((stats.stamina + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsStamina)*2)/2);
                    break;
                case 2: // punkty many
                      valueOfExtendedStat = Math.floor(((stats.spirit + stats.intellect + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect)*4)/2);   
                    break;
                case 3: // obrażenia wręcz 
                         valueOfExtendedStat = Math.floor((((stats.strength + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsStrength)*itemsInUse.weapon.minAttack)*1)/10);
                    break;
                case 4: // obrażenia magiczne
                        valueOfExtendedStat = Math.floor((((stats.intellect + stats.spirit + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect)*itemsInUse.weapon.maxAttack)*5)/10);
                    break;
                case 5: // moc lecznica
                         valueOfExtendedStat = Math.floor(((stats.spirit + stats.intellect + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect)*0)/2);   
                    break;
                case 6: // obrona
                         valueOfExtendedStat = Math.floor(((stats.spirit + stats.stamina +stats.strength+sumStatsFromItemsStrength+ sumStatsFromItemsSpirit + sumStatsFromItemsStamina + sumStatsFromItemsDefensive)*2)/2);   
                    break;
                case 7: // szansa na unik
                         valueOfExtendedStat = ((((stats.spirit + stats.dexterity + sumStatsFromItemsSpirit + sumStatsFromItemsDexterity)*2)/2)/10);   
                    break;
                case 8: // szansa na blok 
                        valueOfExtendedStat = ((((stats.strength +stats.stamina +stats.spirit + sumStatsFromItemsDefensive + sumStatsFromItemsSpirit + sumStatsFromItemsStrength)*1)/2)/10);   
                    break;
                case 9: //szansa na cios krytyczny
                        valueOfExtendedStat = ((((stats.intellect +stats.spirit  + sumStatsFromItemsSpirit + sumStatsFromItemsIntellect)*5)/2)/10);   
                    break;
                case 10: // szansa na trafienie
                        valueOfExtendedStat = ((((stats.dexterity +stats.intellect +stats.spirit + sumStatsFromItemsIntellect + sumStatsFromItemsSpirit + sumStatsFromItemsDexterity)*4)/2)/10);  
                    break;
            }
            break;
        case "Warrior":
          
            break;
        case "Hunter":
            // Statystyki - Warrior 
            
            break;
         case "Priest":
            // Statystyki - Warrior 
           
            break;
        case "Warrior":
            break;
        
    }



    return valueOfExtendedStat;
}


