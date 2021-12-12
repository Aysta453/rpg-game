import React from 'react'

const CombatEnemySkillText  = ({ value, id}) => {
        let check;
    if (value === 0 ) {
        check = false;
    } else {
        check = true;
    }
   

    let text = '-'+value;
    let colorOfText = '#00A2C7';


    return (
        <div className="combatDivEnemyNormalAttack">
         {check ? (<div key={id} style={{color:colorOfText}} className={`combatTextNormal`}> {text}</div>):('')}
         
        </div>
    )
}

export default CombatEnemySkillText
