import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import showingPassiveImageSkill from '../../../../functions/showingPassiveImageSkill.js';

import SkillPassivePopup from './SkillPassivePopup.js';

const SpecyficSkillPassive = ({ skill,levelOfSkill,availablePoints,handleChangeLock,typeOfSkill,size}) => {
    const hero = useSelector(state => state.hero);
    const [popupValue, setPopupValueset] = useState(false);
    let number = skill.numberOfSkill;
 
    let image = showingPassiveImageSkill(hero.heroClass, size, number);
       console.log(image);
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }
    
      let statementToUnlock;
    if ((hero.level >= levelOfSkill) && (availablePoints > 0) && (skill.isUnlocked === false)) {
        statementToUnlock = true;
    } else {
          statementToUnlock = false;
    }

    return (
        <>
            <div className='Element'>
                <img className="imageSkill" src={`/images/${image}.png`} alt=""/>
                <button className="passive-btn" onClick={() => { showPopup() }}>+</button>
                <SkillPassivePopup size={1} levelOfSkill={levelOfSkill} availablePoints={availablePoints} skill={skill} valueOfPopup={popupValue} showPopup={showPopup} handleChangeLock={handleChangeLock} typeOfSkill={typeOfSkill} />
            </div>
        </>
    );
};


export default SpecyficSkillPassive;
