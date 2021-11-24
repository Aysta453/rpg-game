import React from 'react';
import './auth.css';

const Input = ({name,handleChange,label,type ,value}) => {
    return (
        <>
            <div className='authElementInput'>
                <div className='authElementInputName'>
                     <h3>{label}</h3> 
                </div>
                <div className='authElementInputInput'>
                    <input name={name} value={value} onChange={handleChange} variant="outlined" required type={type} />
                </div>
            </div>
        </>
    )
}

export default Input
