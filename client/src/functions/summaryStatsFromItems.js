export default function summaryStatsFromItems(itemsInUse,type) {
    let valueOfItemsSummary;
    
    switch (type) {
        case 1://strength
            valueOfItemsSummary=itemsInUse.head.strength +itemsInUse.necklace.strength +itemsInUse.armor.strength +itemsInUse.pants.strength +itemsInUse.boots.strength + itemsInUse.weapon.strength;
        break;
        case 2://dexterity
            valueOfItemsSummary=itemsInUse.head.dexterity +itemsInUse.necklace.dexterity +itemsInUse.armor.dexterity +itemsInUse.pants.dexterity +itemsInUse.boots.dexterity +itemsInUse.weapon.dexterity;
            break;
        case 3://intellect
            valueOfItemsSummary= itemsInUse.head.intellect +itemsInUse.necklace.intellect +itemsInUse.armor.intellect +itemsInUse.pants.intellect +itemsInUse.boots.intellect +itemsInUse.weapon.intellect;
            break;
        case 4://stamina
            valueOfItemsSummary=itemsInUse.head.stamina +itemsInUse.necklace.stamina +itemsInUse.armor.stamina +itemsInUse.pants.stamina +itemsInUse.boots.stamina +itemsInUse.weapon.stamina;
            break;
        case 5://spirit
            valueOfItemsSummary=itemsInUse.head.spirit +itemsInUse.necklace.spirit +itemsInUse.armor.spirit +itemsInUse.pants.spirit +itemsInUse.boots.spirit +itemsInUse.weapon.spirit;
            break;
        case 6://defensive
            valueOfItemsSummary= itemsInUse.head.defensive +itemsInUse.necklace.defensive +itemsInUse.armor.defensive +itemsInUse.pants.defensive +itemsInUse.boots.defensive +itemsInUse.weapon.defensive;
            break;
        case 7://attack
            valueOfItemsSummary=itemsInUse.head.attack +itemsInUse.necklace.attack +itemsInUse.armor.attack +itemsInUse.pants.attack +itemsInUse.boots.attack +itemsInUse.weapon.attack;
            break;
    }
    return valueOfItemsSummary;
}











 
