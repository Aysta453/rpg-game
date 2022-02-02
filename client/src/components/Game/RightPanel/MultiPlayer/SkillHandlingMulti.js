import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import convertingStaticTime from "../../../../functions/convertingStaticTime.js";

import showingActiveImageSkill from "../../../../functions/showingActiveImageSkill.js";
const SkillHandlingMulti = ({
  intervalEnemyDamage,
  intervalPlayerDamage,
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

  memberPartyId,
  socket,
  afkMode,
}) => {
  const hero = useSelector((state) => state.hero);
  const casting = "rgba(199,162,4,0.9)";
  const duration = "rgba(199,4,4,0.9)";
  const cooldown = "rgba(85,85,85,0.9)";
  const [testValue, setTestValue] = useState(false);
  const rooms = useSelector((state) => state.rooms);
  let width = 120;

  const [color, setColor] = useState(casting);
  // eslint-disable-next-line
  const [backgroundColor, setBackgroundColor] = useState(casting);
  const [timeBar, setTimeBar] = useState(0);

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
  let progress = parseInt(width / (firstSkill.castTime / 1000));
  const [timeSkillBar, setTimeSkillBar] = useState(0);

  const showingDiv = () => {
    setTestValue(!testValue);
  };
  useEffect(() => {
    if (secondValue === 1) {
      setColor(duration);
      setBackgroundColor("");
      // eslint-disable-next-line
      progress = parseInt(width / (firstSkill.durationTime / 1000));
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
      progress = parseInt(width / ((skill.recastTime - 2000) / 1000));
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
    if (timeBar === width && secondValue === 0) {
      sleep(1000).then(() => {
        clearInterval(timeSkillBar);

        if (skill.durationTime !== 0 && secondValue === 0) {
          setTimeBar(width);
          setSecondValue(1);
        } else {
          setTimeBar(0);
          setSecondValue(2);
        }
      });
    }
    if (timeBar <= 0 && secondValue === 1) {
      sleep(500).then(() => {
        clearInterval(timeSkillBar);
        setTimeBar(0);
        if (skill.durationTime !== 0 && secondValue === 1) {
          setSecondValue(2);
        } else {
          setSecondValue(3);
        }
      });
    }
    if (timeBar >= width && secondValue === 2) {
      sleep(500).then(() => {
        clearInterval(timeSkillBar);
        setTimeBar(0);
        showingDiv();
        setColor(casting);
        setBackgroundColor("");
        setSecondValue(0);
      });
    }
    if (timeBar >= width && secondValue === 3) {
      sleep(1000).then(() => {
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

  if (rooms.players[memberPartyId].heroPower.currentManaPoints < skill.pointsOfMana) {
    enoughMana = false;
  } else {
    enoughMana = true;
  }

  const activatingSkill = async () => {
    socket.emit("decreaseMana", rooms.roomName, memberPartyId, skill.pointsOfMana);
    if (rooms.players[memberPartyId].heroPower.currentManaPoints === rooms.players[memberPartyId].heroPower.manaPoints) {
      manaRegen();
    }
    clearInterval(timeSkillBar);
    showingDiv();

    switch (skill.typeOfSkill) {
      //attack
      case 0:
        handlingSkillButtons(numberOfSkill, skill.castTime);
        let damage = Math.floor(
          Math.random() *
            (rooms.players[memberPartyId].heroPower.maxAttack +
              rooms.players[memberPartyId].heroPower.bonusToSpecialAttack * skill.valueOfSkill -
              rooms.players[memberPartyId].heroPower.minAttack +
              rooms.players[memberPartyId].heroPower.bonusToSpecialAttack * skill.valueOfSkill) +
            1 +
            rooms.players[memberPartyId].heroPower.minAttack +
            rooms.players[memberPartyId].heroPower.bonusToSpecialAttack * skill.valueOfSkill
        );
        setTimeout(() => {
          socket.emit("dechp", damage, rooms.roomName);
          functionSkillDamageEnemyAttack(damage);
        }, 1 * skill.castTime);

        sleep(skill.recastTime).then(() => {
          setButtonValue((buttonValue) => !buttonValue);
        });

        if (skill.countOfDots > 0) {
          sleep(2000).then(() => {
            damageOverTime(2000, skill.countOfDots, damage * skill.dotValue);
          });
        }
        break;
      //bonus
      case 1:
        switch (skill.targetOfSkill) {
          case "dodge":
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% unik");
              socket.emit("changeStats", rooms.roomName, memberPartyId, 1, 1, skill.valueOfSkill);
              sleep(skill.durationTime).then(() => {
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% unik");
                socket.emit("changeStats", rooms.roomName, memberPartyId, 1, 2, skill.valueOfSkill);

                sleep(skill.recastTime).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "block":
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% blok");
              socket.emit("changeStats", rooms.roomName, memberPartyId, 2, 1, skill.valueOfSkill);
              sleep(skill.durationTime).then(() => {
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% blok");
                socket.emit("changeStats", rooms.roomName, memberPartyId, 2, 2, skill.valueOfSkill);
                sleep(skill.recastTime).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "crit":
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% kryt");
              socket.emit("changeStats", rooms.roomName, memberPartyId, 3, 1, skill.valueOfSkill);
              sleep(skill.durationTime).then(() => {
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% kryt");
                socket.emit("changeStats", rooms.roomName, memberPartyId, 3, 2, skill.valueOfSkill);
                sleep(skill.recastTime).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "defense":
            let defensePointsStatic = rooms.players[memberPartyId].heroPower.defensePoints;
            let increaseDefensePointsTemporary = defensePointsStatic * skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% obrona");
              socket.emit("changeStats", rooms.roomName, memberPartyId, 4, 1, increaseDefensePointsTemporary);
              sleep(skill.durationTime).then(() => {
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% obrona");
                socket.emit("changeStats", rooms.roomName, memberPartyId, 4, 2, increaseDefensePointsTemporary);
                sleep(skill.recastTime).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "attack":
            let minAttackStatic = rooms.players[memberPartyId].heroPower.minAttack * skill.valueOfSkill;
            let maxAttackStatic = rooms.players[memberPartyId].heroPower.maxAttack * skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              functionSkillBonusText("+ " + 100 * skill.valueOfSkill + "% atak");
              socket.emit("changeStatsAttack", rooms.roomName, memberPartyId, 1, minAttackStatic, maxAttackStatic);
              sleep(skill.durationTime).then(() => {
                functionSkillBonusText("- " + 100 * skill.valueOfSkill + "% atak");
                socket.emit("changeStatsAttack", rooms.roomName, memberPartyId, 2, minAttackStatic, maxAttackStatic);
                sleep(skill.recastTime).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "healthPoints":
            let healthPointsStatic = rooms.players[memberPartyId].heroPower.healthPoints;
            let increaseHealthPointsTemporary = healthPointsStatic * skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              socket.emit("changeStats", rooms.roomName, memberPartyId, 5, 1, increaseHealthPointsTemporary);
              functionSkillBonusText("+ " + Math.floor(increaseHealthPointsTemporary) + " hp");
              sleep(skill.durationTime).then(() => {
                socket.emit("changeStats", rooms.roomName, memberPartyId, 5, 2, increaseHealthPointsTemporary);
                functionSkillBonusText("- " + Math.floor(increaseHealthPointsTemporary) + " hp");
                sleep(skill.recastTime).then(() => {
                  setButtonValue((buttonValue) => !buttonValue);
                });
              });
            });
            break;
          case "manaPoints":
            let manaPointsStatic = rooms.players[memberPartyId].heroPower.manaPoints;
            let increaseManaPointsTemporary = manaPointsStatic * skill.valueOfSkill;
            handlingSkillButtons(numberOfSkill, skill.castTime);
            sleep(skill.castTime).then(() => {
              functionSkillBonusText("+ " + Math.floor(increaseManaPointsTemporary) + " mana");
              socket.emit("changeStats", rooms.roomName, memberPartyId, 6, 1, increaseManaPointsTemporary);
              sleep(skill.durationTime).then(() => {
                functionSkillBonusText("- " + Math.floor(increaseManaPointsTemporary) + " mana");
                socket.emit("changeStats", rooms.roomName, memberPartyId, 6, 2, increaseManaPointsTemporary);
                sleep(skill.recastTime).then(() => {
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
            handlingSkillButtons(numberOfSkill, skill.castTime);
            let valueOfHeal = Math.floor(
              Math.random() * (rooms.players[memberPartyId].heroPower.maxAttack - rooms.players[memberPartyId].heroPower.minAttack + 1) +
                rooms.players[memberPartyId].heroPower.minAttack +
                rooms.players[memberPartyId].heroPower.bonusToSpecialAttack * skill.valueOfSkill
            );
            sleep(skill.castTime).then(() => {
              socket.emit("increaseHealth", rooms.roomName, memberPartyId, valueOfHeal);
              functionNormalPlayerHeal(valueOfHeal, 0);
              if (skill.countOfDots > 0) {
                sleep(2000).then(() => {
                  healOverTime(2000, skill.countOfDots, valueOfHeal * skill.dotValue);
                });
              }
              sleep(skill.recastTime).then(() => {
                setButtonValue((buttonValue) => !buttonValue);
              });
            });
            break;
          case "restoreManaPoints":
            handlingSkillButtons(numberOfSkill, skill.castTime);
            let valueOfMana = Math.floor(
              Math.random() * (rooms.players[memberPartyId].heroPower.maxAttack - rooms.players[memberPartyId].heroPower.minAttack + 1) +
                rooms.players[memberPartyId].heroPower.minAttack +
                rooms.players[memberPartyId].heroPower.bonusToSpecialAttack * skill.valueOfSkill
            );
            sleep(skill.castTime).then(() => {
              socket.emit("increaseMana", rooms.roomName, memberPartyId, valueOfMana);
              functionNormalPlayerHeal(valueOfMana, 1);
              sleep(skill.recastTime).then(() => {
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

  const showValueOfSkillFunction = (playerStat, skill) => {
    let value;

    switch (skill.typeOfSkill) {
      case 0:
        value =
          Math.floor(playerStat.minAttack + playerStat.bonusToSpecialAttack * skill.valueOfSkill) + " - " + Math.floor(playerStat.maxAttack + playerStat.bonusToSpecialAttack * skill.valueOfSkill);
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
            value = "+ " + Math.floor(playerStat.healthPoints * skill.valueOfSkill) + " HP";
            break;
          case 7:
            value = "+ " + Math.floor(playerStat.manaPoints * skill.valueOfSkill) + " MP";
            break;
          default:
            break;
        }
        break;
      case 2:
        value =
          Math.floor(playerStat.minAttack + playerStat.bonusToSpecialAttack * skill.valueOfSkill) + " - " + Math.floor(playerStat.maxAttack + playerStat.bonusToSpecialAttack * skill.valueOfSkill);
        break;
      default:
        break;
    }
    return value;
  };
  return isSkillAssigned ? (
    <div className={`skill ${skillNumber}`}>
      {buttonValue && enoughMana && !afkMode ? (
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
            wartość umiejetnosci: <span className={"pworftool"}>{showValueOfSkillFunction(rooms.players[memberPartyId].heroPower, skill)}</span>
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
          <div className={`progress-div p${skillNumber}`} style={{ width: `${convertPXToVW(width)}vw` }}>
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

export default SkillHandlingMulti;
