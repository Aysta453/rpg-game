import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import SkillUsingInBattle from './SkillUsingInBattle.js';
import SkillLevelElement from './SkillLevelElement.js';
import SpecyficSkillActive from './SpecyficSkillActive.js';
import SpecyficSkillPassive from './SpecyficSkillPassive.js';
import './skillsView.css';
import { unlockedskill, assignskill,getheroskills} from '../../../../actions/skills';
import { updateskillsinbattle,updateskillsinbattle2,getheroskillstobattle} from '../../../../actions/skillsInBattle';

const SkillsView = () => {
    const skills = useSelector(state => state.skills);
    const hero = useSelector(state => state.hero);
    const skillsToBattle = useSelector(state => state.skillsToBattle);

    
    const dispatch = useDispatch();
 
    const handleChangeLock = (a,b) => {
        dispatch(unlockedskill({ owner: hero.owner, typeOfSkill: a, numerOfSkill: b })); 
    };
    const handleChangeAssign = (a, b,skill2) => {
        dispatch(assignskill({ owner: hero.owner, numerOfSkill: a }));
        dispatch(updateskillsinbattle({ owner: hero.owner, position: b, skill: skill2,numberOfSkill:a}));
    };

    const handleChangeAssign2 = (a,b) => {
        console.log(a);
        dispatch(updateskillsinbattle2({ owner: hero.owner, position: a}));
        dispatch(assignskill({ owner: hero.owner, numerOfSkill: b }));

    };
   
    return (
        <>    
            <div className='skillsView'>
                <div className='BattleContener'>
                   <div className='Name'>
                        Umiejętności wykorzystywane w walce
                    </div>
                    <div className='Skills'>
                        <SkillUsingInBattle  handleChangeAssign2={handleChangeAssign2 }  skill={skillsToBattle.firstSkill} position={1} />

                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} skill={skillsToBattle.secondSkill} position={2} />
                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} skill={skillsToBattle.thirdSkill} position={3}/>

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
                            <SpecyficSkillActive levelOfSkill={1}  handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.firstSkill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={11} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.secondSkill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={21} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.thirdSkill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={31} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.forthSkill} typeOfSkill={0}  />
                            <SpecyficSkillActive levelOfSkill={41} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.fifthSkill} typeOfSkill={0}  />
                            <SpecyficSkillActive levelOfSkill={51} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.sixthSkill } typeOfSkill={0}  />
                        </div>
                    </div>
                    <div className='Passive'>
                        <div className='Title'>
                            Umiejętności Pasywne
                        </div>
                        <div className='Elements'>
                            <SpecyficSkillPassive levelOfSkill={1} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.firstSkill} typeOfSkill={1} numberOfSkill={1}/>
                            <SpecyficSkillPassive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.thirdSkill }typeOfSkill={1}  numberOfSkill={3}/>
                            <SpecyficSkillPassive levelOfSkill={21}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.fifthSkill }typeOfSkill={1}  numberOfSkill={5}/>
                            <SpecyficSkillPassive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.seventhSkill } typeOfSkill={1} numberOfSkill={7}/>
                            <SpecyficSkillPassive levelOfSkill={41} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.ninthSkill } typeOfSkill={1} numberOfSkill={9}/>
                            <SpecyficSkillPassive levelOfSkill={51} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.eleventhSkill } typeOfSkill={1} numberOfSkill={11}/>
                            
                            <SpecyficSkillPassive levelOfSkill={1} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.secondSkill} typeOfSkill={1} numberOfSkill={2} />
                            <SpecyficSkillPassive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.forthSkill }typeOfSkill={1}  numberOfSkill={4}/>
                            <SpecyficSkillPassive levelOfSkill={21}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.sixthSkill} typeOfSkill={1}  numberOfSkill={6}/>
                            <SpecyficSkillPassive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.eighthSkill } typeOfSkill={1} numberOfSkill={8}/>
                            <SpecyficSkillPassive levelOfSkill={41}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.tenthSkill } typeOfSkill={1}  numberOfSkill={10}/>
                            <SpecyficSkillPassive levelOfSkill={51}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.twelfthSkill } typeOfSkill={1}  numberOfSkill={12}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsView;