
import React from 'react'
import { useSelector } from 'react-redux';
import showingEquipmentImage from '../../../../functions/showingEquipmentImage';

const SingleGamePopupWin = ({valueOfPopup,setButtons, setWindowOfElements,changePopup}) => {
    const game = useSelector(state => state.game);
    const hero = useSelector(state => state.hero);
    
    const handleSubmit = () => {
        setButtons();
        changePopup(1);
        setWindowOfElements(1);
    }

    let isItemAsReward = game.item.isEmpty;


    let image;
    if (isItemAsReward == false) {
         image = showingEquipmentImage(hero.heroClass, game.item.typeOfItem, 1, game.item.numberOfItem);
    }
    
    return (valueOfPopup) ? (  
        <div className="popup-win">
            <div className="win-inner">
                <div className="title">
                     Zwycięstwo!
                   
                </div>
                <div className="description">
                    <p> Odniosłeś zwycięstwo w trakcie wykonywania misji {game.missionTitle} pokonując potężnego potwora {game.monster.monsterName}.</p>
                    <p> Jednak nie spoczywaj na laurach, to jest dopiero początek Twojej wielkiej przygody.</p>
                    
                </div>
                <div className="rewards">
                    <div className="title">Wynagrodzenie:</div>
                    <div className="money">
                    Złoto : {game.missionRewardGold}
                    </div>
                    <div className="expoints">
                    Punkty doświadczenia : {game.missionRewardExp}
                    </div>
                    <div className="itemBox">
                    {isItemAsReward ? (<div className="item"></div>) :
                    (
                        <div className="item">
                              <img className="imageSkill" src={`/images/eq${image}.png`}/>
                        </div>
                    )
                }
                    </div>
                </div>
                <div className="submitButtonBox">
                    <button onClick={() => {
                        handleSubmit();
                    }}>Zakończ</button>
                </div>
            </div>
        </div>
     ) : ("");
  
}
export default SingleGamePopupWin;
