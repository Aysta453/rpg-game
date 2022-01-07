import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import showingActiveImageSkill from '../../../../functions/showingActiveImageSkill';
import SkillUsingInBattlePopup from './SkillUsingInBattlePopup';

const SkillUsingInBattle = ({ skill, handleChangeAssign2, position }) => {
     const hero = useSelector(state => state.hero)

     let image = showingActiveImageSkill(hero.heroClass, skill.numberOfSkill);

    const [popupValue, setPopupValueset] = useState(false);
    
    const showPopup = () => {
        setPopupValueset(!popupValue);
    }

    return (skill.isSkillAssigned) ? (
        <div className='Skill'>
            <img className="imageSkill" src={`/images/${image}.png`} alt=""/>
            <button className="active-btn" onClick={() => { showPopup() }}>+</button>
            <SkillUsingInBattlePopup handleChangeAssign2={handleChangeAssign2} position={position} showPopup={showPopup} valueOfPopup={popupValue} skill={skill}/>
        </div>
    ) : (
        <div className='Skill'>
                
        </div>   
    );
};

export default SkillUsingInBattle;