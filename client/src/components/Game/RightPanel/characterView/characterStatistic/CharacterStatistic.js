import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import summaryStatsFromItems from '../../../../../functions/summaryStatsFromItems';



const CharacterStatistic = ({value,handleSubmit,typeOfStat,id}) => {
    const hero = useSelector(state => state.hero);
    const itemInUse = useSelector(state => state.itemInUse);
    let possibility;
    let nameOfStat;
    let descriptionOfStat;
    let valueToSum;
    
    if (hero.gold < value) {
        possibility = false;    
    } else {
        possibility = true;
    }

    switch (typeOfStat) {
        case 1:
            valueToSum = 1;
            nameOfStat = 'Siła';
            descriptionOfStat= 'Siła jest główną statystyką dla obrażeń fizycznych. Zwiększa również obronę.';
            id="sila";
            break;
        case 2:
                valueToSum = 2;
                  nameOfStat = 'Zręczność';
            descriptionOfStat = 'Zręczność jest główną statystyką dla wyprowadzenia uników.';
            id="zrecznosc";
            break;
        case 3:
                valueToSum = 3;
               nameOfStat = 'Inteligencja';
            descriptionOfStat= 'Jest główną mocą na wyprowadzanie ataków magicznych, mocy leczniczej oraz punktów many.';
            id="inteligencja";
            break;
        case 4:
                valueToSum = 4;
               nameOfStat = 'Wytrzymałość';
            descriptionOfStat= 'Zwiększa maksymalną ilość punktów życia jak i obronę.';
            id="wytrzymalosc";
            break;
        case 5:
                valueToSum = 5;
               nameOfStat = 'Szczęście';
            descriptionOfStat= 'Szczeście zwiększa wszystkie statystyki oprócz obrony.';
            id="szczescie";
            break;
        default:
            break;
    }
              

    

    
    return (<>
        <div className='stat'>             
            <div className='nameBox'>
                <div className="name" id={id}>
                   {nameOfStat}
                    <div className="tooltip" id={id}>
                        {descriptionOfStat}
                    </div>
                </div>
             </div>
            <div className='statValue' id={id}>
                {value +summaryStatsFromItems(itemInUse,valueToSum)}
            </div>
            <div className='statButton' >
                {possibility ? ( <button className='statisticButton' type="button"  onClick={() => handleSubmit(typeOfStat, value)}>
                        Dodaj
                        <div className="tooltipStatButt" >
                                Koszt: {value}
                            </div>
                    </button>
                ) : (
                    <button className='statisticButton' disabled type="button" onClick={() => handleSubmit(typeOfStat, value)}>
                        Dodaj
                        <div className="tooltipStatButt">
                                Brak środków
                            </div>
                    </button>
                )}
            </div>
        </div>
        
        </>
    );
};

export default CharacterStatistic;