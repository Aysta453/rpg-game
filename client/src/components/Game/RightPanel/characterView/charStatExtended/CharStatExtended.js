import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import extendedstatsfunction from '../../../../../functions/extendedstatsfunction';

const CharStatExtended = ({ stats, type }) => {
    const itemInUse = useSelector(state => state.itemInUse);
    const hero = useSelector(state => state.hero);
   
     let points;
     let name;

      points = extendedstatsfunction(hero,  itemInUse , stats , type );

     switch (type) {
          case 1:
               name ='Punkty życia';
               break;
          case 2:
               name ='Punty many';
               break;
          case 3:
               name ='Obrażenia wręcz';
               break;
          case 4:
               name ='Obrażenia magiczne';
               break;
          case 5:
               name ='Moc lecznica';
               break;
          case 6:
               name ='Obrona';
               break;
          case 7:
               name ='Szansa na unik';
               break;
          case 8:
               name ='Szansa na blok';
               break;
          case 9:
               name ='Szansa na cios krytyczny';
               break;
          case 10:
               name ='Szansa na trafienie';
               break;
     }
  
    return (<>
            <div className='statExtended'>
              <div className='statName'><h3>{name}</h3></div>
              <div className='statValue'><h3>{type>=7 && type <= 10? points + " %" : points }</h3></div>
            </div>
        </>
    );
};

export default CharStatExtended;