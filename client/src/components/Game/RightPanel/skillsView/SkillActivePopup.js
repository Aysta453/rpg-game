import React from 'react'
import { useSelector } from 'react-redux';
import showingActiveImageSkill from '../../../../functions/showingActiveImageSkill';
import './SkillActivePopup.css';

const SkillActivePopup = ({ valueOfPopup, size,showPopup, skill, handleChangeAssign, handleChangeLock, typeOfSkill, levelOfSkill, availablePoints }) => {
    
    const hero = useSelector(state => state.hero);
    const skillsToBattle = useSelector(state => state.skillsToBattle);

      let image = showingActiveImageSkill(hero.heroClass, size, skill.numberOfSkill);


    let statementToUnlock;

    let statementToAssign1;
    let statementToAssign2;
    let statementToAssign3;

    let skill2 = {
        nameOfSkill: skill.nameOfSkill,
        descriptionOfSkill: skill.descriptionOfSkill,
        pointsOfMana:  skill.pointsOfMana,
        valueOfSkill:  skill.valueOfSkill,
        durationTime:  skill.durationTime,
        castTime:  skill.castTime,
        recastTime: skill.recastTime,
        numberOfSkill:  skill.numberOfSkill,
        typeOfSkill:  skill.typeOfSkill,
        targetOfSkill: skill.targetOfSkill,
        countOfDots:  skill.countOfDots,
        dotValue: skill.dotValue,
 
    };

    if ((hero.level >= levelOfSkill) && (availablePoints > 0) && (skill.isUnlocked === false)) {
        statementToUnlock = true;
    } else {
        statementToUnlock = false;
    }
   
    if (skill.isUnlocked === true && skill.isAssigned === false && skillsToBattle.firstSkill.isSkillAssigned=== false) {
        statementToAssign1 = true;
    } else {
        statementToAssign1 = false;
    }

    if (skill.isUnlocked === true && skill.isAssigned === false && skillsToBattle.secondSkill.isSkillAssigned=== false) {
        statementToAssign2 = true;
    } else {
        statementToAssign2 = false;
    }

    if (skill.isUnlocked === true && skill.isAssigned === false && skillsToBattle.thirdSkill.isSkillAssigned=== false) {
        statementToAssign3 = true;
    } else {
        statementToAssign3 = false;
    }


    const unlockingButton = (typeOfSkill,numberOfSkill) => {
        handleChangeLock(typeOfSkill, numberOfSkill);
        showPopup();
    }
    const assigningButton = (position,newSkill) => {
        handleChangeAssign(newSkill.numberOfSkill,position,newSkill);
        showPopup();
    }
    return (valueOfPopup) ? (
        <div className="popup-active">
            <div className="active-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{skill.nameOfSkill}</div>
                <div className="image">
                    <img src={`/images/${image}.png`}/>
                </div>
                <div className="description">{skill.descriptionOfSkill}</div>
                <div className="values">
                    <div className="nameOfValue">
                        <p className={'umj'}>Wartość umiejętności</p>
                        <p className={'man'}>Wartość punktów many</p>
                        <p className={'cst'}>Czas castowania</p>
                        <p className={'tim'}>Czas trwania </p>
                    </div>
                    <div className="second">
                        <p className={'umj'}>{skill.valueOfSkill}</p>
                        <p className={'man'}>{skill.pointsOfMana}</p>
                        <p className={'cst'}>{skill.castTime}</p>
                        <p  className={'tim'}>{skill.durationTime}</p>
                    </div>
                </div>
                <div className="buttons-div-assign">
                    <div className="info">
                    Przypisz umiejętność do miejsca:
                    </div>
                    <div className="buttons">
                    {statementToAssign1 ? (  <button className={'a1'} onClick={() => {assigningButton(1,skill2)}}>1</button>): (  <button className={'a1'} disabled onClick={() => {assigningButton(1,skill2)}}>1</button>)}
                    {statementToAssign2 ? (  <button className={'a2'} onClick={() => {assigningButton(2,skill2)}}>2</button>): (  <button className={'a2'} disabled onClick={() => {assigningButton(2,skill2)}}>2</button>)}
                    {statementToAssign3 ? (  <button className={'a3'} onClick={() => {assigningButton(3,skill2)}}>3</button>): (  <button className={'a3'} disabled onClick={() => {assigningButton(3,skill2)}}>3</button>)}
                    </div>
                </div>
                <div className="button-div-unlock">
                    {statementToUnlock ? (  <button className={'unlock'} onClick={()  => { unlockingButton(typeOfSkill,skill.numberOfSkill) }}>Odblokuj</button>): (  <button className={'unlock'}  disabled onClick={() => { unlockingButton(typeOfSkill,skill.numberOfSkill) }}>Odblokuj</button>)}
                </div>
            </div>
         </div>
     ) : "";
}
export default SkillActivePopup;