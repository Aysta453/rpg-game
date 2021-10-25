
import React from 'react'

const SingleGamePopupLose = ({ valueOfPopup, setButtons, setWindowOfElements,changePopup }) => {
    
       const handleSubmit = () => {
           setButtons();
           changePopup(0);
        setWindowOfElements(1);
    }
      
    return (valueOfPopup) ? (
        <div className="popup-lose">
            <div className="lose-inner">
                <div className="title">Przegrałes lamusie</div>
                <div className="description"></div>
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
