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

    let attackValue;
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
            attackValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2);
            defensiveValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            strengthValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2);
            dexterityValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            intellectValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2);
            staminaValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            spiritValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2);
            break;
        case "Mage":
            attackValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            defensiveValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2);
            strengthValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2);
            dexterityValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            intellectValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            staminaValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 3) / 2);
            spiritValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2); 
            break;
        case "Priest":
            attackValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            defensiveValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            strengthValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2);
            dexterityValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            intellectValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2) ;
            staminaValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 3) / 2);
            spiritValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            break;
        case "Hunter":
            attackValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 3) / 2);
            defensiveValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2);
            strengthValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            dexterityValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            intellectValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2) ;
            staminaValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2) ;
            spiritValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 3) / 2) ;
            break;
        case "Berserk":
            attackValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2);
            defensiveValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 3) / 2);
            strengthValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 5) / 2);
            dexterityValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 2) / 2);
            intellectValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 1) / 2);
            staminaValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 3) / 2);
            spiritValue = Math.round((((Math.floor((Math.random() * 5) + 1)) * level) * 4) / 2);
            break;
    };
    } else {
        switch (heroClass) {
        case "Warrior": 
            attackValue = 1;
            defensiveValue = 5;
            strengthValue = 4;
            dexterityValue = 2;
            intellectValue = 1;
            staminaValue = 5;
            spiritValue = 3;
            break;
        case "Mage":
            attackValue = 5;
            defensiveValue = 1;
            strengthValue = 1;
            dexterityValue = 2;
            intellectValue = 5;
            staminaValue = 3;
            spiritValue = 4; 
            break;
        case "Priest":
            attackValue = 2;
            defensiveValue = 2;
            strengthValue = 1;
            dexterityValue = 2;
            intellectValue = 4;
            staminaValue = 3;
            spiritValue = 5;
            break;
        case "Hunter":
            attackValue = 3;
            defensiveValue = 4;
            strengthValue = 2;
            dexterityValue = 5;
            intellectValue = 1;
            staminaValue = 4;
            spiritValue = 3;
            break;
        case "Berserk":
            attackValue = 4;
            defensiveValue = 3;
            strengthValue = 5;
            dexterityValue = 2;
            intellectValue = 1;
            staminaValue = 3;
            spiritValue = 4;
            break;
    };
 }
    
 
    if (typeOfItemGeneration == 5) {
        defensiveValue = 0;
    } else {
        attackValue = 0;
    }
  

    let itemCost = (level * 2) * Math.floor((Math.random() * 5) + 1);

    if (itemAssignment == 1) {
        itemCost = itemCost * 10;
    }
    
    let nameOfItemsMagesHeads = ['head1', 'head2', 'head3'];
    let nameOfItemsMagesNecklaces = ['necklace1', 'necklace2', 'necklace3'];
    let nameOfItemsMagesChests = ['chest1', 'chest2', 'chest3'];
    let nameOfItemsMagesPantses = ['pants1', 'pants2', 'pants3'];
    let nameOfItemsMagesBoots = ['boots1', 'boots2', 'boots3'];
    let nameOfItemsMagesWeapons = ['weapon1', 'weapon2', 'weapon3'];

    let nameOfItemsPriestsHeads = ['head1', 'head2', 'head3'];
    let nameOfItemsPriestsNecklaces = ['necklace1', 'necklace2', 'necklace3'];
    let nameOfItemsPriestsChests = ['chest1', 'chest2', 'chest3'];
    let nameOfItemsPriestsPantses =['pants1', 'pants2', 'pants3'];
    let nameOfItemsPriestsBoots = ['boots1', 'boots2', 'boots3'];
    let nameOfItemsPriestsWeapons = ['weapon1', 'weapon2', 'weapon3'];
   
    let nameOfItemsWarriorsHeads = ['head1', 'head2', 'head3'];
    let nameOfItemsWarriorsNecklaces = ['necklace1', 'necklace2', 'necklace3'];
    let nameOfItemsWarriorsChests = ['chest1', 'chest2', 'chest3'];
    let nameOfItemsWarriorsPantses =['pants1', 'pants2', 'pants3'];
    let nameOfItemsWarriorsBoots = ['boots1', 'boots2', 'boots3'];
    let nameOfItemsWarriorsWeapons = ['weapon1', 'weapon2', 'weapon3'];
    
    
    let nameOfItemsHuntersHeads = ['hhead1', 'hhead2', 'hhead3'];
    let nameOfItemsHuntersNecklaces = ['hnecklace1', 'hnecklace2', 'hnecklace3'];
    let nameOfItemsHuntersChests = ['hchest1', 'hchest2', 'hchest3'];
    let nameOfItemsHuntersPantses =['hpants1', 'hpants2', 'hpants3'];
    let nameOfItemsHuntersBoots = ['hboots1', 'hboots2', 'hboots3'];
    let nameOfItemsHuntersWeapons =['hweapon1', 'hweapon2', 'hweapon3'];
    
    
    let nameOfItemsBerserksHeads = ['head1', 'head2', 'head3'];
    let nameOfItemsBerserksNecklaces = ['necklace1', 'necklace2', 'necklace3'];
    let nameOfItemsBerserksChests = ['chest1', 'chest2', 'chest3'];
    let nameOfItemsBerserksPantses =['pants1', 'pants2', 'pants3'];
    let nameOfItemsBerserksBoots = ['boots1', 'boots2', 'boots3'];
    let nameOfItemsBerserksWeapons = ['weapon1', 'weapon2', 'weapon3'];
    

    let typeOfItems = ['head', 'necklace','chest','pants','boots','weapon'];
    
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
                case 'chest':
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
                case 'chest':
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
                case 'chest':
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
                case 'chest':
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
                case 'chest':
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
        attack: attackValue,               
        defensive: defensiveValue,
        strength: strengthValue,               
        dexterity: dexterityValue,
        intellect: intellectValue,               
        stamina: staminaValue,
        spirit: spiritValue,
        cost: itemCost
    };

    return item;
};

