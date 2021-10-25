import React,{useEffect} from 'react';

const MenuItem2=({text,logout ,buttonsControl})=>{

    
    useEffect(() => {
    }, [buttonsControl])
    return(<>
        <div className='menuitem'>
            {buttonsControl ? (    <button className='buttonLeftMenu' disabled onClick={logout} > {text} </button>): (    <button className='buttonLeftMenu'  onClick={logout} > {text} </button>)}
         
            </div>
        </>
    );


};



export default MenuItem2;