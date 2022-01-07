export default function showingEquipmentImage(heroClass, typeOfItem, numberOfItem) {
    let url;

    switch (heroClass) {
        case 'Mage':
            switch (typeOfItem) {
                case 'head':
                    switch (numberOfItem) {
                        case 0:
                            url = '/mage/head/1';
                            break;
                        case 1:
                            url = '/mage/head/2';
                            break;
                        case 2:
                            url = '/mage/head/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'necklace':
                    switch (numberOfItem) {
                        case 0:
                            url = '/mage/necklace/1';
                            break;
                        case 1:
                            url = '/mage/necklace/2';
                            break;
                        case 2:
                            url = '/mage/necklace/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'armor':
                    switch (numberOfItem) {
                        case 0:
                            url = '/mage/armor/1';
                            break;
                        case 1:
                            url = '/mage/armor/2';
                            break;
                        case 2:
                            url = '/mage/armor/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'pants':
                    switch (numberOfItem) {
                        case 0:
                            url = '/mage/pants/1';
                            break;
                        case 1:
                            url = '/mage/pants/2';
                            break;
                        case 2:
                            url = '/mage/pants/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'boots':
                    switch (numberOfItem) {
                        case 0:
                            url = '/mage/boots/1';
                            break;
                        case 1:
                            url = '/mage/boots/2';
                            break;
                        case 2:
                            url = '/mage/boots/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'weapon':
                    switch (numberOfItem) {
                        case 0:
                            url = '/mage/weapon/1';
                            break;
                        case 1:
                            url = '/mage/weapon/2';
                            break;
                        case 2:
                            url = '/mage/weapon/3';
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'Berserk':
            switch (typeOfItem) {
                case 'head':
                    switch (numberOfItem) {
                        case 0:
                            url = '/berserk/head/1';
                            break;
                        case 1:
                            url = '/berserk/head/2';
                            break;
                        case 2:
                            url = '/berserk/head/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'necklace':
                    switch (numberOfItem) {
                        case 0:
                            url = '/berserk/necklace/1';
                            break;
                        case 1:
                            url = '/berserk/necklace/2';
                            break;
                        case 2:
                            url = '/berserk/necklace/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'armor':
                    switch (numberOfItem) {
                        case 0:
                            url = '/berserk/armor/1';
                            break;
                        case 1:
                            url = '/berserk/armor/2';
                            break;
                        case 2:
                            url = '/berserk/armor/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'pants':
                    switch (numberOfItem) {
                        case 0:
                            url = '/berserk/pants/1';
                            break;
                        case 1:
                            url = '/berserk/pants/2';
                            break;
                        case 2:
                            url = '/berserk/pants/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'boots':
                    switch (numberOfItem) {
                        case 0:
                            url = '/berserk/boots/1';
                            break;
                        case 1:
                            url = '/berserk/boots/2';
                            break;
                        case 2:
                            url = '/berserk/boots/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'weapon':
                    switch (numberOfItem) {
                        case 0:
                            url = '/berserk/weapon/1';
                            break;
                        case 1:
                            url = '/berserk/weapon/2';
                            break;
                        case 2:
                            url = '/berserk/weapon/3';
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'Priest':
            switch (typeOfItem) {
                case 'head':
                    switch (numberOfItem) {
                        case 0:
                            url = '/priest/head/1';
                            break;
                        case 1:
                            url = '/priest/head/2';
                            break;
                        case 2:
                            url = '/priest/head/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'necklace':  
                    switch (numberOfItem) {
                        case 0:
                            url = '/priest/necklace/1';
                            break;
                        case 1:
                            url = '/priest/necklace/2';
                            break;
                        case 2:
                            url = '/priest/necklace/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'armor': 
                    switch (numberOfItem) {
                        case 0:
                            url = '/priest/armor/1';
                            break;
                        case 1:
                            url = '/priest/armor/2';
                            break;
                        case 2:
                            url = '/priest/armor/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'pants':
                    switch (numberOfItem) {
                        case 0:
                            url = '/priest/pants/1';
                            break;
                        case 1:
                            url = '/priest/pants/2';
                            break;
                        case 2:
                            url = '/priest/pants/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'boots':
                    switch (numberOfItem) {
                        case 0:
                            url = '/priest/boots/1';
                            break;
                        case 1:
                            url = '/priest/boots/2';
                            break;
                        case 2:
                            url = '/priest/boots/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'weapon':
                    switch (numberOfItem) {
                        case 0:
                            url = '/priest/weapon/1';
                            break;
                        case 1:
                            url = '/priest/weapon/2';
                            break;
                        case 2:
                            url = '/priest/weapon/3';
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'Hunter':
            switch (typeOfItem) {
                case 'head': 
                    switch (numberOfItem) {
                        case 0:
                            url = '/hunter/head/1';
                            break;
                        case 1:
                            url = '/hunter/head/2';
                            break;
                        case 2:
                            url = '/hunter/head/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'necklace':
                    switch (numberOfItem) {
                        case 0:
                            url = '/hunter/necklace/1';
                            break;
                        case 1:
                            url = '/hunter/necklace/2';
                            break;
                        case 2:
                            url = '/hunter/necklace/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'armor':
                    switch (numberOfItem) {
                        case 0:
                            url = '/hunter/armor/1';
                            break;
                        case 1:
                            url = '/hunter/armor/2';
                            break;
                        case 2:
                            url = '/hunter/armor/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'pants':
                    switch (numberOfItem) {
                        case 0:
                            url = '/hunter/pants/1';
                            break;
                        case 1:
                            url = '/hunter/pants/2';
                            break;
                        case 2:
                            url = '/hunter/pants/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'boots':
                    switch (numberOfItem) {
                        case 0:
                            url = '/hunter/boots/1';
                            break;
                        case 1:
                            url = '/hunter/boots/2';
                            break;
                        case 2:
                            url = '/hunter/boots/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'weapon':
                    switch (numberOfItem) {
                        case 0:
                            url = '/hunter/weapon/1';
                            break;
                        case 1:
                            url = '/hunter/weapon/2';
                            break;
                        case 2:
                            url = '/hunter/weapon/3';
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'Warrior':
            switch (typeOfItem) {
                case 'head':
                    switch (numberOfItem) {
                        case 0:
                            url = '/warrior/head/1';
                            break;
                        case 1:
                            url = '/warrior/head/2';
                            break;
                        case 2:
                            url = '/warrior/head/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'necklace':
                    switch (numberOfItem) {
                        case 0:
                            url = '/warrior/necklace/1';
                            break;
                        case 1:
                            url = '/warrior/necklace/2';
                            break;
                        case 2:
                            url = '/warrior/necklace/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'armor':
                    switch (numberOfItem) {
                        case 0:
                            url = '/warrior/armor/1';
                            break;
                        case 1:
                            url = '/warrior/armor/2';
                            break;
                        case 2:
                            url = '/warrior/armor/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'pants':
                    switch (numberOfItem) {
                        case 0:
                            url = '/warrior/pants/1';
                            break;
                        case 1:
                            url = '/warrior/pants/2';
                            break;
                        case 2:
                            url = '/warrior/pants/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'boots':
                    switch (numberOfItem) {
                        case 0:
                            url = '/warrior/boots/1';
                            break;
                        case 1:
                            url = '/warrior/boots/2';
                            break;
                        case 2:
                            url = '/warrior/boots/3';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'weapon':
                    switch (numberOfItem) {
                        case 0:
                            url = '/warrior/weapon/1';
                            break;
                        case 1:
                            url = '/warrior/weapon/2';
                            break;
                        case 2:
                            url = '/warrior/weapon/3';
                            break;
                        default:
                            break;
                    }
                    break;
                 default:
                    break;
            }
            break;
         default:
            break;
    }
    
    return url;
} 