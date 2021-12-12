export default function sumMainStatsBonus(hero,numberStat, stats,passsiveSkills) {

    let stat=0;
    let bp1;
    let bp2;
    let bp3;
    let bp4;
    let bp5;
    let bp6;
    let bp8;
    let bp9;
    let bp10;
    let bp11;

    switch (hero.heroClass) {
        case 'Mage':
            switch (numberStat) {
                //strength
                case 1:
                    bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.strength * passsiveSkills.fifthSkill.valueOfSkill) : (0);
                    stat =  bp5;
                    break;
                //dexterity
                case 2:
                    bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.dexterity * passsiveSkills.forthSkill.valueOfSkill) : (0);
                    stat= bp4;
                    break;
                //intellect
                case 3:
                    bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.intellect * passsiveSkills.firstSkill.valueOfSkill) : (0);
                    bp9= passsiveSkills.ninthSkill.isUnlocked ? (stats.intellect * passsiveSkills.ninthSkill.valueOfSkill) : (0);
                    stat = bp9 + bp1;
                    break;
                //stamina
                case 4:
                    bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.stamina * passsiveSkills.secondSkill.valueOfSkill) : (0);
                    stat = + bp2;
                    break;
                //spirit
                case 5:
                    bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfSkill) : (0);
                    bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.spirit * passsiveSkills.thirdSkill.valueOfSkill) : (0);
                    stat = bp10 + bp3;
                    break;
                default:
                    break;
            }
            break;       
        case 'Warrior':
            switch (numberStat) {
                //strength
                case 1:
                    bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.strength * passsiveSkills.secondSkill.valueOfSkill) : (0);
                    bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.strength * passsiveSkills.tenthSkill.valueOfSkill) : (0);
                    stat = bp10 + bp2;
                    break;
                //dexterity
                case 2:
                    bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.dexterity * passsiveSkills.thirdSkill.valueOfSkill) : (0);
                    stat =  bp3;
                    break;
                //intellect
                case 3:
                    bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfSkill) : (0);
                    stat =  bp5;
                    break;
                //stamina
                case 4:
                    bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.stamina * passsiveSkills.firstSkill.valueOfSkill) : (0);
                    stat =  bp1;
                    break;
                //spirit
                case 5:
                    bp9= passsiveSkills.ninthSkill.isUnlocked ? (stats.spirit * passsiveSkills.ninthSkill.valueOfSkill) : (0);
                    bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.spirit * passsiveSkills.forthSkill.valueOfSkill) : (0);
                    stat =  bp9 + bp4;
                    break;
                default:
                    break;
            }
            break;
        case 'Hunter':
            switch (numberStat) {
                //strength
                case 1:
                    bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.strength * passsiveSkills.forthSkill.valueOfSkill) : (0);
                    stat =  bp4;
                    break;
                //dexterity
                case 2:
                    bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.dexterity * passsiveSkills.firstSkill.valueOfSkill) : (0);
                    bp11= passsiveSkills.eleventhSkill.isUnlocked ? (stats.dexterity * passsiveSkills.eleventhSkill.valueOfSkill) : (0);
                    stat = bp1+bp11;
                    break;
                //intellect
                case 3:
                    bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfSkill) : (0);
                    stat =  bp5;
                    break;
                //stamina
                case 4:
                    bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.stamina * passsiveSkills.secondSkill.valueOfSkill) : (0);
                    stat =  bp2;
                    break;
                //spirit
                case 5:
                    bp10 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfSkill) : (0);
                    bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.spirit * passsiveSkills.thirdSkill.valueOfSkill) : (0);
                    stat =  bp3 + bp10;
                    break;
                default:
                    break;
            }    
            break;
        case 'Priest':
            switch (numberStat) {
                //strength
                case 1:
                    bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.strength * passsiveSkills.fifthSkill.valueOfSkill) : (0);
                    stat =  bp5;
                    break;
                //dexterity
                case 2:
                    bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.dexterity * passsiveSkills.forthSkill.valueOfSkill) : (0);
                    stat =  bp4;
                    break;
                //intellect
                case 3:
                    bp2= passsiveSkills.secondSkill.isUnlocked ? (stats.intellect * passsiveSkills.secondSkill.valueOfSkill) : (0);
                    bp10= passsiveSkills.eleventhSkill.isUnlocked ? (stats.intellect * passsiveSkills.eleventhSkill.valueOfSkill) : (0);
                    stat =  bp2+bp10;
                    break;
                //stamina
                case 4:
                    bp3= passsiveSkills.thirdSkill.isUnlocked ? (stats.stamina * passsiveSkills.thirdSkill.valueOfSkill) : (0);
                    stat =  bp3;
                    break;
                //spirit
                case 5:
                    bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.spirit * passsiveSkills.firstSkill.valueOfSkill) : (0);
                    bp9 = passsiveSkills.tenthSkill.isUnlocked ? (stats.spirit * passsiveSkills.tenthSkill.valueOfSkill) : (0);
                    stat =  bp1 + bp9;
                    break;
                default:
                    break;
            }
            break;
        case 'Berserk':
            switch (numberStat) {
                //strength
                case 1:
                    bp1= (passsiveSkills.firstSkill.isUnlocked) ? (stats.strength * passsiveSkills.firstSkill.valueOfSkill) : (0);
                    bp6 = passsiveSkills.sixthSkill.isUnlocked ? (stats.strength * passsiveSkills.sixthSkill.valueOfSkill) : (0);
                    stat =  bp1 + bp6;
                    break;
                //dexterity
                case 2:
                    bp2 = passsiveSkills.secondSkill.isUnlocked ? (stats.dexterity * passsiveSkills.secondSkill.valueOfSkill) : (0);
                    stat =  bp2;
                    break;
                //intellect
                case 3:
                    bp5 = passsiveSkills.fifthSkill.isUnlocked ? (stats.intellect * passsiveSkills.fifthSkill.valueOfSkill) : (0);
                    stat =  bp5;
                    break; 
                //stamina
                case 4:
                    bp3 = passsiveSkills.thirdSkill.isUnlocked ? (stats.stamina * passsiveSkills.thirdSkill.valueOfSkill) : (0);
                    stat =  bp3;  
                    break;
                //spirit
                case 5:
                    bp4= passsiveSkills.forthSkill.isUnlocked ? (stats.spirit * passsiveSkills.forthSkill.valueOfSkill) : (0);
                    bp8 = passsiveSkills.eighthSkill.isUnlocked ? (stats.spirit * passsiveSkills.eighthSkill.valueOfSkill) : (0);
                    stat = bp4 + bp8;        
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return Math.floor(stat);
}


