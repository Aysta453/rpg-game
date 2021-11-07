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
    let statementToUnlockText;
    let widthUnlockButton;

    if ((hero.level >= levelOfSkill) && (availablePoints > 0) && (skill.isUnlocked === false)) {
        statementToUnlock = true;
   statementToUnlockText = 'Odblokuj';
        widthUnlockButton = '200px';
    } else {
        if (skill.isUnlocked === true) {
     
            statementToUnlockText = 'Odblokowano';
            widthUnlockButton = '300px';
            
        } else {
            statementToUnlockText = 'Zablokowane';
            widthUnlockButton = '300px';
        }
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
                    {statementToUnlock ? (  <button className={'unlock'} style={{ width: widthUnlockButton }} onClick={() => { operationToUnlock(typeOfSkill, skill.numberOfSkill) }}>{statementToUnlockText}</button>): (  <button className={'unlock'} style={{ width: widthUnlockButton }} disabled onClick={() => { operationToUnlock(typeOfSkill, skill.numberOfSkill) }}>{statementToUnlockText}</button>)}
                  
                </div>
                  
             </div>
         </div>
     ) : "";
}
export default SkillPassivePopup;