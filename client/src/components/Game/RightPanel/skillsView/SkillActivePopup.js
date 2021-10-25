import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import './SkillActivePopup.css';
const SkillActivePopup = ({ valueOfPopup, showPopup,skill, handleChangeAssign, handleChangeLock, typeOfSkill, levelOfSkill, availablePoints }) => {
    const hero = useSelector(state => state.hero);
    const skillsToBattle = useSelector(state => state.skillsToBattle);
    let statementToUnlock;
    let statementToAssign1;
    let statementToAssign2;
    let statementToAssign3;
    let  skill2  = {
        castTime: skill.castTime,
        descriptionOfSpell: skill.descriptionOfSpell,
        durationTime: skill.durationTime,
        nameOfSkill: skill.nameOfSkill,
        pointsOfMana: skill.pointsOfMana,
        valueOfSpell: skill.valueOfSpell,
        numberOfSkill:skill.numberOfSkill,
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


    const unlockingButton = (a, b) => {
        handleChangeLock(a, b);
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
                    <img src="/images/2.png"/>
                </div>
                <div className="description">{skill.descriptionOfSpell}</div>
                <div className="values">
                    <div className="nameOfValue">
                        <p>Wartość umiejętności</p>
                        <p>Wartość punktów many</p>
                        <p>Czas castowania</p>
                        <p>Czas trwania </p>
                    </div>
                    <div className="second">
                        <p>{skill.valueOfSpell}</p>
                        <p>{skill.pointsOfMana}</p>
                        <p>{skill.castTime}</p>
                        <p>{skill.durationTime}</p>
                    </div>
                </div>
                <div className="buttons-div-assign">
                    <div className="info">
                    Przypisz umiejętność do miejsca:
                    </div>
                    <div className="buttons">
                    {statementToAssign1 ? (  <button onClick={() => {assigningButton(1,skill2)}}>1</button>): (  <button disabled onClick={() => {assigningButton(1,skill2)}}>1</button>)}
                    {statementToAssign2 ? (  <button onClick={() => {assigningButton(2,skill2)}}>2</button>): (  <button disabled onClick={() => {assigningButton(2,skill2)}}>2</button>)}
                    {statementToAssign3 ? (  <button onClick={() => {assigningButton(3,skill2)}}>3</button>): (  <button disabled onClick={() => {assigningButton(3,skill2)}}>3</button>)}
                    </div>
                </div>
                <div className="button-div-unlock">
                    {statementToUnlock ? (  <button onClick={() => { unlockingButton(typeOfSkill,skill.numberOfSkill) }}>Odblokuj</button>): (  <button disabled onClick={() => { unlockingButton(typeOfSkill,skill.numberOfSkill) }}>Odblokuj</button>)}
                </div>
            </div>
         </div>
     ) : "";
}
export default SkillActivePopup;