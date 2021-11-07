import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import convertingStaticTime from '../../../../functions/convertingStaticTime';
import showingActiveImageSkill from '../../../../functions/showingActiveImageSkill';
import showingValueOfSkill from '../../../../functions/showingValueOfSkill';
import './SkillUsingInBattlePopup.css';

const SkillUsingInBattlePopup = ({ valueOfPopup, showPopup, skill, handleChangeAssign2,position ,size}) => {

    const hero = useSelector(state => state.hero)

    const playerGame = useSelector(state => state.playerGame)

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
                      {(skill.typeOfSkill === 0 || skill.typeOfSkill === 2) ? (
                            <>
                                <p className={'umj'}>Wartość umiejętności</p>
                                <p className={'man'}>Koszt punktów many</p>
                                <p className={'cst'}>Czas castowania</p>
                                <p className={'tim'}>Czas ponownego użycia</p>
                            </>
                        ) : (
                            <>
                                <p className={'umj'}>Czas trwania </p>
                                <p className={'man'}>Koszt punktów many</p>
                                <p className={'cst'}>Czas castowania</p>
                                <p className={'tim'}>Czas do ponownego użycia </p>
                            </>
                        )}
                    </div>
                    <div className="second">
                          {(skill.typeOfSkill === 0 || skill.typeOfSkill === 2) ? (
                            <>
                                <p className={'umj'}>{showingValueOfSkill(playerGame.minAttack,playerGame.maxAttack,playerGame.bonusToSpecialAttack,skill.valueOfSkill)}</p>
                                <p className={'man'}>{skill.pointsOfMana}</p>
                                <p className={'cst'}>{convertingStaticTime(skill.castTime)}</p>
                                <p  className={'tim'}>{convertingStaticTime(skill.recastTime)}</p> 
                            </>
                        ) : (
                            <>
                                <p className={'umj'}>{convertingStaticTime(skill.durationTime)}</p>
                                <p className={'man'}>{skill.pointsOfMana}</p>
                                <p className={'cst'}>{convertingStaticTime(skill.castTime)}</p>
                                <p  className={'tim'}>{convertingStaticTime(skill.recastTime)}</p>  
                            </>
                        )}
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
