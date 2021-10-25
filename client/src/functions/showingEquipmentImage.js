export default function showingEquipmentImage(heroClass, typeOfItem,size,numberOfItem) {
    let url;

    switch (heroClass) {
        case 'Mage':
            switch (typeOfItem) {
                case 'head':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/head/big/1';
                                    break;
                                case 1:
                                    url = '/mage/head/big/2';
                                    break;
                                case 2:
                                    url = '/mage/head/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/head/small/1';
                                    break;
                                case 1:
                                    url = '/mage/head/small/2';
                                    break;
                                case 2:
                                    url = '/mage/head/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'necklace':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/necklace/big/1';
                                    break;
                                case 1:
                                    url = '/mage/necklace/big/2';
                                    break;
                                case 2:
                                    url = '/mage/necklace/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/necklace/small/1';
                                    break;
                                case 1:
                                    url = '/mage/necklace/small/2';
                                    break;
                                case 2:
                                    url = '/mage/necklace/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'chest':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/armor/big/1';
                                    break;
                                case 1:
                                    url = '/mage/armor/big/2';
                                    break;
                                case 2:
                                    url = '/mage/armor/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/armor/small/1';
                                    break;
                                case 1:
                                    url = '/mage/armor/small/2';
                                    break;
                                case 2:
                                    url = '/mage/armor/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'pants':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/pants/big/1';
                                    break;
                                case 1:
                                    url = '/mage/pants/big/2';
                                    break;
                                case 2:
                                    url = '/mage/pants/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/pants/small/1';
                                    break;
                                case 1:
                                    url = '/mage/pants/small/2';
                                    break;
                                case 2:
                                    url = '/mage/pants/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'boots':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/boots/big/1';
                                    break;
                                case 1:
                                    url = '/mage/boots/big/2';
                                    break;
                                case 2:
                                    url = '/mage/boots/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/boots/small/1';
                                    break;
                                case 1:
                                    url = '/mage/boots/small/2';
                                    break;
                                case 2:
                                    url = '/mage/boots/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'weapon':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/weapon/big/1';
                                    break;
                                case 1:
                                    url = '/mage/weapon/big/2';
                                    break;
                                case 2:
                                    url = '/mage/weapon/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/mage/weapon/small/1';
                                    break;
                                case 1:
                                    url = '/mage/weapon/small/2';
                                    break;
                                case 2:
                                    url = '/mage/weapon/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case 'Berserk':
            switch (typeOfItem) {
                case 'head':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/head/big/1';
                                    break;
                                case 1:
                                    url = '/berserk/head/big/2';
                                    break;
                                case 2:
                                    url = '/berserk/head/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/head/small/1';
                                    break;
                                case 1:
                                    url = '/berserk/head/small/2';
                                    break;
                                case 2:
                                    url = '/berserk/head/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'necklace':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/necklace/big/1';
                                    break;
                                case 1:
                                    url = '/berserk/necklace/big/2';
                                    break;
                                case 2:
                                    url = '/berserk/necklace/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/necklace/small/1';
                                    break;
                                case 1:
                                    url = '/berserk/necklace/small/2';
                                    break;
                                case 2:
                                    url = '/berserk/necklace/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'chest':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/armor/big/1';
                                    break;
                                case 1:
                                    url = '/berserk/armor/big/2';
                                    break;
                                case 2:
                                    url = '/berserk/armor/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/armor/small/1';
                                    break;
                                case 1:
                                    url = '/berserk/armor/small/2';
                                    break;
                                case 2:
                                    url = '/berserk/armor/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'pants':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/pants/big/1';
                                    break;
                                case 1:
                                    url = '/berserk/pants/big/2';
                                    break;
                                case 2:
                                    url = '/berserk/pants/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/pants/small/1';
                                    break;
                                case 1:
                                    url = '/berserk/pants/small/2';
                                    break;
                                case 2:
                                    url = '/berserk/pants/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'boots':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/boots/big/1';
                                    break;
                                case 1:
                                    url = '/berserk/boots/big/2';
                                    break;
                                case 2:
                                    url = '/berserk/boots/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/boots/small/1';
                                    break;
                                case 1:
                                    url = '/berserk/boots/small/2';
                                    break;
                                case 2:
                                    url = '/berserk/boots/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'weapon':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/weapon/big/1';
                                    break;
                                case 1:
                                    url = '/berserk/weapon/big/2';
                                    break;
                                case 2:
                                    url = '/berserk/weapon/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/berserk/weapon/small/1';
                                    break;
                                case 1:
                                    url = '/berserk/weapon/small/2';
                                    break;
                                case 2:
                                    url = '/berserk/weapon/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case 'Priest':
            switch (typeOfItem) {
                case 'head':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/head/big/1';
                                    break;
                                case 1:
                                    url = '/priest/head/big/2';
                                    break;
                                case 2:
                                    url = '/priest/head/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/head/small/1';
                                    break;
                                case 1:
                                    url = '/priest/head/small/2';
                                    break;
                                case 2:
                                    url = '/priest/head/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'necklace':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/necklace/big/1';
                                    break;
                                case 1:
                                    url = '/priest/necklace/big/2';
                                    break;
                                case 2:
                                    url = '/priest/necklace/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/necklace/small/1';
                                    break;
                                case 1:
                                    url = '/priest/necklace/small/2';
                                    break;
                                case 2:
                                    url = '/priest/necklace/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'chest':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/armor/big/1';
                                    break;
                                case 1:
                                    url = '/priest/armor/big/2';
                                    break;
                                case 2:
                                    url = '/priest/armor/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/armor/small/1';
                                    break;
                                case 1:
                                    url = '/priest/armor/small/2';
                                    break;
                                case 2:
                                    url = '/priest/armor/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'pants':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/pants/big/1';
                                    break;
                                case 1:
                                    url = '/priest/pants/big/2';
                                    break;
                                case 2:
                                    url = '/priest/pants/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/pants/small/1';
                                    break;
                                case 1:
                                    url = '/priest/pants/small/2';
                                    break;
                                case 2:
                                    url = '/priest/pants/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'boots':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/boots/big/1';
                                    break;
                                case 1:
                                    url = '/priest/boots/big/2';
                                    break;
                                case 2:
                                    url = '/priest/boots/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/boots/small/1';
                                    break;
                                case 1:
                                    url = '/priest/boots/small/2';
                                    break;
                                case 2:
                                    url = '/priest/boots/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'weapon':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/weapon/big/1';
                                    break;
                                case 1:
                                    url = '/priest/weapon/big/2';
                                    break;
                                case 2:
                                    url = '/priest/weapon/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/priest/weapon/small/1';
                                    break;
                                case 1:
                                    url = '/priest/weapon/small/2';
                                    break;
                                case 2:
                                    url = '/priest/weapon/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case 'Hunter':
            switch (typeOfItem) {
                case 'head':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/head/big/1';
                                    break;
                                case 1:
                                    url = '/hunter/head/big/2';
                                    break;
                                case 2:
                                    url = '/hunter/head/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/head/small/1';
                                    break;
                                case 1:
                                    url = '/hunter/head/small/2';
                                    break;
                                case 2:
                                    url = '/hunter/head/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'necklace':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/necklace/big/1';
                                    break;
                                case 1:
                                    url = '/hunter/necklace/big/2';
                                    break;
                                case 2:
                                    url = '/hunter/necklace/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/necklace/small/1';
                                    break;
                                case 1:
                                    url = '/hunter/necklace/small/2';
                                    break;
                                case 2:
                                    url = '/hunter/necklace/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'chest':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/armor/big/1';
                                    break;
                                case 1:
                                    url = '/hunter/armor/big/2';
                                    break;
                                case 2:
                                    url = '/hunter/armor/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/armor/small/1';
                                    break;
                                case 1:
                                    url = '/hunter/armor/small/2';
                                    break;
                                case 2:
                                    url = '/hunter/armor/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'pants':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/pants/big/1';
                                    break;
                                case 1:
                                    url = '/hunter/pants/big/2';
                                    break;
                                case 2:
                                    url = '/hunter/pants/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/pants/small/1';
                                    break;
                                case 1:
                                    url = '/hunter/pants/small/2';
                                    break;
                                case 2:
                                    url = '/hunter/pants/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'boots':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/boots/big/1';
                                    break;
                                case 1:
                                    url = '/hunter/boots/big/2';
                                    break;
                                case 2:
                                    url = '/hunter/boots/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/boots/small/1';
                                    break;
                                case 1:
                                    url = '/hunter/boots/small/2';
                                    break;
                                case 2:
                                    url = '/hunter/boots/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'weapon':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/weapon/big/1';
                                    break;
                                case 1:
                                    url = '/hunter/weapon/big/2';
                                    break;
                                case 2:
                                    url = '/hunter/weapon/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/hunter/weapon/small/1';
                                    break;
                                case 1:
                                    url = '/hunter/weapon/small/2';
                                    break;
                                case 2:
                                    url = '/hunter/weapon/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case 'Warrior':
            switch (typeOfItem) {
                case 'head':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/head/big/1';
                                    break;
                                case 1:
                                    url = '/warrior/head/big/2';
                                    break;
                                case 2:
                                    url = '/warrior/head/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/head/small/1';
                                    break;
                                case 1:
                                    url = '/warrior/head/small/2';
                                    break;
                                case 2:
                                    url = '/warrior/head/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'necklace':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/necklace/big/1';
                                    break;
                                case 1:
                                    url = '/warrior/necklace/big/2';
                                    break;
                                case 2:
                                    url = '/warrior/necklace/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/necklace/small/1';
                                    break;
                                case 1:
                                    url = '/warrior/necklace/small/2';
                                    break;
                                case 2:
                                    url = '/warrior/necklace/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'chest':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/armor/big/1';
                                    break;
                                case 1:
                                    url = '/warrior/armor/big/2';
                                    break;
                                case 2:
                                    url = '/warrior/armor/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/armor/small/1';
                                    break;
                                case 1:
                                    url = '/warrior/armor/small/2';
                                    break;
                                case 2:
                                    url = '/warrior/armor/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'pants':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/pants/big/1';
                                    break;
                                case 1:
                                    url = '/warrior/pants/big/2';
                                    break;
                                case 2:
                                    url = '/warrior/pants/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/pants/small/1';
                                    break;
                                case 1:
                                    url = '/warrior/pants/small/2';
                                    break;
                                case 2:
                                    url = '/warrior/pants/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'boots':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/boots/big/1';
                                    break;
                                case 1:
                                    url = '/warrior/boots/big/2';
                                    break;
                                case 2:
                                    url = '/warrior/boots/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/boots/small/1';
                                    break;
                                case 1:
                                    url = '/warrior/boots/small/2';
                                    break;
                                case 2:
                                    url = '/warrior/boots/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
                case 'weapon':
                    switch (size) {
                        case 0:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/weapon/big/1';
                                    break;
                                case 1:
                                    url = '/warrior/weapon/big/2';
                                    break;
                                case 2:
                                    url = '/warrior/weapon/big/3';
                                    break;
                            }
                            break;
                        case 1:
                            switch (numberOfItem) {
                                case 0:
                                    url = '/warrior/weapon/small/1';
                                    break;
                                case 1:
                                    url = '/warrior/weapon/small/2';
                                    break;
                                case 2:
                                    url = '/warrior/weapon/small/3';
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
    }
    
    return url;
} 