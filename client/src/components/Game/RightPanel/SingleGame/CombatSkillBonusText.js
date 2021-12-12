import React from 'react'

const CombatSkillBonusText = ({ value, id}) => {
        let check;
    if (value === 0 ) {
        check = false;
    } else {
        check = true;
    } 
    let text = '-'+value;
    let colorOfText = '#8B5FBF';


    return (
        <div className="combatDivEnemyNormalAttack">
         {check ? (<div key={id} style={{color:colorOfText}} className={`combatTextNormal`}> {text}</div>):('')}
         
        </div>
    )
}

export default CombatSkillBonusText
