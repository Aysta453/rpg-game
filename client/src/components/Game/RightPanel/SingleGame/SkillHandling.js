import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import convertingStaticTime from "../../../../functions/convertingStaticTime";

import showingActiveImageSkill from "../../../../functions/showingActiveImageSkill";
const SkillHandling = ({
  intervalEnemyDamage,
  intervalPlayerDamage,
  setChanceOnDodge,
  chanceOnDodge,
  numberOfSkill,
  healOverTime,
  functionNormalPlayerHeal,
  functionSkillBonusText,
  functionSkillDamageEnemyAttack,
  handlingSkillButtons,
  buttonValue,
  setButtonValue,
  skillNumber,
  manaRegen,
  skill,
  setManaPlayer,
  manaPlayer,
  setHpPlayer,
  hpEnemy,
  hpPlayer,
  setHpEnemy,
  sleep,
  damageOverTime,
  playerStats,
  setPlayerStats,
}) => {
  const hero = useSelector((state) => state.hero);
  const casting = "rgba(199,162,4,0.9)";
  const duration = "rgba(199,4,4,0.9)";
  const cooldown = "rgba(85,85,85,0.9)";
  const [testValue, setTestValue] = useState(false);
  const [widthTest, setWidthTest] = useState(125);
  const [color, setColor] = useState(casting);
  // eslint-disable-next-line
  const [backgroundColor, setBackgroundColor] = useState(casting);
  const [timeBar, setTimeBar] = useState(0);
  let playerStatsTemporary;
  const [secondValue, setSecondValue] = useState(0);
  // eslint-disable-next-line
  const [firstSkill, setFirstSkill] = useState({
    castTime: skill.castTime - 1000,
    durationTime: skill.durationTime - 1000,
    recastTime: skill.recastTime - 1000,
  });
  const convertPXToVW = (px) => {
    return px * (100 / document.documentElement.clientWidth);
  };
  let progress = parseInt(widthTest / (skill.castTime / 1000));
  const [timeSkillBar, setTimeSkillBar] = useState(0);

  const showingDiv = () => {
    setTestValue(!testValue);
  };
  useEffect(() => {
    let tempWidth = document.documentElement.clientWidth * 0.934;
    setWidthTest((widthTest) => document.documentElement.clientWidth - tempWidth);
  });
  useEffect(() => {
    if (secondValue === 1) {
      setColor(duration);
      setBackgroundColor("");
      // eslint-disable-next-line
      progress = parseInt(widthTest / (skill.durationTime / 1000));
      setTimeSkillBar(
        setInterval(() => {
          setTimeBar((timeBar) => timeBar - progress);
        }, 1 * 1000)
      );
    }
    if (secondValue === 2) {
      setColor(cooldown);
      setBackgroundColor("");
      // eslint-disable-next-line
      progress = parseInt(widthTest / (skill.recastTime / 1000));
      setTimeSkillBar(
        setInterval(() => {
          setTimeBar((timeBar) => timeBar + progress);
        }, 1 * 1000)
      );
    }
  }, [secondValue]);

  useEffect(() => {
    if (testValue === true) {
      setTimeSkillBar(
        setInterval(() => {
          setTimeBar((timeBar) => timeBar + progress);
        }, 1 * 1000)
      );
    }
    // eslint-disable-next-line
  }, [testValue]);

  useEffect(() => {
    if ((timeBar === widthTest || timeBar >= widthTest) && secondValue === 0) {
      sleep(0).then(() => {
        clearInterval(timeSkillBar);

        if (skill.durationTime !== 0 && secondValue === 0) {
          setTimeBar(widthTest);
          setSecondValue(1);
        } else {
          setTimeBar(0);
          setSecondValue(2);
        }
      });
    }
    if (timeBar <= 0 && secondValue === 1) {
      sleep(0).then(() => {
        clearInterval(timeSkillBar);
        setTimeBar(0);
        if (skill.durationTime !== 0 && secondValue === 1) {
          setSecondValue(2);
        } else {
          setSecondValue(3);
        }
      });
    }
    if (timeBar >= widthTest && secondValue === 2) {
      sleep(0).then(() => {
        clearInterval(timeSkillBar);
        setTimeBar(0);
        showingDiv();
        setColor(casting);
        setBackgroundColor("");
        setSecondValue(0);
      });
    }
    if (timeBar >= widthTest && secondValue === 3) {
      sleep(0).then(() => {
        clearInterval(timeSkillBar);
        setTimeBar(0);
        showingDiv();
        setColor(casting);
        setBackgroundColor("");
        setSecondValue(0);
      });
    }
    // eslint-disable-next-line
  }, [timeBar]);

  let isSkillAssigned = skill.isSkillAssigned;
  let enoughMana;

  let skillImage = showingActiveImageSkill(hero.heroClass, skill.numberOfSkill);

  if (manaPlayer < skill.pointsOfMana) {
    enoughMana = false;
  } else {
    enoughMana = true;
  }

  const activatingSkill = async () => {
    setManaPlayer((manaPlayer) => manaPlayer - skill.pointsOfMana);
    if (manaPlayer === playerStats.manaPoints) {
      manaRegen();
    }
    clearInterval(timeSkillBar);
    showingDiv();

    switch (skill.typeOfSkill) {
      //attack
      case 0:
        handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
        let damage = Math.floor(
          Math.random() * (playerStats.maxAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill - playerStats.minAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill) +
            1 +
            playerStats.minAttack +
            playerStats.bonusToSpecialAttack * skill.valueOfSkill
        );

        let test;
        test = skill.recastTime;
        console.log(test);
        sleep(skill.castTime + 1000).then(() => {
          setHpEnemy((hpEnemy) => hpEnemy - damage);
          functionSkillDamageEnemyAttack(damage);

          sleep(skill.recastTime + 1000).then(() => {
            setButtonValue((buttonValue) => !buttonValue);
          });
          if (skill.countOfDots > 0) {
            sleep(2000).then(() => {
              damageOverTime(2000, skill.countOfDots, damage * skill.dotValue);
            });
          }
        });

        break;
      //bonus
      case 1:
        switch (skill.targetOfSkill) {
          case "dodge":
            let dodgeStatic = playerStats.chanceOnDodge;
            let increaseDodgeTemporary = dodgeStatic + skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% unik");
              playerStats.chanceOnDodge = increaseDodgeTemporary;
              setPlayerStats((playerStats) => (playerStats = playerStats));
              sleep(skill.durationTime + 1000).then(() => {
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% unik");
                playerStats.chanceOnDodge = dodgeStatic;
                setPlayerStats((playerStats) => (playerStats = playerStats));

                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "block":
            let blockStatic = playerStats.chanceOnBlock;
            let increaseBlockTemporary = blockStatic + skill.valueOfSkill;
            playerStatsTemporary = playerStats;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              playerStats.chanceOnBlock = increaseBlockTemporary;
              setPlayerStats((playerStats) => (playerStats = playerStats));
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% blok");
              sleep(skill.durationTime + 1000).then(() => {
                playerStats.chanceOnBlock = blockStatic;
                setPlayerStats((playerStats) => (playerStats = playerStats));
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% blok");
                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "crit":
            let critStatic = playerStats.chanceOnCritHit;
            let increaseCritTemporary = critStatic + skill.valueOfSkill;
            playerStatsTemporary = playerStats;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              playerStats.chanceOnCritHit = increaseCritTemporary;
              setPlayerStats((playerStats) => (playerStats = playerStats));
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% kryt");
              sleep(skill.durationTime + 1000).then(() => {
                playerStats.chanceOnCritHit = critStatic;
                setPlayerStats((playerStats) => (playerStats = playerStats));
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% kryt");
                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "defense":
            let defenseStatic = playerStats.defensePoints;
            let increaseDefenseTemporary = defenseStatic + skill.valueOfSkill;
            playerStatsTemporary = playerStats;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              playerStats.defensePoints = increaseDefenseTemporary;
              setPlayerStats((playerStats) => (playerStats = playerStats));
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% obrona");
              sleep(skill.durationTime + 1000).then(() => {
                playerStats.defensePoints = defenseStatic;
                setPlayerStats((playerStats) => (playerStats = playerStats));
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% obrona");
                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "attack":
            let minAttackStatic = playerStats.minAttack;
            let maxAttackStatic = playerStats.maxAttack;
            let increaseMinAttackTemporary = minAttackStatic + minAttackStatic * skill.valueOfSkill;
            let increaseMaxAttackTemporary = maxAttackStatic + maxAttackStatic * skill.valueOfSkill;
            playerStatsTemporary = playerStats;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              playerStats.minAttack = increaseMinAttackTemporary;
              playerStats.maxAttack = increaseMaxAttackTemporary;
              setPlayerStats((playerStats) => (playerStats = playerStats));
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% atak");
              sleep(skill.durationTime + 1000).then(() => {
                playerStats.minAttack = minAttackStatic;
                playerStats.maxAttack = maxAttackStatic;
                setPlayerStats((playerStats) => (playerStats = playerStats));
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% atak");
                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "healthPoints":
            let healthPointsStatic = playerStats.healthPoints;
            let increaseHealthPointsTemporary = healthPointsStatic * skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              setPlayerStats((playerStats) => ({ ...playerStats, healthPoints: healthPointsStatic + increaseHealthPointsTemporary }));
              setHpPlayer((hpPlayer) => hpPlayer + increaseHealthPointsTemporary);
              functionSkillBonusText("+ " + Math.floor(increaseHealthPointsTemporary) + " hp");
              sleep(skill.durationTime + 1000).then(() => {
                setPlayerStats((playerStats) => ({ ...playerStats, healthPoints: healthPointsStatic }));
                functionSkillBonusText("- " + Math.floor(increaseHealthPointsTemporary) + " hp");
                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "manaPoints":
            let manaPointsStatic = playerStats.manaPoints;
            let increaseManaPointsTemporary = manaPointsStatic * skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            sleep(skill.castTime + 1000).then(() => {
              setPlayerStats((playerStats) => ({ ...playerStats, manaPoints: manaPointsStatic + increaseManaPointsTemporary }));
              setManaPlayer((manaPlayer) => manaPlayer + increaseManaPointsTemporary);
              functionSkillBonusText("+ " + Math.floor(increaseManaPointsTemporary) + " mana");
              sleep(skill.durationTime + 1000).then(() => {
                setPlayerStats((playerStats) => ({ ...playerStats, manaPoints: manaPointsStatic }));
                functionSkillBonusText("- " + Math.floor(increaseManaPointsTemporary) + " mana");
                sleep(skill.recastTime + 1000).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          default:
            break;
        }
        break;
      //heal
      case 2:
        switch (skill.targetOfSkill) {
          case "restoreHealthPoints":
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            let valueOfHeal = Math.floor(Math.random() * (playerStats.maxAttack - playerStats.minAttack + 1) + playerStats.minAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill);
            sleep(skill.castTime + 1000).then(() => {
              setHpPlayer((hpPlayer) => hpPlayer + valueOfHeal);
              functionNormalPlayerHeal(valueOfHeal, 0);
              if (skill.countOfDots > 0) {
                sleep(2000).then(() => {
                  healOverTime(2000, skill.countOfDots, valueOfHeal * skill.dotValue);
                });
              }
              sleep(skill.recastTime + 1000).then(() => {
                setButtonValue((buttonValue) => !buttonValue);
              });
            });
            break;
          case "restoreManaPoints":
            handlingSkillButtons(numberOfSkill, skill.castTime + 1000);
            let valueOfMana = Math.floor(Math.random() * (playerStats.maxAttack - playerStats.minAttack + 1) + playerStats.minAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill);
            sleep(skill.castTime + 1000).then(() => {
              setManaPlayer((manaPlayer) => manaPlayer + valueOfMana);
              functionNormalPlayerHeal(valueOfMana, 1);
              sleep(skill.recastTime + 1000).then(() => {
                setButtonValue((buttonValue) => !buttonValue);
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
  };

  const showValueOfSkillFunction = (playerStats, skill) => {
    let value;

    switch (skill.typeOfSkill) {
      case 0:
        value =
          Math.floor(playerStats.minAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill) + " - " + Math.floor(playerStats.maxAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill);
        break;
      case 1:
        switch (skill.targetOfSkill) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            value = "+ " + skill.valueOfSkill * 100 + "%";
            break;
          case 6:
            value = "+ " + Math.floor(playerStats.healthPoints * skill.valueOfSkill) + " HP";
            break;
          case 7:
            value = "+ " + Math.floor(playerStats.manaPoints * skill.valueOfSkill) + " MP";
            break;
          default:
            break;
        }
        break;
      case 2:
        value =
          Math.floor(playerStats.minAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill) + " - " + Math.floor(playerStats.maxAttack + playerStats.bonusToSpecialAttack * skill.valueOfSkill);
        break;
      default:
        break;
    }
    return value;
  };
  return isSkillAssigned ? (
    <div className={`skill ${skillNumber}`}>
      {buttonValue && enoughMana ? (
        <button
          className="skillButton"
          onClick={() => {
            activatingSkill();
          }}
        >
          <img className="imageSkill" src={`/images/${skillImage}.png`} alt="" />
        </button>
      ) : (
        <button
          className="skillButton"
          disabled
          onClick={() => {
            activatingSkill();
          }}
        >
          <img className="imageSkill" alt="" src={`/images/${skillImage}.png`} />{" "}
        </button>
      )}

      {skill.typeOfSkill === 0 || skill.typeOfSkill === 2 ? (
        <div className="skillTooltip">
          <p className={"nameSkill"}>{skill.nameOfSkill}</p>
          <p className={"costtool"}>
            Koszt many: <span className={"pcosttool"}>{skill.pointsOfMana}</span>
          </p>
          <p className={"costtool"}>
            Czas rzucania: <span className={"pcosttool"}>{convertingStaticTime(skill.castTime)}</span>
          </p>
          <p className={"costtool"}>
            Czas ponownego użycia: <span className={"pcosttool"}>{convertingStaticTime(skill.recastTime)}</span>
          </p>
          <p className={"worftool"}>
            wartość umiejetnosci: <span className={"pworftool"}>{showValueOfSkillFunction(playerStats, skill)}</span>
          </p>
        </div>
      ) : (
        <div className="skillTooltip">
          <p className={"nameSkill"}>{skill.nameOfSkill}</p>
          <p className={"costtool"}>
            Koszt many: <span className={"pcosttool"}>{skill.pointsOfMana}</span>
          </p>
          <p className={"costtool"}>
            Czas rzucania: <span className={"pcosttool"}>{convertingStaticTime(skill.castTime)}</span>
          </p>
          <p className={"costtool"}>
            Czas trwania: <span className={"pcosttool"}>{convertingStaticTime(skill.durationTime)}</span>
          </p>
          <p className={"costtool"}>
            Czas ponownego użycia: <span className={"pcosttool"}>{convertingStaticTime(skill.recastTime)}</span>
          </p>
        </div>
      )}
      {testValue ? (
        <div className={`showingTime bar${skillNumber}`}>
          <div className={`progress-div p${skillNumber}`} style={{ width: `${convertPXToVW(widthTest)}vw` }}>
            <div style={{ width: `${convertPXToVW(timeBar)}vw`, backgroundColor: color }} className="progress" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div className={`skill ${skillNumber}`}></div>
  );
};

export default SkillHandling;
