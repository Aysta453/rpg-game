import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SkillUsingInBattle from './SkillUsingInBattle.js';
import SkillLevelElement from './SkillLevelElement.js';
import SpecyficSkillActive from './SpecyficSkillActive.js';
import SpecyficSkillPassive from './SpecyficSkillPassive.js';

import { setPlayerValues } from '../../../../actions/playerGame.js';
import { unlockedskill, assignskill } from '../../../../actions/skills';
import { updateskillsinbattle, updateskillsinbattle2 } from '../../../../actions/skillsInBattle';

import './skillsView.css';
import playerGameValues from '../../../../functions/playerGameValues.js';

const SkillsView = () => {
    const skills = useSelector(state => state.skills);
    const hero = useSelector(state => state.hero);
    const skillsToBattle = useSelector(state => state.skillsToBattle);
    const stats = useSelector(state => state.stats);
    const itemInUse = useSelector(state => state.itemInUse);
    let playerStats = playerGameValues(hero, itemInUse, stats, skills.passive);
    
    const dispatch = useDispatch();
 
    const handleChangeLock = (typeOfSkill,numberOfSkill) => {
        dispatch(unlockedskill({ owner: hero.owner, typeOfSkill: typeOfSkill, numerOfSkill: numberOfSkill })); 
    };

    const handleChangeAssign = (numberOfSkill, positionOfSkill,skillToAssign) => {
        dispatch(assignskill({ owner: hero.owner, numerOfSkill: numberOfSkill }));
        dispatch(updateskillsinbattle({ owner: hero.owner, position: positionOfSkill, skill: skillToAssign, numberOfSkill:numberOfSkill}));
    };

    const handleChangeAssign2 = (positionOfSkill , numberOfSkill) => {

        dispatch(updateskillsinbattle2({ owner: hero.owner, position: positionOfSkill}));
        dispatch(assignskill({ owner: hero.owner, numerOfSkill: numberOfSkill }));

    };
    useEffect(() => {
      dispatch(setPlayerValues(playerStats));
    },[]);
   
    return (
        <>    
            <div className='skillsView'>
                <div className='BattleContener'>
                   <div className='Name'>
                        Umiejętności wykorzystywane w walce
                    </div>
                    <div className='Skills'>
                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} size={0} skill={skillsToBattle.firstSkill}  position={1} />
                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} size={0} skill={skillsToBattle.secondSkill} position={2} />
                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} size={0} skill={skillsToBattle.thirdSkill}  position={3} />

                    </div>
                </div>
                <div className='skillsContener'>
                    <div className='Points'>
                        Możliwe punkty do przydzielenia: <span className={"ptk"}> {skills.availabePoints}</span>
                    </div>
                    <div className='ContenerLevels'>
                        <div className='LevelsTitle'>
                            Poziomiologia
                        </div>
                        <div className='LevelsElements'>
                            <SkillLevelElement text={"1"}/>
                            <SkillLevelElement text={"11"}/>
                            <SkillLevelElement text={"21"}/>
                            <SkillLevelElement text={"31"}/>
                            <SkillLevelElement text={"41"}/>
                            <SkillLevelElement text={"51"}/>    
                        </div>
                    </div>
                    <div className='Active'>
                        <div className='Title'>
                            Umiejętności Aktywne
                        </div>
                        <div className='Elements'>                               
                            <SpecyficSkillActive levelOfSkill={1}  size={0} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.firstSkill}  typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.secondSkill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={21} size={0} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.thirdSkill}  typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.forthSkill}  typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={41} size={0} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.fifthSkill}  typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={51} size={0} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.sixthSkill}  typeOfSkill={0} />
                        </div>
                    </div>
                    <div className='Passive'>
                        <div className='Title'>
                            Umiejętności Pasywne
                        </div>
                        <div className='Elements'>
                            <SpecyficSkillPassive levelOfSkill={1}  size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.firstSkill}    typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.thirdSkill}    typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={21} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.fifthSkill}    typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.seventhSkill}  typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={41} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.ninthSkill}    typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={51} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.eleventhSkill} typeOfSkill={1}   />
                            
                            <SpecyficSkillPassive levelOfSkill={1}  size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.secondSkill}  typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.forthSkill}   typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={21} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.sixthSkill}   typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.eighthSkill}  typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={41} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.tenthSkill}   typeOfSkill={1}   />
                            <SpecyficSkillPassive levelOfSkill={51} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.twelfthSkill} typeOfSkill={1}   />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsView;