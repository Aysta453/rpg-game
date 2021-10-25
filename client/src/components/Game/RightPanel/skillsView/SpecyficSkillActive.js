import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import SkillActivePopup from './SkillActivePopup.js';

const SpecyficSkillActive = ({ skill, levelOfSkill, availablePoints, handleChangeLock, handleChangeAssign, typeOfSkill }) => {
        
    const [popupValue, setPopupValueset] = useState(false);

    const showPopup = () => {
        setPopupValueset(!popupValue);
    }

    return (
        <>
            <div className='Element'>
                <img className="imageSkill" src="/images/1.png" alt="" />
                <button className="active-btn" onClick={() => { showPopup() }}>+</button>
                <SkillActivePopup nameOfSelect={'position'} valueOfPopup={popupValue} showPopup={showPopup} skill={skill} typeOfSkill={typeOfSkill} availablePoints={availablePoints} levelOfSkill={levelOfSkill} handleChangeAssign={handleChangeAssign} handleChangeLock={handleChangeLock} />
               

            </div>
        </>
    );
}

export default SpecyficSkillActive;

