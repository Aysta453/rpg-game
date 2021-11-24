import React from 'react'

const AuthPopup = ({valueOfPopup,handleError,error}) => {
 return (valueOfPopup) ? (
         <div className="popup-error">
            <div className="error-inner"> 
                <div className="title">Błąd</div>
                <div className="description">{error.message}</div>
             <div className="button-div">
                   <button className="close-btn" onClick={() => { handleError() }}>Zamknij</button>         
                </div>          
             </div>
         </div>
     ) : "";
}

export default AuthPopup
