import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import './SingleGame.css';
import SingleGamePopupLose from './SingleGamePopupLose';
import SingleGamePopupWin from './SingleGamePopupWin';
import SkillHandling from './SkillHandling';

const SingleGame = ({setButtons, setWindowOfElements}) => {

    const game = useSelector(state => state.game);
    const hero = useSelector(state => state.hero);
    const playerGame = useSelector(state => state.playerGame);
    const skillsToBattle = useSelector(state => state.skillsToBattle);

    const [firstButton, setFirstButton] = useState(true);
    const [secondButton, setSecondButton] = useState(true);
    const [thirdButton, setThirdButton] = useState(true);
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handlingSkillButtons = (numberOfSkill, time) => {
        console.log(numberOfSkill);
        console.log(time);
        switch (numberOfSkill) {
            case 1:
                setFirstButton(!firstButton);
                if (secondButton === true && thirdButton === true) {
                    setSecondButton(secondButton => !secondButton);
                    setThirdButton(thirdButton => !thirdButton);
                    sleep(time).then(() => {
                        setSecondButton(secondButton => !secondButton);
                        setThirdButton(thirdButton => !thirdButton);
                    })
                } else if (secondButton === true) {
                    setSecondButton(secondButton => !secondButton);
                    sleep(time).then(() => {
                        setSecondButton(secondButton => !secondButton);
                    })
                } else if (thirdButton === true) {
                    setThirdButton(thirdButton => !thirdButton);
                    sleep(time).then(() => {
                        setThirdButton(thirdButton => !thirdButton);
                    })
                }
                break;
            case 2:
                console.log('yes');
                setSecondButton(!secondButton);
                if (firstButton === true && thirdButton === true) {
                    setFirstButton(firstButton => !firstButton);
                    setThirdButton(thirdButton => !thirdButton);
                    console.log('yes1');
                    sleep(time).then(() => {
                        console.log('yes2');
                        setFirstButton(firstButton => !firstButton);
                        setThirdButton(thirdButton => !thirdButton);
                    })
                } else if (secondButton === true) {
                    setFirstButton(firstButton => !firstButton);
                    sleep(time).then(() => {
                        setFirstButton(firstButton => !firstButton);
                    })
                } else if (thirdButton === true) {
                    setThirdButton(thirdButton => !thirdButton);
                    sleep(time).then(() => {
                        setThirdButton(thirdButton => !thirdButton);
                    })
                }
                break;
            case 3:
                setThirdButton(!thirdButton);
                if (secondButton === true && firstButton === true) {
                    setSecondButton(secondButton => !secondButton);
                    setFirstButton(firstButton => !firstButton);
                    sleep(time).then(() => {
                        setSecondButton(secondButton => !secondButton);
                        setFirstButton(firstButton => !firstButton);
                    })
                } else if (secondButton === true) {
                    setSecondButton(secondButton => !secondButton);
                    sleep(time).then(() => {
                        setSecondButton(secondButton => !secondButton);
                    })
                } else if (firstButton === true) {
                    setFirstButton(firstButton => !firstButton);
                    sleep(time).then(() => {
                        setFirstButton(firstButton => !firstButton);
                    })
                }
                break;
            default:
                break;
        }
    }

    let playerImage;
    let monsterImage;

    switch (hero.heroClass) {
        case 'Mage':
            playerImage = '/images/charactersAvatars/1.png';
            break;
        case 'Priest':
            playerImage = '/images/charactersAvatars/4.png';
            break;
        case 'Warrior':

            playerImage = '/images/charactersAvatars/2.png';
            break;
        case 'Berserk':

            playerImage = '/images/charactersAvatars/5.png';
            break;
        case 'Hunter':

            playerImage = '../images/charactersAvatars/3.png';
            break;
        default:
            break;
    }
    switch (game.monster.monsterNumber) {
        case 0:
            monsterImage = '/images/monstersAvatars/1.png';
            break;
        case 1:
            monsterImage = '/images/monstersAvatars/2.png';
            break;
        case 2:
            monsterImage = '/images/monstersAvatars/3.png';
            break;
        case 3:
            monsterImage = '/images/monstersAvatars/4.png';
            break;
        case 4:
            monsterImage = '/images/monstersAvatars/5.png';
            break;
        case 5:
            monsterImage = '/images/monstersAvatars/6.png';
            break;
        case 6:
            monsterImage = '/images/monstersAvatars/7.png';
            break;
        case 7:
            monsterImage = '/images/monstersAvatars/8.png';
            break;
        case 8:
            monsterImage = '/images/monstersAvatars/9.png';
            break;
        default:
            break;
    }

    //players main Stats
    const [playerStats, setPlayerStats] = useState(playerGame);
    const [enemyStats, setEnemyStats] = useState(game.monster);

    //players temporary Stats
    //const [hpEnemy, setHpEnemy] = useState(game.monster.monsterHealtPoints);
    const [hpEnemy, setHpEnemy] = useState(3000);
    //const [hpPlayer, setHpPlayer] = useState(playerGame.healthPoints);
    const [hpPlayer, setHpPlayer] = useState(3000);
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

    const [playerBattleHpBar, setPlayerBattleHpBar] = useState();
    const [playerBattleMpBar, setPlayerBattleMpBar] = useState();

    const [valueOfSomething, setValueOfSomething] = useState(0);

    const a = (d) => {
        setValueOfSomething(d);
    }

    let widthOfMainHealthPointsBar = 300;
    let widthOfBattleContenerBars = 200;

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
                            damage = damage * 1.5;
                            setHpEnemy(hpEnemy => hpEnemy - damage);
                            a(damage);
                            console.log('player crit hit', damage)
                        } else {
                            setHpEnemy(hpEnemy => hpEnemy - damage);
                            a(damage);
                            console.log('player normal hit', damage)
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

    const changeTime = (time, attackMode) => {
        clearInterval(intervalEnemyDamage);
        attackEnemy(time, attackMode);

    }

    const manaRegen = () => {
        setIntervalPlayerMana(setInterval(() => {
            setManaPlayer(manaPlayer => manaPlayer + 1);
        }, 1 * 2000));
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
        let changeBarHpPlayer = (hpPlayer / playerStats.healthPoints) * widthOfMainHealthPointsBar;
        let changeBattleHealthBarPlayer = (hpPlayer / playerStats.healthPoints) * widthOfBattleContenerBars;
        if (changeBarHpPlayer > widthOfMainHealthPointsBar) {
            changeBarHpPlayer = widthOfMainHealthPointsBar;
            changeBattleHealthBarPlayer = widthOfBattleContenerBars;
        } else if (changeBarHpPlayer <= 0) {
            changeBarHpPlayer = 0;
            changeBattleHealthBarPlayer = 0;
        }
        setPlayerBattleHpBar(changeBattleHealthBarPlayer);
        setPlayerHpBar(changeBarHpPlayer);
    }, [hpPlayer]);

    useEffect(() => {
        let changeManaBarPlayer = (manaPlayer / playerStats.manaPoints) * widthOfMainHealthPointsBar;
        let changeBattleManaBarPlayer = (manaPlayer / playerStats.manaPoints) * widthOfBattleContenerBars;

        if (changeManaBarPlayer > widthOfMainHealthPointsBar) {
            changeManaBarPlayer = widthOfMainHealthPointsBar;
            changeBattleManaBarPlayer = widthOfBattleContenerBars;
        } else if (changeManaBarPlayer <= 0) {
            changeManaBarPlayer = 0;
            changeBattleManaBarPlayer = 0;
        }
        setPlayerBattleMpBar(changeBattleManaBarPlayer);
        setPlayerManaBar(changeManaBarPlayer);
    }, [manaPlayer]);

    useEffect(() => {
        let changeBarHpMonster = (hpEnemy / enemyStats.monsterHealtPoints) * widthOfMainHealthPointsBar;
        if (changeBarHpMonster > widthOfMainHealthPointsBar) {
            changeBarHpMonster = widthOfMainHealthPointsBar;
        } else if (changeBarHpMonster <= 0) {
            changeBarHpMonster = 0;
        }

        setMonsterHpBar(changeBarHpMonster);
    }, [hpEnemy]);

    useEffect(() => {
        attackEnemy(2500, 1);
        attackPlayer();
    }, []);

    useEffect(() => {
        if (manaPlayer >= playerStats.manaPoints) {
            clearInterval(intervalPlayerMana);
        }
    }, [manaPlayer]);


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


    // <CombatEnemyText value={valueOfSomething} id={Math.random()}/>

    return (<>
            <div className="singleGameView">
                <SingleGamePopupLose valueOfPopup={losePopup} changePopup={changePopup} setButtons={setButtons}
                                     setWindowOfElements={setWindowOfElements}/>
                <SingleGamePopupWin valueOfPopup={winPopup} changePopup={changePopup} setButtons={setButtons}
                                    setWindowOfElements={setWindowOfElements}/>
                <div className="player">
                    <div className="avatar">
                        <img alt='' src={`${playerImage}`}/>
                        <div className='background'>
                            <div className="nick">
                                {hero.nick}
                            </div>
                            <div className="level">
                                Poziom {hero.level}
                            </div>
                        </div>
                    </div>
                    <div className="healthPoints">
                        <div className="progressMonsterHealthPoints-div"
                             style={{width: `${widthOfMainHealthPointsBar}px`}}>
                            <div style={{width: `${playerHpBar}px`}} className="progressMonsterHealthPoints"/>
                        </div>
                        <div className="progress-div-monsterHealthPointsText">
                            {parseInt(hpPlayer)}/{parseInt(playerStats.healthPoints)}
                        </div>
                    </div>
                </div>
                <div className="enemy">
                    <div className="avatar">
                        <img alt='' src={`${monsterImage}`}/>
                        <div className='background'>
                            <div className="nick">
                                {game.monster.monsterName}
                            </div>
                            <div className="level">
                                Poziom {game.monster.monsterLevel}
                            </div>
                        </div>
                    </div>
                    <div className="healthPoints">
                        <div className="progressMonsterHealthPoints-div"
                             style={{width: `${widthOfMainHealthPointsBar}px`}}>
                            <div style={{width: `${monsterHpBar}px`}} className="progressMonsterHealthPoints"/>
                        </div>
                        <div className="progress-div-monsterHealthPointsText">
                            {parseInt(hpEnemy)}/{parseInt(game.monster.monsterHealtPoints)}
                        </div>
                    </div>
                </div>
                <div className="playerViewBattleController">
                    <div className="playerValues">
                        <div className="healtPoints-div" style={{width: `${widthOfBattleContenerBars}px`}}>
                            <div style={{width: `${playerBattleHpBar}px`}} className="progressPlayerHealthPoints"/>

                            <div className="progress-div-playerHealthPointsText">
                                {parseInt(hpPlayer)}/{parseInt(playerStats.healthPoints)}
                            </div>
                        </div>
                        <div className="manaPoints-div" style={{width: `${widthOfBattleContenerBars}px`}}>
                            <div style={{width: `${playerBattleMpBar}px`}} className="progressPlayerManaPoints"/>

                            <div className="progress-div-playerManaPointsText">
                                {parseInt(manaPlayer)}/{parseInt(playerStats.manaPoints)}
                            </div>
                        </div>

                    </div>
                    <div className="actions">
                        <div className="attackModes">
                            <div className="mode atk1">
                                <button onClick={() => {
                                    changeTime(1250, 0.5);
                                }}>tryb szybki ale słabe ataki
                                </button>
                            </div>
                            <div className="mode atk2">
                                <button onClick={() => {
                                    changeTime(2500, 1);
                                }}>tryb normalny oraz normalne ataki
                                </button>
                            </div>
                            <div className="mode atk3">
                                <button onClick={() => {
                                    changeTime(3750, 1.5);
                                }}>tryb wolny ale ataki mocniejsze
                                </button>
                            </div>
                        </div>
                        <div className="skills">
                            <SkillHandling numberOfSkill={1} handlingSkillButtons={handlingSkillButtons}
                                           buttonValue={firstButton} setButtonValue={setFirstButton}
                                           skillNumber={'skill1'} a={a} skill={skillsToBattle.firstSkill}
                                           setManaPlayer={setManaPlayer} manaPlayer={manaPlayer}
                                           setHpEnemy={setHpEnemy} hpEnemy={hpEnemy} hpPlayer={hpPlayer}
                                           setHpPlayer={setHpPlayer}
                                           sleep={sleep} rek={rek} playerStats={playerStats}
                                           setPlayerStats={setPlayerStats} manaRegen={manaRegen}/>
                            <SkillHandling numberOfSkill={2} handlingSkillButtons={handlingSkillButtons}
                                           buttonValue={secondButton} setButtonValue={setSecondButton}
                                           skillNumber={'skill2'} skill={skillsToBattle.secondSkill}
                                           setManaPlayer={setManaPlayer} manaPlayer={manaPlayer}
                                           setHpEnemy={setHpEnemy} hpEnemy={hpEnemy} hpPlayer={hpPlayer}
                                           setHpPlayer={setHpPlayer}
                                           sleep={sleep} rek={rek} playerStats={playerStats}
                                           setPlayerStats={setPlayerStats} manaRegen={manaRegen}/>
                            <SkillHandling numberOfSkill={3} handlingSkillButtons={handlingSkillButtons}
                                           buttonValue={thirdButton} setButtonValue={setThirdButton}
                                           skillNumber={'skill3'} skill={skillsToBattle.thirdSkill}
                                           setManaPlayer={setManaPlayer} manaPlayer={manaPlayer}
                                           setHpEnemy={setHpEnemy} hpEnemy={hpEnemy} hpPlayer={hpPlayer}
                                           setHpPlayer={setHpPlayer}
                                           sleep={sleep} rek={rek} playerStats={playerStats}
                                           setPlayerStats={setPlayerStats} manaRegen={manaRegen}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleGame;
