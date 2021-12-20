import React from 'react';

const DungeonView = () => {
    let styleColorText = 'hard';
    return(<>
        <div className='dungeonView'>
            <div className='title'>Tytuł Wyprawy</div>
            <div className='description'>Wyprawa będzie wymagała poświeceń. Będziesz musiał wybrać między dobrem, a złem.</div>
            <div className="difficult"> Poziom trudności:</div>
            <div className="level"> <span className={`${styleColorText}`}>trudny</span></div>
            <div className='expPoints'>Doświadczenie</div>
            <div className='expPointsValue'> XP</div>
            <div className='money'>Waluta</div>
            <div className='moneyValue'>1 Złota</div>
            <div className='time'>Czas Podróży</div>
            <div className='timeValue'> bla</div>
            <div className='dungeonButtons'>
                <div className='optionInvite'>Stwórz pokój</div>         
            </div>
            </div>
        </>
    );
};

export default DungeonView;