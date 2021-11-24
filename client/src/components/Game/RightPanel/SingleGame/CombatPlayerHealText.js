import React from 'react'

const CombatPlayerHealText  = ({ value, id,type}) => {
        let check;
    if (value === 0 && (type===1 || type===0)) {
        check = false;
    } else {
        check = true;
    }
   

    let text;
    let colorOfText;
   
    switch (type) {
        //heal regen
        case 0:
            text = '+'+value +'HP';
            colorOfText = 'green';
            break;
                //mana regen
        case 1:
            text = '-'+value +'MP';
            colorOfText = 'cyan';
            break;
        //block
        default:
            break;
    }



    return (
        <div className="combatDivEnemyNormalAttack">
         {check ? (<div key={id} style={{color:colorOfText}} className={`combatTextNormal`}> {text}</div>):('')}
         
        </div>
    )
}
export default CombatPlayerHealText

