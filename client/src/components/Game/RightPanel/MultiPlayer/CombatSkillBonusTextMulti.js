import React from "react";

const CombatSkillBonusTextMulti = ({ value, id }) => {
  let check;
  if (value === 0) {
    check = false;
  } else {
    check = true;
  }
  let text = value;
  let colorOfText = "#672480";

  return (
    <div className="multiCombatDivPlayerSkillBonus">
      {check ? (
        <div key={id} style={{ color: colorOfText }} className={`skillBonus`}>
          {" "}
          {text}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CombatSkillBonusTextMulti;
