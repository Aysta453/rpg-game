import React from 'react';
import { useState,useEffect,useCallback ,useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CombatEnemyText from './CombatEnemyText';
import './SingleGame.css';
import SingleGamePopupLose from './SingleGamePopupLose';
import SingleGamePopupWin from './SingleGamePopupWin';
import SkillHandling from './SkillHandling';
const SingleGame = ({ setButtons, setWindowOfElements }) => {

    const game = useSelector(state => state.game);
    const playerGame = useSelector(state => state.playerGame);

  
    //players main Stats
    const [playerStats, setPlayerStats] = useState(playerGame);
    const [enemyStats, setEnemyStats] = useState(game.monster);
    console.log(game);
    //players temporary Stats
    const [hpEnemy, setHpEnemy] = useState(game.monster.monsterHealtPoints);
    const [hpPlayer, setHpPlayer] = useState(playerGame.healthPoints);
    const [manaPlayer, setManaPlayer] = useState(playerGame.manaPoints);

    //intervals 
    const [intervalPlayerDamage, setIntervalPlayerDamage] = useState(0);
    const [intervalEnemyDamage, setIntervalEnemyDamage] = useState(0);
    const [intervalPlayerMana, setIntervalPlayerMana] = useState(0);
    //end windows
    const [winPopup, setWinPopup] = useState(false);
    const [losePopup, setLosePopup] = useState(false);
    //bars 
    const [playerHpBar, setPlayerHpBar] = useState(0);
    const [playerManaBar, setPlayerManaBar] = useState(0);
    const [monsterHpBar, setMonsterHpBar] = useState(0);

    const [valueOfSomething, setValueOfSomething] = useState(0);
    
    const a = (d) => {
        setValueOfSomething(d);
    }
      
    const [firstSkill, setFirstSkill] = useState({

        // //static
        // nameOfSkill: 'nameOfSkill',
        // descriptionOfSpell: 'description',
        // isUnlocked: true,
        // isAsiggned: true,
        // castTime: 2000,
        // valueOfCostMana:50,
        // timeToCastAgain: 5000,
        // valueOfSpell: 0.20,
        // typeOfSkill: 0,
        // //attack
        // countOfDots: 3,
        // dotValue: 0.2,
        // //bonus
        // targetOfBonus: 'mp',
        // //heal
        valueOfCostMana: 50,
        valueOfSpell: 0.20,
        castTime: 2000,
        timeOfWork: 5000,
        timeToCastAgain: 5000,
        typeofSkill: 0,
        //attack
        countOfDots: 3,
        dotValue: 0.2,
        isSkillAsigned:true,
        //bonus
        targetOfBonusValue: 'healthPoints',
        //heal
        
    });
        const [secondSkill, setSecondSkill] = useState({
        // //static
        // nameOfSkill: 'nameOfSkill',
        // descriptionOfSpell: 'description',
        // isUnlocked: true,
        // isAsiggned: true,
        // castTime: 2000,
        // valueOfCostMana:50,
        // timeToCastAgain: 5000,
        // valueOfSpell: 0.20,
        // typeOfSkill: 0,
        // //attack
        // countOfDots: 3,
        // dotValue: 0.2,
        // //bonus
 
        // //heal
        valueOfCostMana: 10,
        valueOfSpell: 0.20,
        castTime: 2000,
        timeOfWork: 5000,
        timeToCastAgain: 1000,
        typeofSkill: 1,
        //attack
        countOfDots: 3,
        dotValue: 0.2,
        isSkillAsigned: true,
        targetOfBonus: 'hp',
        //bonus
        targetOfBonusValue: 'healthPoints',
        //heal
        
    });
        const [thirdSkill, setThirdSkill] = useState({
        // //static
        // nameOfSkill: 'nameOfSkill',
        // descriptionOfSpell: 'description',
        // isUnlocked: true,
        // isAsiggned: true,
        // castTime: 2000,
        // valueOfCostMana:50,
        // timeToCastAgain: 5000,
        // valueOfSpell: 0.20,
        // typeOfSkill: 0,
        // //attack
        // countOfDots: 3,
        // dotValue: 0.2,
        // //bonus
 
        // //heal
        valueOfCostMana: 10,
        valueOfSpell: 0.20,
        castTime: 2000,
        timeOfWork: 5000,
        timeToCastAgain: 1000,
        typeofSkill: 1,
        //attack
        countOfDots: 3,
        dotValue: 0.2,
        isSkillAsigned: true,
        targetOfBonus: 'hp',
        //bonus
        targetOfBonusValue: 'healthPoints',
        //heal
        
    });


    console.log(playerStats);
    let width = 400;
    const changePopup = (number) => {
        if (number == 0) {
            setLosePopup(!losePopup);
        } else {
            setWinPopup(!winPopup);
        }
     }


    const attackPlayer = () => {
        setIntervalPlayerDamage(setInterval(() => {

            let hit = Math.random() * 100 + 1;
            if (hit <= playerStats.chanceOnDodge) {
                console.log('monster missed');
              
                if (hit <= playerStats.chanceOnBlock) {
                    console.log('player blocked attack')
                    
                } else {
                      let damage = Math.floor((Math.floor(Math.random() * (enemyStats.monsterMaxAttack - enemyStats.monsterMinAttack + 1)) + enemyStats.monsterMinAttack) - playerStats.defensePoints);
                    if (damage > 0) {
                        setHpPlayer(hpPlayer => hpPlayer - damage);
                        
                    } else {
                        console.log('damage reduced by armor');
                    }
                }
            } else {
                let damage = Math.floor((Math.floor(Math.random() * (enemyStats.monsterMaxAttack - enemyStats.monsterMinAttack + 1)) + enemyStats.monsterMinAttack) - playerStats.defensePoints);
                    if (damage > 0) {
                        setHpPlayer(hpPlayer => hpPlayer - damage);
                    } else {
                        console.log('damage reduced by armor');
                    }
            }  
        }
            , 1 * 2500));
    }

    const attackEnemy = (time, attackMode) => {
        setIntervalEnemyDamage(setInterval(() => {

            let hit = Math.random() * 100 + 1;
            if (hit <= playerGame.chanceOnHit) {
                let critHit = Math.random() * 100 + 1;
                let damage = Math.floor(((Math.random() * (playerStats.maxAttack - playerStats.minAttack + 1) + playerStats.minAttack) - enemyStats.monsterDefense) * attackMode);
                if (damage > 0) {
                    if (critHit <= playerGame.chanceOnHit) {
                        damage=damage*1.5;
                        setHpEnemy(hpEnemy => hpEnemy - damage);
                        a(damage);
                        console.log('player crit hit',damage)
                    } else {
                        setHpEnemy(hpEnemy => hpEnemy - damage);
                        a(damage);
                        console.log('player normal hit',damage)
                    }
                
                } else {
                    console.log('monster blocked');
                    a('block');
            }
            } else {
                console.log('player missed')
                  a('miss');
        }  
        }
            , 1 * time));
        
    }

    const changeTime = (time,attackMode) => {
        clearInterval(intervalEnemyDamage);
        attackEnemy(time, attackMode);

    }

    const manaRegen = () => {
        setIntervalPlayerMana(setInterval(() => {
            setManaPlayer(manaPlayer => manaPlayer + 1);
        }, 1 * 2000));
    }
     const sleep = (ms) => {
         return new Promise(resolve => setTimeout(resolve, ms));
    }
    

    const rek = (delay, numberOfAttack, valueOfDotValue) => {
        if (numberOfAttack > 0) {
            sleep(delay).then(() => {
                setHpEnemy(hpEnemy => hpEnemy - valueOfDotValue);
                a(valueOfDotValue);
                rek(delay, numberOfAttack - 1, valueOfDotValue);
            });
        }
    };

    useEffect(() => {
        let changeBarHpPlayer = (hpPlayer / playerStats.healthPoints) * width;
        if (changeBarHpPlayer > width) {
            changeBarHpPlayer = width;
         }else if (changeBarHpPlayer <= 0) {
            changeBarHpPlayer = 0;
            }
        
        setPlayerHpBar(changeBarHpPlayer);
    }, [hpPlayer]);

    useEffect(() => {
        let changeManaBarPlayer = (manaPlayer / playerStats.manaPoints) * width;
        if (changeManaBarPlayer > width) {
            changeManaBarPlayer = width;
          }else if (changeManaBarPlayer <= 0) {
            changeManaBarPlayer = 0;
            }
           
        setPlayerManaBar(changeManaBarPlayer);
    }, [manaPlayer]);

        useEffect(() => {
        let changeBarHpMonster = (hpEnemy / enemyStats.monsterHealtPoints) * width;
        if (changeBarHpMonster > width) {
            changeBarHpMonster = width;
            }else if (changeBarHpMonster <= 0) {
            changeBarHpMonster = 0;
            }
                   
        setMonsterHpBar(changeBarHpMonster);
    }, [hpEnemy]);

    useEffect(() => {
        attackEnemy(2500,1);
        attackPlayer();
    }, []);
    
    useEffect(() => {
        if (manaPlayer >= playerStats.manaPoints) {
            clearInterval(intervalPlayerMana);
        }
    },[manaPlayer]);



    useEffect(() => {
        if (hpPlayer <= 0) {
            setValueOfSomething(0);
            clearInterval(intervalPlayerDamage);
            clearInterval(intervalEnemyDamage);
            sleep(2000).then(() => {
                setLosePopup(true);
            }); 
        } 
        if (hpEnemy <= 0) {
            setValueOfSomething(0);
            clearInterval(intervalEnemyDamage);
             clearInterval(intervalPlayerDamage);
            sleep(2000).then(() => {
                setWinPopup(true);
            });
        } 
    }, [hpPlayer, hpEnemy]);




    return(<>
        <div className="singleGameView">
            <SingleGamePopupLose valueOfPopup={losePopup} changePopup={changePopup} setButtons={setButtons} setWindowOfElements={setWindowOfElements} />
            <SingleGamePopupWin valueOfPopup={winPopup} changePopup={changePopup} setButtons={setButtons} setWindowOfElements={setWindowOfElements} />
            <div className="Player">
                <div className="Avatar">
                    <div className="nick">
                        Nick
                    </div>
                    <div className="level">
                        Level
                    </div>
                </div>
                <div className="HitPoints">
                     <div className="progressPlayerHealthPoints-div" style={{ width: width }}>                     
                        <div style={{ width: `${playerHpBar}px` }} className="progressPlayerHealthPoints" />
                    
                    </div>
                     <div className="progress-div-playerHealthPoints">
                    {parseInt(hpPlayer)}/{parseInt(playerStats.healthPoints)}
                </div>
                  
                </div>
                <div className="ManaPoints">
                    <div className="progressPlayerManaPoints-div" style={{ width: width }}>                     
                        <div style={{ width: `${playerManaBar}px` }} className="progressPlayerManaPoints" />
                    
                    </div>
                     <div className="progress-div-playerManaPoints">
                     {parseInt(manaPlayer)}/{parseInt(playerStats.manaPoints)}
                </div>
                   
                </div>
                <div className="Mode">
                    <div className="First">
                        <div className="Child">
                            <button onClick={() => {changeTime(1500,0.5);}}>tryb szybki ale słabe ataki</button>
                        </div>
                    </div>
                    <div className="Second">
                        <div className="Child">
                            <button onClick={() => {changeTime(2500,1);}}>tryb normalny oraz normalne ataki</button>
                        </div>
                    </div>
                    <div className="Third">
                        <div className="Child">
                            <button onClick={() => { changeTime(4000,1.5); }}>tryb wolny ale ataki mocniejsze</button>
                        </div>
                    </div>
                </div>
                <div className="Skills">
                    <SkillHandling a={a} skill={firstSkill} setManaPlayer={setManaPlayer} manaPlayer={manaPlayer}
                    setHpEnemy={setHpEnemy} hpEnemy={hpEnemy} hpPlayer={hpPlayer} setHpPlayer={setHpPlayer}
                    sleep={sleep} rek={rek} playerStats={playerStats} setPlayerStats={setPlayerStats} manaRegen={manaRegen}/>
                    <SkillHandling skill={secondSkill} setManaPlayer={setManaPlayer} manaPlayer={manaPlayer}
                    setHpEnemy={setHpEnemy} hpEnemy={hpEnemy} hpPlayer={hpPlayer} setHpPlayer={setHpPlayer}
                    sleep={sleep} rek={rek} playerStats={playerStats} setPlayerStats={setPlayerStats} manaRegen={manaRegen}/>
                    <SkillHandling skill={thirdSkill} setManaPlayer={setManaPlayer} manaPlayer={manaPlayer}
                    setHpEnemy={setHpEnemy} hpEnemy={hpEnemy} hpPlayer={hpPlayer} setHpPlayer={setHpPlayer}
                    sleep={sleep} rek={rek} playerStats={playerStats} setPlayerStats={setPlayerStats} manaRegen={manaRegen}/>     
                </div>
                <button onClick={() => {
                        setButtons();
                    }}>stop</button>
            </div>
            <div className="Enemy">
                <div className="Avatar">
                    <div className="nick">
                        {game.monster.monsterName}
                    </div>
                    <div className="level">
                        Level
                    </div>                    
                </div>
                <div className="HitPoints">
                    <div className="progressMonsterHealthPoints-div" style={{ width: width }}>                     
                        <div style={{ width: `${monsterHpBar}px` }} className="progressMonsterHealthPoints" />
                    </div>
                    <div className="progress-div-monsterManaPoints">
                        {parseInt(hpEnemy)}/{parseInt(game.monster.monsterHealtPoints)}
                    </div>
                    <CombatEnemyText value={valueOfSomething} id={Math.random()}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default SingleGame; 