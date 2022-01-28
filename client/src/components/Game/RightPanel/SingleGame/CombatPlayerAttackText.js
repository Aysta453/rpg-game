import React from "react";

const CombatPlayerAttackText = ({ value, id, type }) => {
  let check;
  if (value === 0 && (type === 1 || type === 0)) {
    check = false;
  } else {
    check = true;
  }

  let text;
  let colorOfText;

  switch (type) {
    //crit attack
    case 0:
      text = "- " + value;
      colorOfText = "#D61801";
      break;
    //normal attack
    case 1:
      text = "- " + value;
      colorOfText = "white";
      break;
    //block
    case 2:
      text = "- " + value;
      colorOfText = "#F9A03F";
      break;
    //miss
    case 3:
      text = "unik";
      colorOfText = "#D8CC34";
      break;
    //reduction by armor
    case 4:
      text = "redukcja";
      colorOfText = "#CEB5A7";
      break;
    default:
      break;
  }

  return (
    <div className="singleCombatDivPlayerAttack">
      {check ? (
        <div key={id} style={{ color: colorOfText }} className={`combatTextNormal`}>
          {" "}
          {text}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CombatPlayerAttackText;
