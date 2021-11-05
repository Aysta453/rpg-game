import React from 'react'
import './SkillUsingInBattlePopup.css';

const SkillUsingInBattlePopup = ({ valueOfPopup, showPopup, skill, handleChangeAssign2,position}) => {
    console.log(position);
    const operation = (a,b) => {
        console.log(a);
        console.log(b);
        handleChangeAssign2(a,b);
        showPopup();
    };

   return (valueOfPopup) ? (
        <div className="popup-skillBattle">
            <div className="skillBattle-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className="title">{skill.nameOfSkill}</div>
                <div className="image">
                    <img src="/images/2.png"/>
                </div>
                <div className="description">{skill.descriptionOfSpell}</div>

                <div className="values">
                    <div className="nameOfValue">
                        <p className={'umj'}>Wartość umiejętności</p>
                        <p className={'man'}>Wartość punktów many</p>
                        <p className={'cst'}>Czas castowania</p>
                        <p className={'tim'}>Czas trwania </p>
                    </div>
                    <div className="second">
                        <p className={'umj'}>{skill.valueOfSpell}</p>
                        <p className={'man'}>{skill.pointsOfMana}</p>
                        <p className={'cst'}>{skill.castTime}</p>
                        <p  className={'tim'}>{skill.durationTime}</p>
                    </div>
                </div>
                <div className="button-div-unlock">
                    {true ? (  <button className={'wypisz'} onClick={() => {  operation(position,skill.numberOfSkill)}}>Wypisz </button>): (  <button  disabled onClick={() => {  }}>Wypisz</button>)}
                </div>
            </div>
         </div>
     ) : "";
}

export default SkillUsingInBattlePopup;
