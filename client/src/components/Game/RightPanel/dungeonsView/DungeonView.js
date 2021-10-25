import React from 'react';

const DungeonView=()=>{
    return(<>
        <div className='dungeonView'>
            <div className='dungeonTitle'><h2>Tytuł Wyprawy</h2></div>
            <div className='dungeonDescription'><h3>Wyprawa będzie wymagała poświeceń. Będizesz musiał wybrać między dobrem a złem.</h3></div>
            <div className='dungeonTime'>Czas Podróźy</div>
            <div className='dungeonTimeValue'>Wartość</div>
            <div className='dungeonRewards'>Nagrody</div>
            <div className='dungeonRewardsPoints'>Doświadczenie</div>
            <div className='dungeonRewardsPointsValue'>Wartość</div>
            <div className='dungeonRewardsMoney'>Waluta</div>
            <div className='dungeonRewardsMoneyValue'>Wartość</div>
            <div className='dungeonRewardsItem'>Przedmiot(Opcjonalnie)</div>
            <div className='dungeonRewardsItemValue'>
               <div className='dungeonRewardsItemValue1'>ss</div>
            </div>
            <div className='dungeonOptions'>
                <div className='dungeonOptionInvite'>Zaproś</div>
                <div className='dungeonOptionJoin'>Dołącz</div>
                
            </div>
            
            </div>
        </>
    );
};

export default DungeonView;