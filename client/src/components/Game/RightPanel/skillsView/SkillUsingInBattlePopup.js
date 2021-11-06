import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import showingActiveImageSkill from '../../../../functions/showingActiveImageSkill';
import './SkillUsingInBattlePopup.css';

const SkillUsingInBattlePopup = ({ valueOfPopup, showPopup, skill, handleChangeAssign2,position ,size}) => {

    const hero = useSelector(state => state.hero)



    let image = showingActiveImageSkill(hero.heroClass, size, skill.numberOfSkill);



    const operationToUnAssignSkillToBattle = (positionOfSkill,numberOfSkill) => {
        handleChangeAssign2(positionOfSkill,numberOfSkill);
        showPopup();
    };

   return (valueOfPopup) ? (
        <div className="popup-skillBattle">
            <div className="skillBattle-inner">
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
                <div className="button-div-unlock">
                    {true ? (  <button className={'wypisz'} onClick={() => {  operationToUnAssignSkillToBattle(position,skill.numberOfSkill)}}>Wypisz </button>): (  <button  disabled onClick={() => {  }}>Wypisz</button>)}
                </div>
            </div>
         </div>
     ) : "";
}

export default SkillUsingInBattlePopup;
