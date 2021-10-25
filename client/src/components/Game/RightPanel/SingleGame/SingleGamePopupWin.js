
import React from 'react'

const SingleGamePopupWin = ({valueOfPopup,setButtons, setWindowOfElements,changePopup}) => {

    
    const handleSubmit = () => {
        setButtons();
        changePopup(1);
        setWindowOfElements(1);
    }

    return (valueOfPopup) ? (  
        <div className="popup-win">
            <div className="win-inner">
                <div className="title">
                    Wygrales msitrzuuuuuuuu
                </div>
                <div className="description"></div>
                <div className="rewards">
                    <div className="title"></div>
                    <div className="money"></div>
                    <div className="expoints"></div>
                    <div className="itemBox">
                        <div className="item"></div>
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
