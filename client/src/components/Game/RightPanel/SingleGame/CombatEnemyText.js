import React from 'react'

const CombatEnemyText = ({ value, id }) => {
    let check = value;
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
