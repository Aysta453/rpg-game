export default function showingActiveImageSkill (heroClass,numberOfSkill) {
    let url;

    switch (heroClass) {
        case 'Mage':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/active/mage/1';
                    break;
                case 2:
                    url = 'skills/active/mage/2';
                        break;
                case 3:
                    url = 'skills/active/mage/3';
                        break;
                case 4:
                    url = 'skills/active/mage/4';
                        break;
                case 5:
                    url = 'skills/active/mage/5';
                        break;
                case 6:
                    url = 'skills/active/mage/6';
                    break;
                default:
                    break;
            }
            break;
        case 'Priest':    
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/active/priest/1';
                    break;
                case 2:
                    url = 'skills/active/priest/2';
                        break;
                case 3:
                    url = 'skills/active/priest/3';
                        break;
                case 4:
                    url = 'skills/active/priest/4';
                        break;
                case 5:
                    url = 'skills/active/priest/5';
                        break;
                case 6:
                    url = 'skills/active/priest/6';
                    break;
                default:
                    break;
            }
            break;
        case 'Berserk':        
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/active/berserk/1';
                    break;
                case 2:
                    url = 'skills/active/berserk/2';
                        break;
                case 3:
                    url = 'skills/active/berserk/3';
                        break;
                case 4:
                    url = 'skills/active/berserk/4';
                        break;
                case 5:
                    url = 'skills/active/berserk/5';
                        break;
                case 6:
                    url = 'skills/active/berserk/6';
                    break;
                default:
                    break;
            }
            break;
        case 'Hunter':     
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/active/hunter/1';
                    break;
                case 2:
                    url = 'skills/active/hunter/2';
                        break;
                case 3:
                    url = 'skills/active/hunter/3';
                        break;
                case 4:
                    url = 'skills/active/hunter/4';
                        break;
                case 5:
                    url = 'skills/active/hunter/5';
                        break;
                case 6:
                    url = 'skills/active/hunter/6';
                    break;
                default:
                    break;
            }
            break;
        case 'Warrior':
            switch (numberOfSkill) {
                case 1:
                    url = 'skills/active/warrior/1';
                    break;
                case 2:
                    url = 'skills/active/warrior/2';
                        break;
                case 3:
                    url = 'skills/active/warrior/3';
                        break;
                case 4:
                    url = 'skills/active/warrior/4';
                        break;
                case 5:
                    url = 'skills/active/warrior/5';
                        break;
                case 6:
                    url = 'skills/active/warrior/6';
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