export default function unlockingSkill(skills, typeOfSkill, numberOfSkill) {
    let { data } = {};
    if (typeOfSkill == 0) {
        if (numberOfSkill == 1) {
            skills.active.firstskill.isUnlocked = true;
        } else if (numberOfSkill == 2) {
            skills.active.secondskill.isUnlocked = true;
        }else if (numberOfSkill == 3) {
            skills.active.thirdskill.isUnlocked = true;
        }else if (numberOfSkill == 4) {
            skills.active.forthskill.isUnlocked = true;
        }else if (numberOfSkill == 5) {
            skills.active.fifthskill.isUnlocked = true;
        }else if (numberOfSkill == 6) {
            skills.active.sixskill.isUnlocked = true;
        }else if (numberOfSkill == 7) {
            skills.active.sevenskill.isUnlocked = true;
        }else if (numberOfSkill == 8) {
            skills.active.eightskill.isUnlocked = true;
        }else if (numberOfSkill == 9) {
            skills.active.nineskill.isUnlocked = true;
        }else if (numberOfSkill == 10) {
            skills.active.tenskill.isUnlocked = true;
        }else if (numberOfSkill == 11) {
            skills.active.elevenskill.isUnlocked = true;
        }else if (numberOfSkill == 12) {
            skills.active.twelveskill.isUnlocked = true;
        }
    } else if (typeOfSkill == 1) {
        if (numberOfSkill == 1) {
            skills.passive.firstskill.isUnlocked = true;
        } else if (numberOfSkill == 2) {
            skills.passive.secondskill.isUnlocked = true;
        }else if (numberOfSkill == 3) {
            skills.passive.thirdskill.isUnlocked = true;
        }else if (numberOfSkill == 4) {
            skills.passive.forthskill.isUnlocked = true;
        }else if (numberOfSkill == 5) {
            skills.passive.fifthskill.isUnlocked = true;
        }else if (numberOfSkill == 6) {
            skills.passive.sixskill.isUnlocked = true;
        }else if (numberOfSkill == 7) {
            skills.passive.sevenskill.isUnlocked = true;
        }else if (numberOfSkill == 8) {
            skills.passive.eightskill.isUnlocked = true;
        }else if (numberOfSkill == 9) {
            skills.passive.nineskill.isUnlocked = true;
        }else if (numberOfSkill == 10) {
            skills.passive.tenskill.isUnlocked = true;
        }else if (numberOfSkill == 11) {
            skills.passive.elevenskill.isUnlocked = true;
        }else if (numberOfSkill == 12) {
            skills.passive.twelveskill.isUnlocked = true;
        }
    }

        
    skills.availabePoints = skills.availabePoints - 1;

    data = skills;
    return data;
}