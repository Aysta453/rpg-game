import React from 'react';
import { useState,useEffect,useCallback ,useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SingleGame.css';
import SingleGamePopupLose from './SingleGamePopupLose';
import SingleGamePopupWin from './SingleGamePopupWin';
const SingleGame = ({ setButtons, setWindowOfElements }) => {
    const game = useSelector(state => state.game);
    const playerGame = useSelector(state => state.playerGame);
    let valueHpPlayer = 100;
    let valueManaPlayer = 1000;
    let valueHpEnemy = 1000;
    let valueOfTimeAttack = 3000;
    const [hpPlayer, setHpPlayer] = useState(valueHpPlayer);
    const [manaPlayer, setManaPlayer] = useState(valueManaPlayer);
    //const [hpEnemy, setHpEnemy] = useState(game.monster.monsterHealtPoints);
    const [hpEnemy, setHpEnemy] = useState(valueHpEnemy);
    const [playerStats, setPlayerStats] = useState(playerGame);
    const [enemyStats, setEnemyStats] = useState(game.monster);
    const [winPopup, setWinPopup] = useState(false);
    const [losePopup, setLosePopup] = useState(false);
    const [intervalPlayerDamage, setIntervalPlayerDamage] = useState(0);
    const [intervalEnemyDamage, setIntervalEnemyDamage] = useState(0);
    const [intervalPlayerMana, setIntervalPlayerMana] = useState(0);
    console.log(game);
    console.log(playerGame);




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
            console.log(hit, playerStats.chanceOnDodge);
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
                        
                        console.log('player crit hit',damage)
                    } else {
                        setHpEnemy(hpEnemy => hpEnemy - damage);
                        console.log('player normal hit',damage)
                    }
                
                } else {
                    console.log('monster blocked');
            }
            } else {
                  console.log('player missed')
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
    const specialAttack = async () => {
        setManaPlayer(manaPlayer => manaPlayer - 20);
        if (manaPlayer == 100) {
            manaRegen();
        }


        setTimeout(() => {
            setHpEnemy(hpEnemy => hpEnemy - 2);
        }, 1 * 2000);
        sleep(2000).then(() => {
            rek(2000, 3);
        });
    }
    const rek = (ms, attackTime) => {
        if (attackTime > 0) {
            sleep(ms).then(() => {
                setHpEnemy(hpEnemy => hpEnemy - 2);
                rek(ms, attackTime - 1);
            })
        }
    } 
    useEffect(() => {
        attackEnemy(2500,1);
        attackPlayer();
    }, []);
    useEffect(() => {
        if (manaPlayer == 100) {
            clearInterval(intervalPlayerMana);
        }
    },[manaPlayer]);

    useEffect(() => {
        if (hpPlayer <= 0) {
            clearInterval(intervalPlayerDamage);
            sleep(2000).then(() => {
                setLosePopup(true);
            });

            
        } 
        if (hpEnemy <= 0) {
            clearInterval(intervalEnemyDamage);
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
                   {hpPlayer}/{valueHpPlayer}
                </div>
                <div className="ManaPoints">
                    {manaPlayer}/{valueManaPlayer}
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
                     <div className="First">
                        <div className="Child">
                            <button onClick={() => {specialAttack()}}>skill </button>
                        </div>
                    </div>
                    <div className="Second">
                        <div className="Child">
                            <button onClick={() =>{specialAttack()}}>skill </button>
                        </div>
                    </div>
                    <div className="Third">
                        <div className="Child">
                            <button onClick={() => {specialAttack()}}>skill </button>
                        </div>
                    </div>
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
                    {hpEnemy}/{game.monster.monsterHealtPoints}
                </div>
            </div>
        </div>
        </>
    );
};

export default SingleGame; 