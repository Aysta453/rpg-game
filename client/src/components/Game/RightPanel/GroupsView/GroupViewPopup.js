import React from 'react'

const GroupViewPopup = ({showPopup,valueOfPopup}) => {
    return (valueOfPopup) ? (
        <div className="popup-groupViewPopup">
            <div className="groupViewPopup-inner">
                <button className="close-btn" onClick={() => { showPopup() }}>X</button>
                    <div className='title'>Szmaragdowa Wieża</div>
                    <div className='description'>W Mrocznym lesie grasuje Zielony Ork napadający na przechodzących kupców i wieśniaków. Starszy wioski wyznaczył za niego sowitą nagrodę. Wyrusz w podróż do Mrocznego Lasu i zabij tę bestię!</div>
                    <div className="difficult"> Poziom trudności:</div>
                    <div className="level"> <span>poziom trudnosci</span></div>
                    <div className='expPoints'>Doświadczenie</div>
                    <div className='expPointsValue'>1 XP</div>
                    <div className='money'>Waluta</div>
                    <div className='moneyValue'>1 Złota</div>
            </div>
         </div>
       
     ) : "";

}

export default GroupViewPopup;
