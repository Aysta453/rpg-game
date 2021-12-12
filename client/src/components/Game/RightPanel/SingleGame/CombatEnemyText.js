import React from 'react'

import './SingleGame.css';
const CombatEnemyText = ({ value, id,attackMode,type}) => {
        let check;
    if (value === 0 && (type===1 || type===0 || type===2)) {
        check = false;
    } else {
        check = true;
    }
   
    let typeOfText;
    let text;
    let colorOfText;
    switch (attackMode) {
        case 1250:
            switch (type) {
                //normal attack
                case 0:
                    text = '- '+value;
                    colorOfText = 'white';  
                    typeOfText = 'Fast';
                    break;
                //crit attack
                case 1:
                    text = '- '+value;
                    colorOfText = '#D61801';
                    typeOfText = 'Fast';
                    break;
                //block
                case 2:
                    text = '- '+value;
                    colorOfText = '#F9A03F';
                    typeOfText = 'Fast';
                    break;
                //miss
                case 3:
                    text = 'unik';
                    colorOfText = '#D8CC34';
                    typeOfText = 'Fast';
                    break;
                default:
                    break;
                
            }
            break;
        case 2500:
            switch (type) {
                //normal attack
                case 0:
                    text = '- '+value;
                    colorOfText = 'white';  
                    typeOfText = 'Normal';
                    break;
                //crit attack
                case 1:
                    text = '- '+value;
                    colorOfText = '#D61801';
                    typeOfText = 'Normal';
                    break;
                //block
                case 2:
                    text = '- '+value;
                    colorOfText = '#F9A03F';
                    typeOfText = 'Normal';
                    break;
                //miss
                case 3:
                    text = 'unik';
                    colorOfText = '#D8CC34';
                    typeOfText = 'Normal';
                    break;
                default:
                    break;
                
            }
            break;
        case 3750:
            switch (type) {
                //normal attack
                case 0:
                    text = '- '+value;
                    colorOfText = 'white';  
                    typeOfText = 'Hard';
                    break;
                //crit attack
                case 1:
                    text = '- '+value;
                    colorOfText = '#D61801';
                    typeOfText = 'Hard';
                    break;
                //block
                case 2:
                    text = '- '+value;
                    colorOfText = '#F9A03F';
                    typeOfText = 'Hard';
                    break;
                //miss
                case 3:
                    text = 'unik';
                    colorOfText = '#D8CC34';
                    typeOfText = 'Hard';
                    break;
                default:
                    break;
                
            }
            break;
        default:
            break;
    }


    return (
        <div className="combatDivEnemyNormalAttack">
         {check ? (<div key={id} style={{color:colorOfText}} className={`combatText${typeOfText}`}> {text}</div>):('')}
         
        </div>
    )
}

export default CombatEnemyText

