import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import showingPassiveImageSkill from '../../../../functions/showingPassiveImageSkill.js';

import SkillPassivePopup from './SkillPassivePopup.js';

const SpecyficSkillPassive = ({ skill,levelOfSkill,availablePoints,handleChangeLock,typeOfSkill}) => {
    const hero = useSelector(state => state.hero);

    const [popupValue, setPopupValueset] = useState(false);

    let image = showingPassiveImageSkill(hero.heroClass, skill.numberOfSkill);

    const showPopup = () => {
        setPopupValueset(!popupValue);
    }

    return (
        <>
            <div className='Element'>
                <img className="imageSkill" src={`/images/${image}.png`} alt=""/>
                <button className="passive-btn" onClick={() => { showPopup() }}>+</button>
                <SkillPassivePopup levelOfSkill={levelOfSkill} availablePoints={availablePoints} skill={skill} valueOfPopup={popupValue} showPopup={showPopup} handleChangeLock={handleChangeLock} typeOfSkill={typeOfSkill} />
            </div>
        </>
    );
};


export default SpecyficSkillPassive;
