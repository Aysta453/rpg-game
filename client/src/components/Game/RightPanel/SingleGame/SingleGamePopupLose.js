
import React from 'react'
import { useSelector } from 'react-redux';

const SingleGamePopupLose = ({ valueOfPopup, setButtons, setWindowOfElements, changePopup }) => {
    const game = useSelector(state => state.game);
    
       const handleSubmit = () => {
           setButtons();
           changePopup(0);
        setWindowOfElements(1);
    }
      
    return (valueOfPopup) ? (
        <div className="popup-lose">
            <div className="lose-inner">
                <div className="title">Porażka</div>
                <div className="description">
                    <p>Zostałeś sromotnie pokonany w trakcie wykonywania misji <span className="gold"> {game.missionTitle} </span> przez potwora <span className="gold"> {game.monster.monsterName}</span>.</p>
                    <p>Wyostrz umysł, pomyśl nad strategią i spróbuj jeszcze raz!</p>
                    <p>Powodzenia bohaterze!</p>
                </div>
                <div className="submitButtonBox">
                    <button onClick={() => {
                    handleSubmit();
                    }}>Zakończ</button>
                </div>
            </div>
        </div>
    ): ("");
}

export default SingleGamePopupLose;
