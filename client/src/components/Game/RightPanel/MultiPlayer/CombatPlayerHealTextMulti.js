import React from "react";

const CombatPlayerHealTextMulti = ({ value, id, type }) => {
  let check;
  if (value === 0 && (type === 1 || type === 0)) {
    check = false;
  } else {
    check = true;
  }

  let text;
  let colorOfText;

  switch (type) {
    //heal regen
    case 0:
      text = "+ " + value + "HP";
      colorOfText = "#00FF64";
      break;
    //mana regen
    case 1:
      text = "+ " + value + "MP";
      colorOfText = "#4BD6FF";
      break;
    //block
    default:
      break;
  }

  return (
    <div className="combatDivPlayerSkillRestore">
      {check ? (
        <div key={id} style={{ color: colorOfText }} className={`skillRestore`}>
          {" "}
          {text}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CombatPlayerHealTextMulti;
