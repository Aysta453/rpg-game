import React from 'react';


const CashItem = ({value,name}) => {
    
    return(<>
            <div className='cashItem'>
            <div className='cashItemName'>{name}<h3></h3></div>
            <div className='cashItemValue'>{value}<h3></h3></div>
            </div>
        </>
    );


};

export default CashItem;