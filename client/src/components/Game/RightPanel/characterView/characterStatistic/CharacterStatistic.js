import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const CharacterStatistic = ({value,handleSubmit,typeOfStat}) => {
    const hero = useSelector(state => state.hero);
    let possibility;
    let nameOfStat;
    let descriptionOfStat;
    
    if (hero.gold < value) {
        possibility = false;    
    } else {
        possibility = true;
    }

    switch (typeOfStat) {
        case 1:
            nameOfStat = 'Siła';
            descriptionOfStat= 'Siła jest główną statystyką dla obrażeń fizycznych.Zwiększa również obronę.';
            break;
        case 2:
                  nameOfStat = 'Zręczność';
            descriptionOfStat = 'Zręczność jest główną statystyką dla wyprowadzenia uników.';
            //w,bloków szans na trafienie oraz krytyczne.
            break;
        case 3:
               nameOfStat = 'Inteligencja';
            descriptionOfStat= 'Jest główną mocą na wyprowadzanie ataków magicznych ,mocy leczniczej oraz punktów many.';
            break;
        case 4:
               nameOfStat = 'Wytrzymałość';
            descriptionOfStat= 'Zwiększa maksymalną ilość punktów życia jak i obronę.';
            break;
        case 5:
               nameOfStat = 'Szczęście';
            descriptionOfStat= 'Mentalność zwiększa wszystkie wartości w szczególności cios krytyczny.';
            break;
        default:
            break;
    }
              

    

    
    return (<>
        <div className='stat'>             
            <div className='nameBox'>
                <div className="name">
                    <h2 >{nameOfStat}</h2>
                    <div className="tooltip">
                        <h3>{descriptionOfStat}</h3>
                    </div>
                </div>
             </div>
            <div className='statValue'>
                {value}
            </div>
            <div className='statButton'>
                {possibility ? ( <button className='statisticButton' type="button" onClick={() => handleSubmit(typeOfStat, value)}>
                        Dodaj
                        <div className="tooltipStatButt">
                                <h4>Koszt: {value}</h4>
                            </div>
                    </button>
                ) : (
                    <button className='statisticButton' disabled type="button" onClick={() => handleSubmit(typeOfStat, value)}>
                        Dodaj
                        <div className="tooltipStatButt">
                                <h4>Brak środków</h4>
                            </div>
                    </button>
                )}
            </div>
        </div>
        
        </>
    );
};

export default CharacterStatistic;