/*
heroClass -- hero class
level -- actual level of hero
itemAssignment -- This help us to using with one function items already assigment to hero's inventory or first to shop
if 0 then this item going  to hero's inventory
if 1 then this item going to shop

ifNewCharacter -- allow us to create items to New Created Hero for start if 1 that's mean hero wasn't before so we create item for his equipment items 
if 0 then this don't mean is new Character - hero


typeOfSetItem that definds which item that would be 0- head, 1- necklace and etc.. if number is diffrent that nothing mean later.

*/
export default function creatingItem(heroClass, level, itemAssignment, ifNewCharacter, typeOfSetItem) {
    let { item } = {};

    let nameOfItem;
    let typeOfItem;

    let attackMinValue;
    let attackMaxValue;
    let defensiveValue;
    let strengthValue;
    let dexterityValue;
    let intellectValue;
    let staminaValue;
    let spiritValue;

    let typeOfItemGeneration;
    
    if (ifNewCharacter == 0) {
       typeOfItemGeneration = Math.floor((Math.random() * 6));
    } else {
        typeOfItemGeneration = typeOfSetItem;
    }


    let variantOfItem = Math.floor((Math.random() * 3));

    if (ifNewCharacter == 0) {
     switch (heroClass) {
         case "Warrior":
            do {
                attackMinValue =Math.round(((Math.random() * 3) + 1) * (level * 1));
                attackMaxValue =Math.round(((Math.random() * 3) + 1) * (level * 3));
            } while (attackMinValue >= attackMaxValue); 
             defensiveValue = Math.round(((Math.random() * 3) + 1) * (level /2));
             strengthValue = Math.round(((Math.random() * 3) + 1) * (level * 3));
             dexterityValue = Math.round(((Math.random() * 3) + 1) * (level * 2));
             intellectValue = Math.round(((Math.random() * 3) + 1) * (level * 1));
             staminaValue = Math.round(((Math.random() * 3) + 1) * (level * 5));
             spiritValue = Math.round(((Math.random() * 3) + 1) * (level * 2));
            break;
         case "Mage":
            do {
                attackMinValue =Math.round(((Math.random() * 3) + 1) * (level * 3));
                attackMaxValue =Math.round(((Math.random() * 3) + 1) * (level * 6));
            } while (attackMinValue >= attackMaxValue); 
             defensiveValue = Math.round(((Math.random() * 3) + 1) * (level /5));
             strengthValue = Math.round(((Math.random() * 3) + 1) * (level * 1));
             dexterityValue = Math.round(((Math.random() * 3) + 1) * (level * 2));
             intellectValue = Math.round(((Math.random() * 3) + 1) * (level * 5));
             staminaValue = Math.round(((Math.random() * 3) + 1) * (level * 2));
             spiritValue = Math.round(((Math.random() * 3) + 1) * (level * 4));
            break;
         case "Priest":
            do {
               attackMinValue =Math.round(((Math.random() * 3) + 1) * (level * 2));
                attackMaxValue =Math.round(((Math.random() * 3) + 1) * (level * 4));
            } while (attackMinValue >= attackMaxValue); 
             defensiveValue = Math.round(((Math.random() * 3) + 1) * (level /5));
             strengthValue = Math.round(((Math.random() * 3) + 1) * (level * 1));
             dexterityValue = Math.round(((Math.random() * 3) + 1) * (level * 2));
             intellectValue = Math.round(((Math.random() * 3) + 1) * (level * 5));
             staminaValue = Math.round(((Math.random() * 3) + 1) * (level * 1));
             spiritValue = Math.round(((Math.random() * 3) + 1) * (level * 5));
            break;
         case "Hunter":
            do {
               attackMinValue =Math.round(((Math.random() * 3) + 1) * (level * 3));
                attackMaxValue =Math.round(((Math.random() * 3) + 1) * (level * 5));
            } while (attackMinValue >= attackMaxValue); 
             defensiveValue = Math.round(((Math.random() * 3) + 1) * (level/3));
             strengthValue = Math.round(((Math.random() * 3) + 1) * (level * 3));
             dexterityValue = Math.round(((Math.random() * 3) + 1) * (level * 5));
             intellectValue = Math.round(((Math.random() * 3) + 1) * (level * 3));
             staminaValue = Math.round(((Math.random() * 3) + 1) * (level * 3));
             spiritValue = Math.round(((Math.random() * 3) + 1) * (level * 3));
            break;
         case "Berserk":
            do {
                attackMinValue =Math.round(((Math.random() * 3) + 1) * (level * 2));
                attackMaxValue =Math.round(((Math.random() * 3) + 1) * (level * 5));
            } while (attackMinValue >= attackMaxValue); 
             defensiveValue = Math.round(((Math.random() * 3) + 1) * (level /2));
             strengthValue = Math.round(((Math.random() * 3) + 1) * (level * 5));
             dexterityValue = Math.round(((Math.random() * 3) + 1) * (level * 1));
             intellectValue = Math.round(((Math.random() * 3) + 1) * (level * 2));
             staminaValue = Math.round(((Math.random() * 3) + 1) * (level * 4));
             spiritValue = Math.round(((Math.random() * 3) + 1) * (level * 1));
            break;
    };
    } else {
        switch (heroClass) {
        case "Warrior": 
            attackMinValue=2;
            attackMaxValue=8;
            defensiveValue = 5;
            strengthValue = 6;
            dexterityValue = 4;
            intellectValue = 2;
            staminaValue = 10;
            spiritValue = 6;
            break;
        case "Mage":
            attackMinValue=2;
            attackMaxValue=8;
            defensiveValue = 1;
            strengthValue = 4;
            dexterityValue = 4;
            intellectValue = 10;
            staminaValue = 6;
            spiritValue = 8; 
            break;
        case "Priest":
            attackMinValue=2;
            attackMaxValue=8;
            defensiveValue = 2;
            strengthValue = 2;
            dexterityValue = 4;
            intellectValue = 8;
            staminaValue = 6;
            spiritValue = 10;
            break;
        case "Hunter":
            attackMinValue=2;
            attackMaxValue=8;
            defensiveValue = 3;
            strengthValue = 4;
            dexterityValue = 10;
            intellectValue = 2;
            staminaValue = 8;
            spiritValue = 6;
            break;
        case "Berserk":
            attackMinValue=2;
            attackMaxValue=8;
            defensiveValue = 3;
            strengthValue = 10;
            dexterityValue = 4;
            intellectValue = 2;
            staminaValue = 6;
            spiritValue = 8;
            break;
    };
 }
    
 
    if (typeOfItemGeneration == 5) {
        defensiveValue = 0;
    } else {
        attackMinValue = 0;

        attackMaxValue = 0;
    }
  

    let itemCost = (level * 4) * Math.floor((Math.random() * 10) + 1);

    if (itemAssignment == 1) {
        itemCost = Math.floor(itemCost * 20);
    }
    
    let nameOfItemsMagesHeads = ['Czapka Inteligencji', 'Czapka Ognia', 'Czapka Lodu'];
    let nameOfItemsMagesNecklaces = ['Naszyjnik Ognia', 'Naszyjnik Lodu', 'Naszyjnik Inteligencji'];
    let nameOfItemsMagesChests = ['Szata Lodu', 'Szata Inteligencji', 'Szata Ognia'];
    let nameOfItemsMagesPantses = ['Spodnie Lodu', 'Spodnie Inteligencji', 'Spodnie Ognia'];
    let nameOfItemsMagesBoots = ['Buty Inteligencji', 'Buty Lodu', 'Buty Ognia'];
    let nameOfItemsMagesWeapons = ['Róźdzka Inteligencji', 'Róźdzka Ognia', 'Róźdzka Lodu'];

    let nameOfItemsPriestsHeads = ['Czapka Światła', 'Czapka Modlitwy', 'Czapka Mądrości'];
    let nameOfItemsPriestsNecklaces = ['Naszyjnik Światła', 'Naszyjnik Mądrości', 'Naszyjnik Modlitwy'];
    let nameOfItemsPriestsChests = ['Szata Mądrości', 'Szata Modlitwy', 'Szata Światła'];
    let nameOfItemsPriestsPantses =['Spodnie Mądrości', 'Spodnie Światła', 'Spodnie Modlitwy'];
    let nameOfItemsPriestsBoots = ['Buty Mądrości', 'Buty Modlitwy', 'Buty Światła'];
    let nameOfItemsPriestsWeapons = ['Kostur Światła', 'Kostur Modlitwy', 'Kostur Mądrości'];
   
    let nameOfItemsWarriorsHeads = ['Łuskowy Hełm', 'Miedziany Hełm', 'Stalowy Hełm'];
    let nameOfItemsWarriorsNecklaces = ['Łuskowy Naszyjnik', 'Miedziany Naszyjnik', 'Stalowy Naszyjnik'];
    let nameOfItemsWarriorsChests = ['Stalowa Zbroja', 'Łuskowa Zbroja', 'Miedziana Zbroja'];
    let nameOfItemsWarriorsPantses =['Miedziane Spodnie', 'Stalowe Spodnie', 'Łuskowe Spodnie'];
    let nameOfItemsWarriorsBoots = ['Miedziane Buty', 'Stalowe Buty', 'Łuskowe Buty'];
    let nameOfItemsWarriorsWeapons = ['Miedziany Miecz', 'Stalowy Miecz', 'Łuskowy Miecz'];
    
    
    let nameOfItemsHuntersHeads = ['Sokoli Kapelusz', 'Kapelusz Sprytu', 'Cienisty Kapelusz'];
    let nameOfItemsHuntersNecklaces = ['Cienisty Naszyjnik', 'Sokoli Naszyjnik', 'Naszyjnik Sprytu'];
    let nameOfItemsHuntersChests = ['Sokoli Kaftan', 'Kaftan Sprytu', 'Cienisty Kaftan'];
    let nameOfItemsHuntersPantses =['Cieniste Spodnie', 'Sokole Spodnie', 'Spodnie Sprytu'];
    let nameOfItemsHuntersBoots = ['Cieniste Buty', 'Sokole Buty', 'Buty Sprytu'];
    let nameOfItemsHuntersWeapons =['Cienisty Łuk', 'Łuk Sprytu', 'Sokoli Łuk'];
    
    
    let nameOfItemsBerserksHeads = ['Hełm Wściekłości', 'Hełm Szału', 'Krwisty Hełm'];
    let nameOfItemsBerserksNecklaces = ['Naszyjnik Szału', 'Naszyjnik Wściekłości', 'Naszyjnik Gniewu'];
    let nameOfItemsBerserksChests = ['Zbroja Wściekłości', 'Krwista Zbroja', 'Zbroja Szału'];
    let nameOfItemsBerserksPantses =['Krwiste Spodnie', 'Spodnie Szału', 'Spodnie Wściekłości'];
    let nameOfItemsBerserksBoots = ['Buty Szału', 'Buty Wściekłości', 'Krwiste Buty'];
    let nameOfItemsBerserksWeapons = ['Krwisty Topór', 'Topór Szału', 'Topór Wściekłości'];
    

    let typeOfItems = ['head', 'necklace','armor','pants','boots','weapon'];
    
    switch (heroClass) {
        case "Mage": 
            typeOfItem = typeOfItems[typeOfItemGeneration];
            switch (typeOfItem) {
                case 'head':
                    nameOfItem = nameOfItemsMagesHeads[variantOfItem];
                    break;
                case 'necklace':   
                    nameOfItem = nameOfItemsMagesNecklaces[variantOfItem];
                    break;
                case 'armor':
                    nameOfItem = nameOfItemsMagesChests[variantOfItem];
                    break;
                case 'pants':
                    nameOfItem = nameOfItemsMagesPantses[variantOfItem];
                    break;
                case 'boots':
                    nameOfItem = nameOfItemsMagesBoots[variantOfItem];
                    break;
                case 'weapon':
                    nameOfItem = nameOfItemsMagesWeapons[variantOfItem];
                    break;
            }
            break;
        case "Priest": 
            typeOfItem = typeOfItems[typeOfItemGeneration];
            switch (typeOfItem) {
                case 'head':
                    nameOfItem = nameOfItemsPriestsHeads[variantOfItem];
                    break;
                case 'necklace':   
                    nameOfItem = nameOfItemsPriestsNecklaces[variantOfItem];
                    break;
                case 'armor':
                    nameOfItem = nameOfItemsPriestsChests[variantOfItem];
                    break;
                case 'pants':
                    nameOfItem = nameOfItemsPriestsPantses[variantOfItem];
                    break;
                case 'boots':
                    nameOfItem = nameOfItemsPriestsBoots[variantOfItem];
                    break;
                case 'weapon':
                    nameOfItem = nameOfItemsPriestsWeapons[variantOfItem];
                    break;
            }
            break;
        case "Warrior": 
            typeOfItem = typeOfItems[typeOfItemGeneration];
            switch (typeOfItem) {
                case 'head':
                    nameOfItem = nameOfItemsWarriorsHeads[variantOfItem];
                    break;
                case 'necklace':   
                    nameOfItem = nameOfItemsWarriorsNecklaces[variantOfItem];
                    break;
                case 'armor':
                    nameOfItem = nameOfItemsWarriorsChests[variantOfItem];
                    break;
                case 'pants':
                    nameOfItem = nameOfItemsWarriorsPantses[variantOfItem];
                    break;
                case 'boots':
                    nameOfItem = nameOfItemsWarriorsBoots[variantOfItem];
                    break;
                case 'weapon':
                    nameOfItem = nameOfItemsWarriorsWeapons[variantOfItem];
                    break;
            }
            break;
        case "Hunter": 
            typeOfItem = typeOfItems[typeOfItemGeneration];
            switch (typeOfItem) {
                case 'head':
                    nameOfItem = nameOfItemsHuntersHeads[variantOfItem];
                    break;
                case 'necklace':   
                    nameOfItem = nameOfItemsHuntersNecklaces[variantOfItem];
                    break;
                case 'armor':
                    nameOfItem = nameOfItemsHuntersChests[variantOfItem];
                    break;
                case 'pants':
                    nameOfItem = nameOfItemsHuntersPantses[variantOfItem];
                    break;
                case 'boots':
                    nameOfItem = nameOfItemsHuntersBoots[variantOfItem];
                    break;
                case 'weapon':
                    nameOfItem = nameOfItemsHuntersWeapons[variantOfItem];
                    break;
            }
            break;
        case "Berserk": 
            typeOfItem = typeOfItems[typeOfItemGeneration];
            switch (typeOfItem) {
                case 'head':
                    nameOfItem = nameOfItemsBerserksHeads[variantOfItem];
                    break;
                case 'necklace':   
                    nameOfItem = nameOfItemsBerserksNecklaces[variantOfItem];
                    break;
                case 'armor':
                    nameOfItem = nameOfItemsBerserksChests[variantOfItem];
                    break;
                case 'pants':
                    nameOfItem = nameOfItemsBerserksPantses[variantOfItem];
                    break;
                case 'boots':
                    nameOfItem = nameOfItemsBerserksBoots[variantOfItem];
                    break;
                case 'weapon':
                    nameOfItem = nameOfItemsBerserksWeapons[variantOfItem];
                    break;
            }
            break;
    };

    item = {
        nameOfItem: nameOfItem,   
        typeOfItem: typeOfItem,
        minAttack:attackMinValue,
        maxAttack:attackMaxValue,
        defensive: defensiveValue,
        strength: strengthValue,               
        dexterity: dexterityValue,
        intellect: intellectValue,               
        stamina: staminaValue,
        spirit: spiritValue,
        cost: itemCost,
        numberOfItem: variantOfItem,
        isEmpty:false,
    };

    return item;
};

