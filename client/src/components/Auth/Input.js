import React from 'react';
import './auth.css';

const Input = ({name,handleChange,label,type}) => {
    return (
        <>
            <div className='authElementInput'>
                <div className='authElementInputName'>
                     <h3>{label}</h3> 
                </div>
                <div className='authElementInputInput'>
                    <input name={name}  onChange={handleChange} variant="outlined" required type={type} />
                </div>
            </div>
        </>
    )
}

export default Input
