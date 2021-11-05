import React from 'react'

const CombatEnemyText = ({ value, id }) => {
    let check = value;
    let isnum = value;
    parseInt(isnum);
    if(isNaN(isnum) === false ){
    value=isnum;
    }


    if (value === 0) {
        check = false;
    } else {
        check = true;
    }

    return (
        <div className="combatDiv">
          {check ?(<div key={id} className="combatDivText">
                Hello World {value}</div>):('')}
           
        </div>
    )
}

export default CombatEnemyText
