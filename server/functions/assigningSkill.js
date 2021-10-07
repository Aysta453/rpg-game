export default function assigningSkill(skills,numberOfSkill) {
    let { data } = {};
    if (numberOfSkill == 1) {
        skills.active.firstskill.isAssigned = !skills.active.firstskill.isAssigned;
    } else if (numberOfSkill == 2) {
        skills.active.secondskill.isUnlocked = !skills.active.secondskill.isAssigned;
    }else if (numberOfSkill == 3) {
        skills.active.thirdskill.isUnlocked = !skills.active.thirdskill.isAssigned;
    }else if (numberOfSkill == 4) {
        skills.active.forthskill.isUnlocked = !skills.active.forthskill.isAssigned;
    }else if (numberOfSkill == 5) {
        skills.active.fifthskill.isUnlocked = !skills.active.fifthskill.isAssigned;
    }else if (numberOfSkill == 6) {
        skills.active.sixskill.isUnlocked = !skills.active.sixskill.isAssigned;
    }else if (numberOfSkill == 7) {
        skills.active.sevenskill.isUnlocked = !skills.active.sevenskill.isAssigned;
    }else if (numberOfSkill == 8) {
        skills.active.eightskill.isUnlocked = !skills.active.eightskill.isAssigned;
    }else if (numberOfSkill == 9) {
        skills.active.nineskill.isUnlocked = !skills.active.nineskill.isAssigned;
    }else if (numberOfSkill == 10) {
        skills.active.tenskill.isUnlocked = !skills.active.tenskill.isAssigned;
    }else if (numberOfSkill == 11) {
        skills.active.elevenskill.isUnlocked = !skills.active.elevenskill.isAssigned;
    }else if (numberOfSkill == 12) {
        skills.active.twelveskill.isUnlocked = !skills.active.twelveskill.isAssigned;
    }

    data = skills;
    return data;
}