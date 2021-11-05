import React from 'react';

const DungeonView=()=>{
    return(<>
        <div className='dungeonView'>
            <div className='dungeonTitle'>Tytuł Wyprawy</div>
            <div className='dungeonDescription'>Wyprawa będzie wymagała poświeceń. Będziesz musiał wybrać między dobrem, a złem.</div>

            <div className='dungeonRewardsPoints'>Doświadczenie</div>
            <div className='dungeonRewardsPointsValue'>Wartość</div>
            <div className='dungeonRewardsMoney'>Waluta</div>
            <div className='dungeonRewardsMoneyValue'>Wartość</div>
            <div className='dungeonTime'>Czas Podróźy</div>
            <div className='dungeonTimeValue'>Wartość</div>
            <div className='dungeonRewardsItem'>Przedmiot</div>
            <div className='dungeonRewardsItemValue'>
               <div className='dungeonRewardsItemValue1'> ¯\_(ツ)_/¯</div>
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