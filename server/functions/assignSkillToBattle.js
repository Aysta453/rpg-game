export default function assignSkillToBattle(skillsInBattle, skill, position,numberOfSkill) {
    let { data } = {};
    let { tempSkill } = {};
          tempSkill = {
            castTime: skill.castTime,
            descriptionOfSpell: skill.descriptionOfSpell,
            durationTime: skill.durationTime,
            nameOfSkill: skill.nameOfSkill,
            pointsOfMana: skill.pointsOfMana,
            valueOfSpell: skill.valueOfSpell,
            isSkillAssigned: true,
            numberOfSkill:numberOfSkill,
        };
    if (position == 1) {
        skillsInBattle.firstSkill = tempSkill;
    }else if (position == 2) {
        skillsInBattle.secondSkill = tempSkill;
    }else if (position == 3) {
        skillsInBattle.thirdSkill = tempSkill;
    }

    data = skillsInBattle;
    return data;
}