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
                        <h2>Umiejętności wykorzystywane w walce</h2>
                    </div>
                    <div className='Skills'>
                        <SkillUsingInBattle  handleChangeAssign2={handleChangeAssign2 }  skill={skillsToBattle.firstSkill} position={1} />

                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} skill={skillsToBattle.secondSkill} position={2} />
                        <SkillUsingInBattle handleChangeAssign2={handleChangeAssign2} skill={skillsToBattle.thirdSkill} position={3}/>

                    </div>
                </div>
                <div className='skillsContener'>
                    <div className='Points'>
                        <h2>Możliwe punkty do przydzielenia:{skills.availabePoints}</h2>
                    </div>
                    <div className='ContenerLevels'>
                        <div className='LevelsTitle'>
                            <h2>Poziomiologia</h2>
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
                            <h2>Umiejętności Aktywne</h2>
                        </div>
                        <div className='Elements'>                               
                            <SpecyficSkillActive levelOfSkill={1}  handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.firstskill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={11} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.secondskill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={21} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.thirdskill} typeOfSkill={0} />
                            <SpecyficSkillActive levelOfSkill={31} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.forthskill} typeOfSkill={0}  />
                            <SpecyficSkillActive levelOfSkill={41} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.fifthskill} typeOfSkill={0}  />
                            <SpecyficSkillActive levelOfSkill={51} handleChangeLock={handleChangeLock} handleChangeAssign={handleChangeAssign} availablePoints={skills.availabePoints} skill={skills.active.sixskill } typeOfSkill={0}  />
                        </div>
                    </div>
                    <div className='Passive'>
                        <div className='Title'>
                            <h2>Umiejętności Pasywne</h2>
                        </div>
                        <div className='Elements'>
                            <SpecyficSkillPassive levelOfSkill={1} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.firstskill} typeOfSkill={1} numberOfSkill={1}/>
                            <SpecyficSkillPassive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.thirdskill }typeOfSkill={1}  numberOfSkill={3}/>
                            <SpecyficSkillPassive levelOfSkill={21}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.fifthskill }typeOfSkill={1}  numberOfSkill={5}/>
                            <SpecyficSkillPassive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.sevenskill } typeOfSkill={1} numberOfSkill={7}/>
                            <SpecyficSkillPassive levelOfSkill={41} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.nineskill } typeOfSkill={1} numberOfSkill={9}/>
                            <SpecyficSkillPassive levelOfSkill={51} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.elevenskill } typeOfSkill={1} numberOfSkill={11}/>
                            
                            <SpecyficSkillPassive levelOfSkill={1} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.secondskill} typeOfSkill={1} numberOfSkill={2} />
                            <SpecyficSkillPassive levelOfSkill={11} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.forthskill }typeOfSkill={1}  numberOfSkill={4}/>
                            <SpecyficSkillPassive levelOfSkill={21}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.sixskill} typeOfSkill={1}  numberOfSkill={6}/>
                            <SpecyficSkillPassive levelOfSkill={31} size={0} handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.eightskill } typeOfSkill={1} numberOfSkill={8}/>
                            <SpecyficSkillPassive levelOfSkill={41}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.tenskill } typeOfSkill={1}  numberOfSkill={10}/>
                            <SpecyficSkillPassive levelOfSkill={51}size={0}  handleChangeLock={handleChangeLock} availablePoints={skills.availabePoints} skill={skills.passive.twelveskill } typeOfSkill={1}  numberOfSkill={12}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsView;