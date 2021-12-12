import React from 'react';
import { useSelector } from 'react-redux';
import summaryStatsFromItems from '../../../../../functions/summaryStatsFromItems';
import sumMainStatsBonus from '../../../../../functions/sumMainStatsBonus';



const CharacterStatistic = ({value,handleSubmit,typeOfStat,id}) => {
    const hero = useSelector(state => state.hero);
    const itemInUse = useSelector(state => state.itemInUse);
    const skills = useSelector(state => state.skills);
    const stats = useSelector(state => state.stats);
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
            descriptionOfStat= 'Siła jest główną statystyką zadająca obrażenia przez Wojowników i Berserków. Zwieksza szansę na blok i cios.';
            id="sila";
            break;
        case 2:
                valueToSum = 2;
                  nameOfStat = 'Zręczność';
            descriptionOfStat = 'Zręczność jest główną statystyką zadająca obrażenia przez Łuczników. Zwieksza szansę na unik i cios.';
            id="zrecznosc";
            break;
        case 3:
                valueToSum = 3;
               nameOfStat = 'Inteligencja';
            descriptionOfStat= 'Inteligencja jest główną statystyką zadająca obrażenia przez Magów i Kapłanów. Zwieksza maksymalną ilość punktów many.';
            id="inteligencja";
            break;
        case 4:
                valueToSum = 4;
               nameOfStat = 'Wytrzymałość';
            descriptionOfStat= 'Zwiększa maksymalną ilość punktów życia.';
            id="wytrzymalosc";
            break;
        case 5:
                valueToSum = 5;
               nameOfStat = 'Szczęście';
            descriptionOfStat= 'Szczeście polepsza wszystkie statystyki w szczególności szansę na cios krytyczny.';
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
                <div className="innerStat" id={id}>
                    {value + summaryStatsFromItems(itemInUse, valueToSum) +sumMainStatsBonus(hero,valueToSum,stats,skills.passive)}
                    <div className="tooltip" id={id}>
                        <p style={{fontSize:'28px'}}>Suma uzyskanych punktów</p>
                        <p>Bazowe punkty: {value}</p>
                        <p>Przedmioty: {summaryStatsFromItems(itemInUse, valueToSum)}</p>
                        <p>Umiejętności pasywne: {sumMainStatsBonus(hero,valueToSum,stats,skills.passive)}</p>
                    </div>
                </div>
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