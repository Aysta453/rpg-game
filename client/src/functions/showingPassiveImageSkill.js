export default function showingPassiveImageSkill (heroClass,numberOfSkill) {
    let url;

    switch (heroClass) {
        case 'Mage':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/passive/mage/1';
                    break;
                case 2:
                    url = 'skills/passive/mage/2';
                        break;
                case 3:
                    url = 'skills/passive/mage/3';
                        break;
                case 4:
                    url = 'skills/passive/mage/4';
                        break;
                case 5:
                    url = 'skills/passive/mage/5';
                        break;
                case 6:
                    url = 'skills/passive/mage/6';
                        break;
                case 7:
                    url = 'skills/passive/mage/7';
                        break;
                case 8:
                    url = 'skills/passive/mage/8';
                        break;
                case 9:
                    url = 'skills/passive/mage/9';
                        break;
                case 10:
                    url = 'skills/passive/mage/10';
                        break;
                case 11:
                    url = 'skills/passive/mage/11';
                    break;
                case 12:
                    url = 'skills/passive/mage/12';
                    break;
                default:
                    break;
            }
            break;
        case 'Priest':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/passive/priest/1';
                    break;
                case 2:
                    url = 'skills/passive/priest/2';
                        break;
                case 3:
                    url = 'skills/passive/priest/3';
                        break;
                case 4:
                    url = 'skills/passive/priest/4';
                        break;
                case 5:
                    url = 'skills/passive/priest/5';
                        break;
                case 6:
                    url = 'skills/passive/priest/6';
                        break;
                case 7:
                    url = 'skills/passive/priest/7';
                        break;
                case 8:
                    url = 'skills/passive/priest/8';
                        break;
                case 9:
                    url = 'skills/passive/priest/9';
                        break;
                case 10:
                    url = 'skills/passive/priest/10';
                        break;
                case 11:
                    url = 'skills/passive/priest/11';
                    break;
                case 12:
                    url = 'skills/passive/priest/12';
                    break;
                default:
                    break;
            }
            break;
        case 'Berserk':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/passive/berserk/1';
                    break;
                case 2:
                    url = 'skills/passive/berserk/2';
                        break;
                case 3:
                    url = 'skills/passive/berserk/3';
                        break;
                case 4:
                    url = 'skills/passive/berserk/4';
                        break;
                case 5:
                    url = 'skills/passive/berserk/5';
                        break;
                case 6:
                    url = 'skills/passive/berserk/6';
                        break;
                case 7:
                    url = 'skills/passive/berserk/7';
                        break;
                case 8:
                    url = 'skills/passive/berserk/8';
                        break;
                case 9:
                    url = 'skills/passive/berserk/9';
                        break;
                case 10:
                    url = 'skills/passive/berserk/10';
                        break;
                case 11:
                    url = 'skills/passive/berserk/11';
                    break;
                case 12:
                    url = 'skills/passive/berserk/12';
                    break;
                default:
                    break;
            }
            break;
        case 'Hunter':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/passive/hunter/1';
                    break;
                case 2:
                    url = 'skills/passive/hunter/2';
                        break;
                case 3:
                    url = 'skills/passive/hunter/3';
                        break;
                case 4:
                    url = 'skills/passive/hunter/4';
                        break;
                case 5:
                    url = 'skills/passive/hunter/5';
                        break;
                case 6:
                    url = 'skills/passive/hunter/6';
                        break;
                case 7:
                    url = 'skills/passive/hunter/7';
                        break;
                case 8:
                    url = 'skills/passive/hunter/8';
                        break;
                case 9:
                    url = 'skills/passive/hunter/9';
                        break;
                case 10:
                    url = 'skills/passive/hunter/10';
                        break;
                case 11:
                    url = 'skills/passive/hunter/11';
                    break;
                case 12:
                    url = 'skills/passive/hunter/12';
                    break;
                default:
                    break;
            }
            break;
        case 'Warrior':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/passive/warrior/1';
                    break;
                case 2:
                    url = 'skills/passive/warrior/2';
                        break;
                case 3:
                    url = 'skills/passive/warrior/3';
                        break;
                case 4:
                    url = 'skills/passive/warrior/4';
                        break;
                case 5:
                    url = 'skills/passive/warrior/5';
                        break;
                case 6:
                    url = 'skills/passive/warrior/6';
                        break;
                case 7:
                    url = 'skills/passive/warrior/7';
                        break;
                case 8:
                    url = 'skills/passive/warrior/8';
                        break;
                case 9:
                    url = 'skills/passive/warrior/9';
                        break;
                case 10:
                    url = 'skills/passive/warrior/10';
                        break;
                case 11:
                    url = 'skills/passive/warrior/11';
                    break;
                case 12:
                    url = 'skills/passive/warrior/12';
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