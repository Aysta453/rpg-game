import React from 'react';
var i = 1;

const CashItem = ({value,name,id}) => {

    return(<>
            <div className='cashItem'>
            <div className='cashItemName' id={id}>{name}</div>
            <div className='cashItemValue' id={id}>{value}</div>
            </div>
        </>

    );


};

export default CashItem;