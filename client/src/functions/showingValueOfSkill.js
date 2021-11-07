export default function showingValueOfSkill(minAttack, maxAttack, bonusValue, valueOfSkill) {
    let attack;

     let minAttackTemp = Math.floor( minAttack+ (bonusValue* valueOfSkill));
     let maxAttackTemp = Math.floor( maxAttack+ (bonusValue* valueOfSkill));
      
    attack = minAttackTemp + ' - ' + maxAttackTemp;
        return attack;
    }
