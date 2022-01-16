import React from 'react'

const GroupViewPopup = ({ room, showPopup, valueOfPopup }) => {
    let styleColorText;
    let text;
    let text2;
    switch (room.dungeonDifficult) {
        case "easy":
            styleColorText = "easy";
            text = "łatwy";
            text2 = "Szansa na przedmiot: 5%";
            break;
        case "medium":
            styleColorText = "medium";
            text = "średni";
            text2 = "Szansa na przedmiot: 10%";
            break;
        case "hard":
            styleColorText = "hard";
            text = "trudny";
            text2 = "Szansa na przedmiot: 15%";
            break;
        default:
            styleColorText = "hard";
            text = "trudny";
            text2 = "Szansa na przedmiot: 15%";
            break;
    }
    return (valueOfPopup) ? (
        <div className="popup-groupViewPopup">
            <div className="groupViewPopup-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                <div className='title'>{room.dungeonTitle}</div>
                <div className='description'>{room.dungeonDescription}</div>
                <div className="difficult"> Poziom trudności:</div>
                <div className="level"> <span className={`${styleColorText}`}>{text}</span></div>
                <div className='expPoints'>Doświadczenie</div>
                <div className='expPointsValue'>{room.dungeonRewardExp} XP</div>
                <div className='money'>Waluta</div>
                <div className='moneyValue'>{room.dungeonRewardGold} Złota</div>
                 <div className='itemBox'><div className='item'>{text2}</div></div>
            </div>
         </div>
       
     ) : "";

}

export default GroupViewPopup;
