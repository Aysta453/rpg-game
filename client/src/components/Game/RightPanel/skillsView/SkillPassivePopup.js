import React from 'react'
import { useSelector } from 'react-redux';
import showingPassiveImageSkill from '../../../../functions/showingPassiveImageSkill';
import './SkillPassivePopup.css';
const SkillPassivePopup = ({levelOfSkill,availablePoints ,valueOfPopup,showPopup,skill,handleChangeLock,typeOfSkill,size}) => {

    const hero = useSelector(state => state.hero);

    const operationToUnlock = (typeOfSkill,numberOfSkill) => {
        handleChangeLock(typeOfSkill, numberOfSkill);
        showPopup();
    };

    let image = showingPassiveImageSkill(hero.heroClass, size, skill.numberOfSkill);
    
    let statementToUnlock;

    if ((hero.level >= levelOfSkill) && (availablePoints > 0) && (skill.isUnlocked === false)) {
        statementToUnlock = true;
    } else {
          statementToUnlock = false;
    }

    return (valueOfPopup) ? (
         <div className="popup-passive">
            <div className="passive-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{skill.nameOfSkill}</div>
                <div className="image">
                    <img src={`/images/${image}.png`} alt=""/>
                </div>
                <div className="description">{skill.descriptionOfSkill}</div>
                <div className="button-div">
                    {statementToUnlock ? (  <button className={'unlock'} onClick={() => { operationToUnlock(typeOfSkill, skill.numberOfSkill) }}>Odblokuj</button>): (  <button className={'unlock'} disabled onClick={() => { operationToUnlock(typeOfSkill, skill.numberOfSkill) }}>Odblokuj</button>)}
                  
                </div>
                  
             </div>
         </div>
     ) : "";
}
export default SkillPassivePopup;