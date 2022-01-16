export default function assignSkillToBattle(skillsInBattle, skill, position) {
  let { data } = {};

  let { tempSkill } = {};

  tempSkill = {
    nameOfSkill: skill.nameOfSkill,
    descriptionOfSkill: skill.descriptionOfSkill,
    pointsOfMana: skill.pointsOfMana,
    valueOfSkill: skill.valueOfSkill,
    durationTime: skill.durationTime,
    castTime: skill.castTime,
    recastTime: skill.recastTime,
    numberOfSkill: skill.numberOfSkill,
    typeOfSkill: skill.typeOfSkill,
    targetOfSkill: skill.targetOfSkill,
    countOfDots: skill.countOfDots,
    dotValue: skill.dotValue,
    isSkillAssigned: true,
  };

  if (position == 1) {
    skillsInBattle.firstSkill = tempSkill;
  } else if (position == 2) {
    skillsInBattle.secondSkill = tempSkill;
  } else if (position == 3) {
    skillsInBattle.thirdSkill = tempSkill;
  }

  data = skillsInBattle;

  return data;
}
