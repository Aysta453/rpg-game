import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CharStatExtended = () => {
    const playerGame = useSelector(state => state.playerGame);
    console.log(playerGame);
    return (<>
          <div className='statsExtended'>
              <div className='statExtended'>
                   <div className="nameOfStat">Punkty życia</div>
                <div className="valueOfStat">{playerGame.healthPoints}</div>
               </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Punkty many</div>
                   <div className="valueOfStat">{playerGame.manaPoints}</div>
              </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Regeneracja życia</div>
                   <div className="valueOfStat">{playerGame.regHp}/s</div>
               </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Regeneracja many</div>
                   <div className="valueOfStat">{playerGame.regMp}/s</div>
              </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Obrona</div>
                   <div className="valueOfStat">{playerGame.defensePoints}</div>
               </div>
              <div className='statExtended'>
                   <div className="nameOfStat">Atak</div>
                   <div className="valueOfStat">{playerGame.minAttack} - {playerGame.maxAttack}</div>
               </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Szansa na blok</div>
                   <div className="valueOfStat">{Math.round(playerGame.chanceOnBlock * 100) / 100} % </div>
               </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Szansa na unik</div>
                   <div className="valueOfStat">{Math.round(playerGame.chanceOnDodge * 100) / 100} %</div>
              </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Szansa na cios</div>
                   <div className="valueOfStat">{Math.round(playerGame.chanceOnHit * 100) / 100} %</div>
               </div>
               <div className='statExtended'>
                   <div className="nameOfStat">Szansa na cios krytyczny</div>
                   <div className="valueOfStat">{  Math.round(playerGame.chanceOnCritHit * 100) / 100} % </div>
            </div>
              <div className='statExtended2'>
                   <div className="nameOfStat">Bonus do umiejętności specjalnych</div>
                   <div className="valueOfStat">{playerGame.bonusToSpecialAttack}</div>
              </div>
          </div>
        </>
    );
};

export default CharStatExtended;