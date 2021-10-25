import React from 'react'

const Select = ({label,name,handleChange}) => {
    return (
        <>
            <div className='authElementInput'>
                <div className='authElementInputName'>
                     <h3>{label}</h3> 
                </div>
                <div className='authElementInputInput'>
                    <select name={name} onChange={handleChange} value="Mage">
                        <option value="Mage" onChange={handleChange}>Mag</option>
                        <option value="Warrior" onChange={handleChange}>Wojownik</option>
                        <option value="Hunter" onChange={handleChange}>Łotrzyk</option>
                        <option value="Priest" onChange={handleChange}>Kapłan</option>
                        <option value="Berserk" onChange={handleChange}>Berserker</option>
                    </select>
                </div>
            </div>          
        </>
    )
}

export default Select;
