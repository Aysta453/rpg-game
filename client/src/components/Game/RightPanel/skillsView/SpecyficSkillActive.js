import React, { useState } from 'react'

import SkillActivePopup from './SkillActivePopup.js';
import showingActiveImageSkill from '../../../../functions/showingActiveImageSkill.js';
import { useSelector } from 'react-redux';

const SpecyficSkillActive = ({ skill, size, levelOfSkill, availablePoints, handleChangeLock, handleChangeAssign, typeOfSkill }) => {
    const hero = useSelector(state => state.hero)

    const [popupValue, setPopupValueset] = useState(false);

     let image = showingActiveImageSkill(hero.heroClass, size, skill.numberOfSkill);

    const showPopup = () => {
        setPopupValueset(!popupValue);
    }

    return (
        <>
            <div className='Element'>
                <img className="imageSkill" src={`/images/${image}.png`} alt="" />
                <button className="active-btn" onClick={() => { showPopup() }}>+</button>
                <SkillActivePopup valueOfPopup={popupValue} showPopup={showPopup} size={1} skill={skill} typeOfSkill={typeOfSkill} availablePoints={availablePoints} levelOfSkill={levelOfSkill} handleChangeAssign={handleChangeAssign} handleChangeLock={handleChangeLock} />
            </div>
        </>
    );
}

export default SpecyficSkillActive;

