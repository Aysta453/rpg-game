export default function assigningSkill(skills,numberOfSkill) {
    let { data } = {};
    if (numberOfSkill == 1) {
        skills.active.firstSkill.isAssigned = !skills.active.firstSkill.isAssigned;
    } else if (numberOfSkill == 2) {
        skills.active.secondSkill.isUnlocked = !skills.active.secondSkill.isAssigned;
    } else if (numberOfSkill == 3) {
        skills.active.thirdSkill.isAssigned = !skills.active.thirdSkill.isAssigned;
    } else if (numberOfSkill == 4) {
        skills.active.forthSkill.isAssigned = !skills.active.forthSkill.isAssigned;
    } else if (numberOfSkill == 5) {
        skills.active.fifthSkill.isAssigned = !skills.active.fifthSkill.isAssigned;
    } else if (numberOfSkill == 6) {
        skills.active.sixthSkill.isAssigned = !skills.active.sixthSkill.isAssigned;
    }

    data = skills;
    return data;
}