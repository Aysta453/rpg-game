export default function unlockingSkill(skills, typeOfSkill, numberOfSkill) {
    let { data } = {};
    if (typeOfSkill == 0) {
        if (numberOfSkill == 1) {
            skills.active.firstSkill.isUnlocked = true;
        } else if (numberOfSkill == 2) {
            skills.active.secondSkill.isUnlocked = true;
        }else if (numberOfSkill == 3) {
            skills.active.thirdSkill.isUnlocked = true;
        }else if (numberOfSkill == 4) {
            skills.active.forthSkill.isUnlocked = true;
        }else if (numberOfSkill == 5) {
            skills.active.fifthSkill.isUnlocked = true;
        }else if (numberOfSkill == 6) {
            skills.active.sixthSkill.isUnlocked = true;W
        }
    } else if (typeOfSkill == 1) {
        if (numberOfSkill == 1) {
            skills.passive.firstSkill.isUnlocked = true;
        } else if (numberOfSkill == 2) {
            skills.passive.secondSkill.isUnlocked = true;
        }else if (numberOfSkill == 3) {
            skills.passive.thirdSkill.isUnlocked = true;
        }else if (numberOfSkill == 4) {
            skills.passive.forthSkill.isUnlocked = true;
        }else if (numberOfSkill == 5) {
            skills.passive.fifthSkill.isUnlocked = true;
        }else if (numberOfSkill == 6) {
            skills.passive.sixthSkill.isUnlocked = true;
        }else if (numberOfSkill == 7) {
            skills.passive.seventhSkill.isUnlocked = true;
        }else if (numberOfSkill == 8) {
            skills.passive.eighthSkill.isUnlocked = true;
        }else if (numberOfSkill == 9) {
            skills.passive.ninthSkill.isUnlocked = true;
        }else if (numberOfSkill == 10) {
            skills.passive.tenthSkill.isUnlocked = true;
        }else if (numberOfSkill == 11) {
            skills.passive.eleventhSkill.isUnlocked = true;
        }else if (numberOfSkill == 12) {
            skills.passive.twelfthSkill.isUnlocked = true;
        }
    }
   
    skills.availabePoints = skills.availabePoints - 1;
    data = skills;
    return data;
}