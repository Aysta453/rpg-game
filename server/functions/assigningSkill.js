export default function assigningSkill(skills,numberOfSkill) {
    let { data } = {};
    if (numberOfSkill == 1) {
        skills.active.firstskill.isAssigned = !skills.active.firstskill.isAssigned;
    } else if (numberOfSkill == 2) {
        skills.active.secondskill.isUnlocked = !skills.active.secondskill.isAssigned;
    } else if (numberOfSkill == 3) {
        skills.active.thirdskill.isAssigned = !skills.active.thirdskill.isAssigned;
    } else if (numberOfSkill == 4) {
        skills.active.forthskill.isAssigned = !skills.active.forthskill.isAssigned;
    } else if (numberOfSkill == 5) {
        skills.active.fifthskill.isAssigned = !skills.active.fifthskill.isAssigned;
    } else if (numberOfSkill == 6) {
        skills.active.sixskill.isAssigned = !skills.active.sixskill.isAssigned;
    }

    data = skills;
    return data;
}