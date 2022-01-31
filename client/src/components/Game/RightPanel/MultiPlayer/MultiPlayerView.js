import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPlayer from "./MainPlayer";
import "./MultiPlayerView.css";
import Player from "./Player";
import SkillHandlingMulti from "./SkillHandlingMulti";
import { sendupdateroomingame, downloadupdateroomingame } from "../../../../actions/rooms.js";
import CombatEnemyTextMulti from "./CombatEnemyTextMulti.js";
import MultiGamePopupLose from "./MultiGamePopupLose";
import MultiGamePopupWin from "./MultiGamePopupWin";
import CombatEnemySkillTextMulti from "./CombatEnemySkillTextMulti";
import CombatPlayerHealTextMulti from "./CombatPlayerHealTextMulti";
import CombatSkillBonusTextMulti from "./CombatSkillBonusTextMulti";
import CombatPlayerAttackTextMulti from "./CombatPlayerAttackTextMulti";

const MultiPlayerView = ({ setButtons, setWindowOfElements, socket, memberPartyId }) => {
  //const game = useSelector((state) => state.game);
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  const playerGame = useSelector((state) => state.playerGame);
  const skillsToBattle = useSelector((state) => state.skillsToBattle);
  const rooms = useSelector((state) => state.rooms);
  const [firstButton, setFirstButton] = useState(true);
  const [secondButton, setSecondButton] = useState(true);
  const [thirdButton, setThirdButton] = useState(true);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const [firstModeButton, setFirstModeButton] = useState(true);
  const [secondModeButton, setSecondModeButton] = useState(false);
  const [thirdModeButton, setThirdModeButton] = useState(true);
  const [afkMode, setAfkMode] = useState(false);

  const handleModeButtons = (numberOfMode) => {
    switch (numberOfMode) {
      case 1:
        setFirstModeButton((firstModeButton) => false);
        setSecondModeButton((secondModeButton) => false);
        setThirdModeButton((thirdModeButton) => false);

        sleep(4000).then(() => {
          setSecondModeButton((secondModeButton) => true);
          setThirdModeButton((thirdModeButton) => true);
        });
        break;
      case 2:
        setFirstModeButton((firstModeButton) => false);
        setSecondModeButton((secondModeButton) => false);
        setThirdModeButton((thirdModeButton) => false);

        sleep(4000).then(() => {
          setFirstModeButton((firstModeButton) => true);
          setThirdModeButton((thirdModeButton) => true);
        });

        break;
      case 3:
        setFirstModeButton((firstModeButton) => false);
        setSecondModeButton((secondModeButton) => false);
        setThirdModeButton((thirdModeButton) => false);

        sleep(4000).then(() => {
          setFirstModeButton((firstModeButton) => true);
          setSecondModeButton((secondModeButton) => true);
        });
        break;
      default:
        break;
    }
  };
  const handlingSkillButtons = (numberOfSkill, time) => {
    switch (numberOfSkill) {
      case 1:
        setFirstButton(!firstButton);
        if (secondButton === true && thirdButton === true) {
          setSecondButton((secondButton) => !secondButton);
          setThirdButton((thirdButton) => !thirdButton);
          sleep(time).then(() => {
            setSecondButton((secondButton) => !secondButton);
            setThirdButton((thirdButton) => !thirdButton);
          });
        } else if (secondButton === true) {
          setSecondButton((secondButton) => !secondButton);
          sleep(time).then(() => {
            setSecondButton((secondButton) => !secondButton);
          });
        } else if (thirdButton === true) {
          setThirdButton((thirdButton) => !thirdButton);
          sleep(time).then(() => {
            setThirdButton((thirdButton) => !thirdButton);
          });
        }
        break;
      case 2:
        setSecondButton(!secondButton);
        if (firstButton === true && thirdButton === true) {
          setFirstButton((firstButton) => !firstButton);
          setThirdButton((thirdButton) => !thirdButton);

          sleep(time).then(() => {
            setFirstButton((firstButton) => !firstButton);
            setThirdButton((thirdButton) => !thirdButton);
          });
        } else if (secondButton === true) {
          setFirstButton((firstButton) => !firstButton);
          sleep(time).then(() => {
            setFirstButton((firstButton) => !firstButton);
          });
        } else if (thirdButton === true) {
          setThirdButton((thirdButton) => !thirdButton);
          sleep(time).then(() => {
            setThirdButton((thirdButton) => !thirdButton);
          });
        }
        break;
      case 3:
        setThirdButton(!thirdButton);
        if (secondButton === true && firstButton === true) {
          setSecondButton((secondButton) => !secondButton);
          setFirstButton((firstButton) => !firstButton);
          sleep(time).then(() => {
            setSecondButton((secondButton) => !secondButton);
            setFirstButton((firstButton) => !firstButton);
          });
        } else if (secondButton === true) {
          setSecondButton((secondButton) => !secondButton);
          sleep(time).then(() => {
            setSecondButton((secondButton) => !secondButton);
          });
        } else if (firstButton === true) {
          setFirstButton((firstButton) => !firstButton);
          sleep(time).then(() => {
            setFirstButton((firstButton) => !firstButton);
          });
        }
        break;
      default:
        break;
    }
  };
  let monsterImage;

  switch (rooms.monster.monsterNumber) {
    case 0:
      monsterImage = "/images/monstersAvatars/1.png";
      break;
    case 1:
      monsterImage = "/images/monstersAvatars/2.png";
      break;
    case 2:
      monsterImage = "/images/monstersAvatars/3.png";
      break;
    case 3:
      monsterImage = "/images/monstersAvatars/4.png";
      break;
    case 4:
      monsterImage = "/images/monstersAvatars/5.png";
      break;
    case 5:
      monsterImage = "/images/monstersAvatars/6.png";
      break;
    case 6:
      monsterImage = "/images/monstersAvatars/7.png";
      break;
    case 7:
      monsterImage = "/images/monstersAvatars/8.png";
      break;
    case 8:
      monsterImage = "/images/monstersAvatars/9.png";
      break;
    default:
      break;
  }
  const [playerStats, setPlayerStats] = useState(rooms.players[memberPartyId].heroPower);

  //players main Stats
  // eslint-disable-next-line
  const [enemyStats, setEnemyStats] = useState(rooms.monster);

  //players temporary Stats
  const [hpEnemy, setHpEnemy] = useState(rooms.monster.monsterHealtPoints);
  //const [hpEnemy, setHpEnemy] = useState(3000);
  // const [hpPlayer, setHpPlayer] = useState(rooms.players[memberPartyId].heroPower.currentHealthPoints);
  const [manaPlayer, setManaPlayer] = useState(rooms.players[memberPartyId].heroPower.currentManaPoints);

  //intervals
  const [intervalPlayerDamage, setIntervalPlayerDamage] = useState(0);
  const [intervalEnemyDamage, setIntervalEnemyDamage] = useState(0);
  const [intervalPlayerMana, setIntervalPlayerMana] = useState(0);
  const [intervalPlayerHealth, setIntervalPlayerHealth] = useState(0);
  const [intervalPlayerHealthID, setIntervalPlayerHealthID] = useState(false);

  //end windows
  const [winPopup, setWinPopup] = useState(false);
  const [losePopup, setLosePopup] = useState(false);
  //bars
  const [playerHpBar, setPlayerHpBar] = useState(0);
  // eslint-disable-next-line
  const [playerManaBar, setPlayerManaBar] = useState(0);
  const [monsterHpBar, setMonsterHpBar] = useState(0);

  const [playerBattleHpBar, setPlayerBattleHpBar] = useState();
  const [playerBattleMpBar, setPlayerBattleMpBar] = useState();
  const [attackMode, setAttackMode] = useState(2500);

  const [valueOfNormalEnemyAttackText, setValueOfNormalEnemyAttackText] = useState(0);
  const [enemyAttackCounter, setEnemyAttackCounter] = useState(0);
  const [normalAttackEnemyID, setNormalAttackEnemyID] = useState();
  const [typeOfNormalEnemyAttack, setTypeOfNormalEnemyAttack] = useState(0);

  const [valueOfNormalPlayerAttackText, setValueOfNormalPlayerAttackText] = useState(0);
  const [playerAttackCounter, setPlayerAttackCounter] = useState(0);
  const [normalAttackPlayerID, setNormalAttackPlayerID] = useState();
  const [typeOfNormalPlayerAttack, setTypeOfNormalPlayerAttack] = useState(0);

  const [valueSkillDamageEnemyText, setValueSkillDamageEnemyText] = useState(0);
  const [enemySkillDamageCounter, setEnemySkillDamageCounter] = useState(0);
  const [enemySkillDamageID, setEnemySkillDamageID] = useState();

  const [valueOfBonusSkillText, setValueOfBonusSkillText] = useState(0);
  const [bonusSkillTextCounter, setBonusSkillTextCounter] = useState(0);
  const [bonusSkillID, setBonusSkillID] = useState();

  const [valueOfNormalPlayerHealText, setValueOfNormalPlayerHealText] = useState(0);
  const [playerHealCounter, SetPlayerHealCounter] = useState(0);
  const [normalHealPlayerID, setNormalHealPlayerID] = useState();
  const [typeOfNormalPlayerHeal, setTypeOfNormalPlayerHeal] = useState(0);

  const functionNormalEnemyAttack = (damage, type) => {
    setEnemyAttackCounter((enemyAttackCounter) => enemyAttackCounter + 1);
    setValueOfNormalEnemyAttackText(damage);
    setTypeOfNormalEnemyAttack(type);
  };

  const functionSkillBonusText = (value) => {
    setBonusSkillTextCounter((bonusSkillTextCounter) => bonusSkillTextCounter + 1);
    setValueOfBonusSkillText(value);
  };

  const functionNormalPlayerAttack = (damage, type) => {
    setPlayerAttackCounter((playerAttackCounter) => playerAttackCounter + 1);
    setValueOfNormalPlayerAttackText(damage);
    setTypeOfNormalPlayerAttack(type);
  };
  const functionSkillDamageEnemyAttack = (damage) => {
    setEnemySkillDamageCounter((enemySkillDamageCounter) => enemySkillDamageCounter + 1);
    setValueSkillDamageEnemyText(damage);
  };

  const functionNormalPlayerHeal = (heal, type) => {
    SetPlayerHealCounter((playerAttackCounter) => playerAttackCounter + 1);
    setValueOfNormalPlayerHealText(heal);
    setTypeOfNormalPlayerHeal(type);
  };

  let widthOfMainHealthPointsBar = 15.8;
  let widthOfBattleContenerBars = 10.5;

  const changePopup = (number) => {
    if (number === 0) {
      setLosePopup(!losePopup);
    } else {
      setWinPopup(!winPopup);
    }
  };

  const changeTime = (time, attackMode) => {
    clearInterval(intervalEnemyDamage);
    attackEnemy(time, attackMode);
  };

  const manaRegen = () => {
    setIntervalPlayerMana(
      setInterval(() => {
        let mp = rooms.players[memberPartyId].heroPower.regMp;
        socket.emit("increaseMana", rooms.roomName, memberPartyId, mp);
      }, 1 * 1000)
    );
  };

  const healthRegen = () => {
    setIntervalPlayerHealth(
      setInterval(() => {
        let hp = rooms.players[memberPartyId].heroPower.regHp;
        socket.emit("increaseHealth", rooms.roomName, memberPartyId, hp);
      }, 1 * 1000)
    );
  };
  const damageOverTime = (delay, numberOfAttack, valueOfDotValue) => {
    if (numberOfAttack > 0) {
      sleep(delay).then(() => {
        if (rooms.monster.currentMonsterHealtPoints >= 0) {
          socket.on("dechp", Math.floor(valueOfDotValue), rooms.roomName);
          functionSkillDamageEnemyAttack(Math.floor(valueOfDotValue));
          damageOverTime(delay, numberOfAttack - 1, valueOfDotValue);
        }
      });
    }
  };
  const healOverTime = (delay, numberOfHealing, valueOfHotValue) => {
    if (numberOfHealing > 0) {
      sleep(delay).then(() => {
        if (rooms.players[memberPartyId].heroPower.currentHealthPoints >= 0) {
          socket.emit("increaseHealth", rooms.roomName, memberPartyId, valueOfHotValue);
          functionNormalPlayerHeal(Math.floor(valueOfHotValue), 0);
          damageOverTime(delay, numberOfHealing - 1, valueOfHotValue);
        }
      });
    }
  };

  const attackPlayer = () => {
    setIntervalPlayerDamage(
      setInterval(() => {
        socket.emit("decreaseHpPlayer", rooms, rooms.roomName, hero.nick);
      }, 2500)
    );
  };
  const attackEnemy = (time, attackMode) => {
    setIntervalEnemyDamage(
      setInterval(() => {
        let hit = Math.random() * 100 + 1;
        if (hit <= rooms.players[memberPartyId].heroPower.chanceOnHit) {
          let critHit = Math.random() * 100 + 1;

          let damage = Math.floor(
            (Math.random() * (rooms.players[memberPartyId].heroPower.maxAttack - rooms.players[memberPartyId].heroPower.minAttack + 1) +
              rooms.players[memberPartyId].heroPower.minAttack -
              Math.ceil(rooms.monster.monsterDefense / 10)) *
              attackMode
          );
          if (damage > 0) {
            if (critHit <= rooms.players[memberPartyId].heroPower.chanceOnCritHit) {
              damage = damage * 1.5;
              socket.emit("dechp", damage, rooms.roomName);
              functionNormalEnemyAttack(damage, 1);
            } else {
              functionNormalEnemyAttack(damage, 0);
              socket.emit("dechp", damage, rooms.roomName);
            }
          } else {
            functionNormalEnemyAttack(0, 3);
            socket.emit("dechp", 0, rooms.roomName);
          }
        } else {
          functionNormalEnemyAttack(0, 3);
          socket.emit("dechp", 0, rooms.roomName);
        }
      }, 1 * time)
    );
  };

  useEffect(() => {
    setNormalAttackEnemyID(Math.random());
  }, [enemyAttackCounter]);

  useEffect(() => {
    setBonusSkillID(Math.random());
  }, [bonusSkillTextCounter]);

  useEffect(() => {
    setNormalAttackPlayerID(Math.random());
  }, [playerAttackCounter]);

  useEffect(() => {
    setEnemySkillDamageID(Math.random());
  }, [enemySkillDamageCounter]);

  useEffect(() => {
    setNormalHealPlayerID(Math.random());
  }, [playerHealCounter]);
  useEffect(() => {
    socket.on("decreasehpenemy", (mess) => {
      rooms.monster.currentMonsterHealtPoints = rooms.monster.currentMonsterHealtPoints - mess;
      setHpEnemy((hpEnemy) => hpEnemy - mess);
    });
  }, []);
  useEffect(() => {
    socket.on("dechpPlayer", (randomNember, damage, typeOfCombatText) => {
      rooms.players[randomNember].heroPower.currentHealthPoints = rooms.players[randomNember].heroPower.currentHealthPoints - damage;
      if (randomNember === memberPartyId) {
        functionNormalPlayerAttack(damage, typeOfCombatText);
      }
    });
  }, []);
  useEffect(() => {
    socket.on("decMpPlayer", (randomNember, mp) => {
      rooms.players[randomNember].heroPower.currentManaPoints = rooms.players[randomNember].heroPower.currentManaPoints - mp;
    });
  }, []);
  useEffect(() => {
    socket.on("incHpPlayer", (randomNember, hp) => {
      rooms.players[randomNember].heroPower.currentHealthPoints = rooms.players[randomNember].heroPower.currentHealthPoints + hp;
    });
  }, []);
  useEffect(() => {
    socket.on("incMpPlayer", (randomNember, mp) => {
      rooms.players[randomNember].heroPower.currentManaPoints = rooms.players[randomNember].heroPower.currentManaPoints + mp;
    });
  }, []);
  useEffect(() => {
    socket.on("changedStats", (randomNember, typeOfBuff, statement, value) => {
      switch (typeOfBuff) {
        case 1: //dodge
          switch (statement) {
            case 1:
              rooms.players[randomNember].heroPower.chanceOnDodge = rooms.players[randomNember].heroPower.chanceOnDodge + value;
              break;
            case 2:
              rooms.players[randomNember].heroPower.chanceOnDodge = rooms.players[randomNember].heroPower.chanceOnDodge - value;
              break;
            default:
              break;
          }
          break;
        case 2: //block
          switch (statement) {
            case 1:
              rooms.players[randomNember].heroPower.chanceOnBlock = rooms.players[randomNember].heroPower.chanceOnBlock + value;
              break;
            case 2:
              rooms.players[randomNember].heroPower.chanceOnBlock = rooms.players[randomNember].heroPower.chanceOnBlock - value;
              break;
            default:
              break;
          }
          break;
        case 3: //crit
          switch (statement) {
            case 1:
              rooms.players[randomNember].heroPower.chanceOnCritHit = rooms.players[randomNember].heroPower.chanceOnCritHit + value;
              break;
            case 2:
              rooms.players[randomNember].heroPower.chanceOnCritHit = rooms.players[randomNember].heroPower.chanceOnCritHit - value;
              break;
            default:
              break;
          }
          break;
        case 4: //defense
          switch (statement) {
            case 1:
              rooms.players[randomNember].heroPower.defensePoints = rooms.players[randomNember].heroPower.defensePoints + value;
              break;
            case 2:
              rooms.players[randomNember].heroPower.defensePoints = rooms.players[randomNember].heroPower.defensePoints - value;
              break;
            default:
              break;
          }
          break;
        case 5: //healthPoints
          switch (statement) {
            case 1:
              rooms.players[randomNember].heroPower.currentHealthPoints = rooms.players[randomNember].heroPower.currentHealthPoints + value;
              rooms.players[randomNember].heroPower.healthPoints = rooms.players[randomNember].heroPower.healthPoints + value;
              break;
            case 2:
              rooms.players[randomNember].heroPower.healthPoints = rooms.players[randomNember].heroPower.healthPoints - value;
              break;
            default:
              break;
          }
          break;
        case 6: //ManaPoints
          switch (statement) {
            case 1:
              rooms.players[randomNember].heroPower.currentManaPoints = rooms.players[randomNember].heroPower.currentManaPoints + value;
              rooms.players[randomNember].heroPower.manaPoints = rooms.players[randomNember].heroPower.manaPoints + value;
              break;
            case 2:
              rooms.players[randomNember].heroPower.manaPoints = rooms.players[randomNember].heroPower.manaPoints - value;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    });
  }, []);
  useEffect(() => {
    //attack buff
    socket.on("changedStatsAttack", (randomNember, statement, attackMin, attackMax) => {
      if (statement === 1) {
        rooms.players[randomNember].heroPower.minAttack = rooms.players[randomNember].heroPower.minAttack + attackMin;
        rooms.players[randomNember].heroPower.maxAttack = rooms.players[randomNember].heroPower.maxAttack + attackMax;
      }
      if (statement === 2) {
        rooms.players[randomNember].heroPower.minAttack = rooms.players[randomNember].heroPower.minAttack - attackMin;
        rooms.players[randomNember].heroPower.maxAttack = rooms.players[randomNember].heroPower.maxAttack - attackMax;
      }
    });
  }, []);
  useEffect(() => {
    if (rooms.players[memberPartyId].heroPower.currentHealthPoints <= 0) {
      setAfkMode((afkMode) => (afkMode = true));
    }
  }, [rooms.players[memberPartyId].heroPower.currentHealthPoints]);

  useEffect(() => {
    if (rooms.players[memberPartyId].heroPower.currentHealthPoints < rooms.players[memberPartyId].heroPower.healthPoints && intervalPlayerHealthID === false) {
      console.log(rooms.players[memberPartyId].heroPower.currentHealthPoints);
      healthRegen();
      setIntervalPlayerHealthID(!intervalPlayerHealthID);
    }

    if (rooms.players[memberPartyId].heroPower.currentHealthPoints >= rooms.players[memberPartyId].heroPower.healthPoints && intervalPlayerHealthID === true) {
      clearInterval(intervalPlayerHealth);
      setIntervalPlayerHealthID(!intervalPlayerHealthID);
    }
  }, [rooms.players[memberPartyId].heroPower.currentHealthPoints, intervalPlayerHealthID]);

  useEffect(() => {
    let changeBarHpPlayer = (rooms.players[memberPartyId].heroPower.currentHealthPoints / rooms.players[memberPartyId].heroPower.healthPoints) * widthOfMainHealthPointsBar;
    let changeBattleHealthBarPlayer = (rooms.players[memberPartyId].heroPower.currentHealthPoints / rooms.players[memberPartyId].heroPower.healthPoints) * widthOfBattleContenerBars;
    if (changeBarHpPlayer > widthOfMainHealthPointsBar) {
      changeBarHpPlayer = widthOfMainHealthPointsBar;
      changeBattleHealthBarPlayer = widthOfBattleContenerBars;
    } else if (changeBarHpPlayer <= 0) {
      changeBarHpPlayer = 0;
      changeBattleHealthBarPlayer = 0;
    }
    setPlayerBattleHpBar(changeBattleHealthBarPlayer);
    setPlayerHpBar(changeBarHpPlayer);
    // eslint-disable-next-line
  }, [rooms.players[memberPartyId].heroPower.currentHealthPoints]);

  useEffect(() => {
    let changeManaBarPlayer = (rooms.players[memberPartyId].heroPower.currentManaPoints / rooms.players[memberPartyId].heroPower.manaPoints) * widthOfMainHealthPointsBar;
    let changeBattleManaBarPlayer = (rooms.players[memberPartyId].heroPower.currentManaPoints / rooms.players[memberPartyId].heroPower.manaPoints) * widthOfBattleContenerBars;

    if (changeManaBarPlayer > widthOfMainHealthPointsBar) {
      changeManaBarPlayer = widthOfMainHealthPointsBar;
      changeBattleManaBarPlayer = widthOfBattleContenerBars;
    } else if (changeManaBarPlayer <= 0) {
      changeManaBarPlayer = 0;
      changeBattleManaBarPlayer = 0;
    }
    setPlayerBattleMpBar(changeBattleManaBarPlayer);
    setPlayerManaBar(changeManaBarPlayer);
    // eslint-disable-next-line
  }, [rooms.players[memberPartyId].heroPower.currentManaPoints]);

  useEffect(() => {
    let changeBarHpMonster = (hpEnemy / rooms.monster.monsterHealtPoints) * widthOfMainHealthPointsBar;
    if (changeBarHpMonster > widthOfMainHealthPointsBar) {
      changeBarHpMonster = widthOfMainHealthPointsBar;
    } else if (changeBarHpMonster <= 0) {
      changeBarHpMonster = 0;
    }
    setMonsterHpBar(changeBarHpMonster);
    // eslint-disable-next-line
  }, [hpEnemy]);

  useEffect(() => {
    attackEnemy(2500, 1);
    if (hero.owner === rooms.owner) {
      attackPlayer();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (rooms.players[memberPartyId].heroPower.currentManaPoints >= rooms.players[memberPartyId].heroPower.manaPoints) {
      clearInterval(intervalPlayerMana);
    }
    // eslint-disable-next-line
  }, [rooms.players[memberPartyId].heroPower.currentManaPoints]);

  useEffect(() => {
    if (rooms.players[memberPartyId].heroPower.currentHealthPoints <= 0 && hpEnemy > 0) {
      clearInterval(intervalEnemyDamage);
      clearInterval(intervalPlayerHealth);
      clearInterval(intervalPlayerMana);
    } else if (hpEnemy <= 0 && rooms.players[memberPartyId].heroPower.currentHealthPoints > 0) {
      clearInterval(intervalEnemyDamage);
      clearInterval(intervalPlayerHealth);
      clearInterval(intervalPlayerMana);
    }
    // eslint-disable-next-line
  }, [rooms.players[memberPartyId].heroPower.currentHealthPoints, hpEnemy]);
  useEffect(() => {
    if ((rooms.players[0].heroPower.currentHealthPoints > 0 || rooms.players[1].heroPower.currentHealthPoints > 0 || rooms.players[2].heroPower.currentHealthPoints) && hpEnemy < 0) {
      console.log("test");
      clearInterval(intervalPlayerDamage);
      sleep(2000).then(() => {
        socket.emit("endBattle", rooms.roomName, 1);
      });
    } else if (rooms.players[0].heroPower.currentHealthPoints <= 0 && rooms.players[1].heroPower.currentHealthPoints && rooms.players[2].heroPower.currentHealthPoints <= 0 && hpEnemy > 0) {
      console.log("test");
      clearInterval(intervalPlayerDamage);
      sleep(2000).then(() => {
        socket.emit("endBattle", rooms.roomName, 0);
      });
    }
  }, [rooms.players[0].heroPower.currentHealthPoints, rooms.players[1].heroPower.currentHealthPoints, rooms.players[2].heroPower.currentHealthPoints, hpEnemy]);
  useEffect(() => {
    socket.on("endedBattle", (value) => {
      if (value === 0) {
        setLosePopup(true);
      } else if (value === 1) {
        setWinPopup(true);
      }
    });
  }, []);

  return (
    <div className="multiContener">
      <MultiGamePopupLose valueOfPopup={losePopup} changePopup={changePopup} setButtons={setButtons} setWindowOfElements={setWindowOfElements} socket={socket} />
      <MultiGamePopupWin valueOfPopup={winPopup} changePopup={changePopup} setButtons={setButtons} setWindowOfElements={setWindowOfElements} socket={socket} memberPartyId={memberPartyId} />
      <div className="playersView">
        <MainPlayer
          currentHp={rooms.players[memberPartyId].heroPower.currentHealthPoints}
          hp={rooms.players[memberPartyId].heroPower.healthPoints}
          currentMp={rooms.players[memberPartyId].heroPower.currentManaPoints}
          mp={rooms.players[memberPartyId].heroPower.manaPoints}
        />
        {rooms.players.length
          ? rooms.players.map((player) =>
              hero.owner !== player.owner ? (
                <div key={player.owner}>
                  <Player player={player} />
                </div>
              ) : (
                ""
              )
            )
          : ""}
        <CombatPlayerAttackTextMulti value={valueOfNormalPlayerAttackText} id={normalAttackPlayerID} type={typeOfNormalPlayerAttack} />
        <CombatPlayerHealTextMulti value={valueOfNormalPlayerHealText} id={normalHealPlayerID} type={typeOfNormalPlayerHeal} />
        <CombatSkillBonusTextMulti value={valueOfBonusSkillText} id={bonusSkillID} />
      </div>
      <div className="enemy">
        <div className="avatar">
          <img alt="" src={`${monsterImage}`} />
          <div className="background">
            <div className="nick">{rooms.monster.monsterName}</div>
            <div className="level">Poziom {rooms.monster.monsterLevel}</div>
            <CombatEnemyTextMulti value={valueOfNormalEnemyAttackText} id={normalAttackEnemyID} type={typeOfNormalEnemyAttack} attackMode={attackMode} />
            <CombatEnemySkillTextMulti value={valueSkillDamageEnemyText} id={enemySkillDamageID} />
          </div>
        </div>
        <div className="healthPoints">
          <div className="progressMonsterHealthPoints-div" style={{ width: `${widthOfMainHealthPointsBar}vw` }}>
            <div style={{ width: `${monsterHpBar}vw` }} className="progressMonsterHealthPoints" />
          </div>
          <div className="progress-div-monsterHealthPointsText">
            {" "}
            {parseInt(hpEnemy)}/{parseInt(rooms.monster.monsterHealtPoints)}
          </div>
        </div>
      </div>
      <div className="playerViewBattleController">
        <div className="playerValues">
          <div className="healtPoints-div" style={{ width: `${widthOfBattleContenerBars}vw` }}>
            <div style={{ width: `${playerBattleHpBar}vw` }} className="progressPlayerHealthPoints" />

            <div className="progress-div-playerHealthPointsText">
              {" "}
              {parseInt(rooms.players[memberPartyId].heroPower.currentHealthPoints)}/{parseInt(rooms.players[memberPartyId].heroPower.healthPoints)}
            </div>
          </div>
          <div className="manaPoints-div" style={{ width: `${widthOfBattleContenerBars}vw` }}>
            <div style={{ width: `${playerBattleMpBar}vw` }} className="progressPlayerManaPoints" />

            <div className="progress-div-playerManaPointsText">
              {" "}
              {parseInt(rooms.players[memberPartyId].heroPower.currentManaPoints)}/{parseInt(rooms.players[memberPartyId].heroPower.manaPoints)}
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="attackModes">
            <div className="mode atk1">
              {firstModeButton && !afkMode ? (
                <button
                  onClick={() => {
                    handleModeButtons(1);
                    setAttackMode((attackMode) => (attackMode = 1250));
                    changeTime(1250, 0.5);
                  }}
                >
                  <img className="imageMode" alt="" src="/images/modes/1.png" />
                </button>
              ) : (
                <button
                  disabled
                  onClick={() => {
                    handleModeButtons(1);
                    changeTime(1250, 0.5);
                  }}
                >
                  <img className="imageMode" alt="" src="/images/modes/1.png" />
                </button>
              )}
              <div className="attackTooltip">
                <p className={"nametool"}>Tryb Szybki</p>
                <p className={"costtool"}>
                  Szybkość ataku: <span className={"pcosttool"}>1.35s</span>
                </p>
                <p className={"worftool"}>
                  Wartość ataków:{" "}
                  <span className={"pworftool"}>
                    {Math.floor(rooms.players[memberPartyId].heroPower.minAttack / 2)}-{Math.floor(rooms.players[memberPartyId].heroPower.maxAttack / 2)}
                  </span>
                </p>
              </div>
            </div>
            <div className="mode atk2">
              {secondModeButton && !afkMode ? (
                <button
                  onClick={() => {
                    handleModeButtons(2);
                    setAttackMode((attackMode) => (attackMode = 2500));
                    changeTime(2500, 1);
                  }}
                >
                  <img className="imageMode" alt="" src="/images/modes/2.png" />
                </button>
              ) : (
                <button
                  disabled
                  onClick={() => {
                    handleModeButtons(2);
                    changeTime(2500, 0.5);
                  }}
                >
                  <img className="imageMode" alt="" src="/images/modes/2.png" />
                </button>
              )}
              <div className="attackTooltip">
                <p className={"nametool"}>Tryb Normalny</p>
                <p className={"costtool"}>
                  Szybkość ataku: <span className={"pcosttool"}>2.5s</span>
                </p>
                <p className={"worftool"}>
                  Wartość ataków:{" "}
                  <span className={"pworftool"}>
                    {Math.floor(rooms.players[memberPartyId].heroPower.minAttack)}-{Math.floor(rooms.players[memberPartyId].heroPower.maxAttack)}
                  </span>
                </p>
              </div>
            </div>
            <div className="mode atk3">
              {thirdModeButton && !afkMode ? (
                <button
                  onClick={() => {
                    handleModeButtons(3);
                    setAttackMode((attackMode) => (attackMode = 3750));
                    changeTime(3750, 1.5);
                  }}
                >
                  <img className="imageMode" alt="" src="/images/modes/3.png" />
                </button>
              ) : (
                <button
                  disabled
                  onClick={() => {
                    handleModeButtons(3);
                    changeTime(3750, 1.5);
                  }}
                >
                  <img className="imageMode" alt="" src="/images/modes/3.png" />
                </button>
              )}
              <div className="attackTooltip">
                <p className={"nametool"}>Tryb Wolny</p>
                <p className={"costtool"}>
                  Szybkość ataku: <span className={"pcosttool"}>3.75s</span>
                </p>
                <p className={"worftool"}>
                  Wartość ataków:{" "}
                  <span className={"pworftool"}>
                    {Math.floor(rooms.players[memberPartyId].heroPower.minAttack * 1.5)}-{Math.floor(rooms.players[memberPartyId].heroPower.maxAttack * 1.5)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="skills">
            <SkillHandlingMulti
              numberOfSkill={1}
              handlingSkillButtons={handlingSkillButtons}
              buttonValue={firstButton}
              setButtonValue={setFirstButton}
              skillNumber={"skill1"}
              skill={skillsToBattle.firstSkill}
              intervalEnemyDamage={intervalEnemyDamage}
              intervalPlayerDamage={intervalPlayerDamage}
              setHpEnemy={setHpEnemy}
              hpEnemy={hpEnemy}
              functionNormalPlayerHeal={functionNormalPlayerHeal}
              sleep={sleep}
              damageOverTime={damageOverTime}
              playerStats={playerStats}
              healOverTime={healOverTime}
              setPlayerStats={setPlayerStats}
              manaRegen={manaRegen}
              functionSkillDamageEnemyAttack={functionSkillDamageEnemyAttack}
              functionSkillBonusText={functionSkillBonusText}
              memberPartyId={memberPartyId}
              socket={socket}
              afkMode={afkMode}
            />
            <SkillHandlingMulti
              numberOfSkill={2}
              handlingSkillButtons={handlingSkillButtons}
              buttonValue={secondButton}
              setButtonValue={setSecondButton}
              skillNumber={"skill2"}
              skill={skillsToBattle.secondSkill}
              setHpEnemy={setHpEnemy}
              hpEnemy={hpEnemy}
              functionNormalPlayerHeal={functionNormalPlayerHeal}
              intervalEnemyDamage={intervalEnemyDamage}
              intervalPlayerDamage={intervalPlayerDamage}
              sleep={sleep}
              damageOverTime={damageOverTime}
              playerStats={playerStats}
              healOverTime={healOverTime}
              setPlayerStats={setPlayerStats}
              manaRegen={manaRegen}
              functionSkillDamageEnemyAttack={functionSkillDamageEnemyAttack}
              functionSkillBonusText={functionSkillBonusText}
              memberPartyId={memberPartyId}
              socket={socket}
              afkMode={afkMode}
            />
            <SkillHandlingMulti
              numberOfSkill={3}
              handlingSkillButtons={handlingSkillButtons}
              buttonValue={thirdButton}
              setButtonValue={setThirdButton}
              skillNumber={"skill3"}
              skill={skillsToBattle.thirdSkill}
              setHpEnemy={setHpEnemy}
              hpEnemy={hpEnemy}
              functionNormalPlayerHeal={functionNormalPlayerHeal}
              intervalEnemyDamage={intervalEnemyDamage}
              intervalPlayerDamage={intervalPlayerDamage}
              sleep={sleep}
              damageOverTime={damageOverTime}
              playerStats={playerStats}
              healOverTime={healOverTime}
              setPlayerStats={setPlayerStats}
              manaRegen={manaRegen}
              functionSkillDamageEnemyAttack={functionSkillDamageEnemyAttack}
              functionSkillBonusText={functionSkillBonusText}
              memberPartyId={memberPartyId}
              socket={socket}
              afkMode={afkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiPlayerView;
