import React, { useEffect } from 'react';

const MenuItem = ({ text, setWindowOfElements, page, buttonsControl }) => {
    

    useEffect(() => {
    }, [buttonsControl])

    return(<>
        <div className='menuitem'>
            {buttonsControl ?(<button className='buttonLeftMenu' disabled onClick={() => { setWindowOfElements(page)}}> {text} </button>): (<button className='buttonLeftMenu'  onClick={() => { setWindowOfElements(page)}}> {text} </button>) }
            </div>
        </>
    );


};



export default MenuItem;