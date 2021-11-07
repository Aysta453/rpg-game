import React, { useState,useEffect }from 'react'

const SkillHandling = ({a, manaRegen,skill,setManaPlayer,manaPlayer,setHpPlayer,hpEnemy,hpPlayer,setHpEnemy,sleep,rek,playerStats,setPlayerStats}) => {
    const [pressButton, setPressButton] = useState(true);
    const [skillBar, setSkillBar] = useState(0);
    const [intervalSkillBar, setIntervalSkillBar] = useState(0);
    const [visibleBar, setVisibleBar] = useState(false);
    let skillAssigned =skill.isSkillAsigned;
    let enoughMana;
    let widthSkillBar = 141;
    let progress;
    let colorOfBar;
    let opacity = 0;


    if (manaPlayer < skill.valueOfCostMana) {
        enoughMana = false;
    } else {
        enoughMana = true;
    }


    const activatingSkill = async () => {
            
        setManaPlayer(manaPlayer => manaPlayer - skill.valueOfCostMana);
        if (manaPlayer == playerStats.manaPoints) {
            manaRegen();
        }
        
        setPressButton(false);
        switch (skill.typeofSkill) {
            //attack      
            case 0:
                let damage = Math.floor((((Math.random() * (playerStats.maxAttack - playerStats.minAttack + 1) + playerStats.minAttack)) + playerStats.bonusToSpecialAttack) * skill.valueOfSpell);

                setTimeout(() => {
                    setHpEnemy(hpEnemy => hpEnemy - damage);
                }, 1 * skill.castTime);
                
                sleep(skill.timeToCastAgain).then(() => {
                    setPressButton(true);
                });

                if (skill.countOfDots > 0) {
                    sleep(2000).then(() => {
                        rek(2000, skill.countOfDots, (damage * skill.dotValue));
                    });
                }
                break;
            //bonus
            case 1:
                switch (skill.targetOfBonusValue) {
                    case 'dodge':
                        let dodgeStatic = playerStats.chanceOnDodge;
                        let increaseDodgeTemporary = dodgeStatic + skill.valueOfSpell;
                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, chanceOnDodge: increaseDodgeTemporary }));
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, chanceOnDodge: dodgeStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    case 'block':
                        let blockStatic = playerStats.chanceOnBlock;
                        let increaseBlockTemporary = dodgeStatic + skill.valueOfSpell;
                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, chanceOnBlock: increaseBlockTemporary }));
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, chanceOnBlock: blockStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    case 'crit':
                        let critStatic = playerStats.chanceOnCritHit;
                        let increaseCritTemporary = critStatic + skill.valueOfSpell;
                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, chanceOnCritHit: increaseCritTemporary }));
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, chanceOnCritHit: critStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    case 'defense':
                        let defenseStatic = playerStats.defensePoints;
                        let increaseDefenseTemporary = defenseStatic + skill.valueOfSpell;
                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, defensePoints: increaseDefenseTemporary }));
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, defensePoints: defenseStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    case 'attack':
                        let minAttackStatic = playerStats.minAttack;
                        let maxAttackStatic = playerStats.maxAttack;
                        let increaseMinAttackTemporary = minAttackStatic + (minAttackStatic * skill.valueOfSpell);
                        let increaseMaxAttackTemporary = maxAttackStatic + (maxAttackStatic * skill.valueOfSpell);
                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, minAttack: increaseMinAttackTemporary, maxAttack: increaseMaxAttackTemporary }));
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, minAttack: minAttackStatic, maxAttack: maxAttackStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    case 'healthPoints':
                        let healthPointsStatic = playerStats.healthPoints;
                        let increaseHealthPointsTemporary = (healthPointsStatic * skill.valueOfSpell);

                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, healthPoints: healthPointsStatic + increaseHealthPointsTemporary }));
                            setHpPlayer(hpPlayer => hpPlayer + increaseHealthPointsTemporary);
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, healthPoints: healthPointsStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    case 'manaPoints':
                        let manaPointsStatic = playerStats.manaPoints;
                        let increaseManaPointsTemporary = (manaPointsStatic * skill.valueOfSpell);

                        sleep(skill.castTime).then(() => {
                            setPlayerStats(playerStats => ({ ...playerStats, manaPoints: manaPointsStatic + increaseManaPointsTemporary }));
                            setManaPlayer(manaPlayer => manaPlayer + increaseManaPointsTemporary);
                            sleep(skill.timeOfWork).then(() => {
                                setPressButton(false);
                                setPlayerStats(playerStats => ({ ...playerStats, manaPoints: manaPointsStatic }));
                                sleep(skill.timeToCastAgain).then(() => {
                                    setPressButton(true);
                                });
                            })
                        });
                        break;
                    default:
                        break;
                }
                break;
            //heal
            case 2:
                switch (skill.targetOfBonusValue) {
                    case 'restoreHealthPoints':
                        setPressButton(false);
                        let valueOfHeal = Math.floor((((Math.random() * (playerStats.maxAttack - playerStats.minAttack + 1) + playerStats.minAttack)) + playerStats.bonusToSpecialAttack) * skill.valueOfSpell);
                        sleep(skill.castTime).then(() => {
                            setHpPlayer(hpPlayer => hpPlayer + valueOfHeal);
                               if (skill.countOfDots > 0) {
                                    sleep(2000).then(() => {
                                        rek(2000, skill.countOfDots, (valueOfHeal * skill.dotValue));
                                    });
                                }
                            sleep(skill.timeToCastAgain).then(() => {
                                setPressButton(true);
                            });
                        });
                        break;
                    case 'restoreManaPoints':
                        setPressButton(false);
                        let valueOfMana = Math.floor((((Math.random() * (playerStats.maxAttack - playerStats.minAttack + 1) + playerStats.minAttack)) + playerStats.bonusToSpecialAttack) * skill.valueOfSpell);
                        sleep(skill.castTime).then(() => {
                            setManaPlayer(manaPlayer => manaPlayer + valueOfMana);
                                if (skill.countOfDots > 0) {
                                    sleep(2000).then(() => {
                                        rek(2000, skill.countOfDots, (valueOfMana * skill.dotValue));
                                    });
                                }
                            sleep(skill.timeToCastAgain).then(() => {
                                setPressButton(true);
                            });
                        });
                        break;
            default:
                break;
                }
                break;
            default:
                break;
        }  
    }
 


    return (skillAssigned) ? (
        <div className="Skill">
            <div className="Content">
                {(pressButton && enoughMana) ? (<button className="skillButton" onClick={() => { activatingSkill() }}>skill </button>) : (<button className="skillButton" disabled onClick={() => { activatingSkill() }}>skill </button>)}
                <div className="showingTime">
            <div className="progressSkillTime-div" style={{ width: widthSkillBar, opacity:opacity}}>                
                    <div style={{ width: `${skillBar}px` }}style={{ backgroundColor:colorOfBar }} className="progressSkillTime"/>
                </div>
               
            </div>
            </div>
        </div>
    ) : ( <div className="Skill">
           
        </div>);
}

export default SkillHandling
