export default function unAssignSkillToBattle(skillsInBattle, position) {
    let { data } = {};
    if (position == 1) {
        skillsInBattle.firstSkill = data;
        skillsInBattle.firstSkill.isSkillAssigned = false;
    }else if (position == 2) {
        skillsInBattle.secondSkill = data;
                skillsInBattle.secondSkill.isSkillAssigned = false;
    }else if (position == 3) {
        skillsInBattle.thirdSkill = data;
                skillsInBattle.thirdSkill.isSkillAssigned = false;
    }
    data = skillsInBattle;
    return data;
}