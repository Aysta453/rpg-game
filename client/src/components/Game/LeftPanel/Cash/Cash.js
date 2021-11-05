import React,{useEffect} from 'react';
import CashItem from './CashItem.js';

import { useDispatch,useSelector } from 'react-redux';
import './cash.css';


const Cash = () => {
    const dispatch = useDispatch();
     const hero = useSelector(state => state.hero);
    
    return (<>
        <div className='cash'>
           
            <CashItem value={hero.gold}  name={"ZŁOTO"} id={'zloto'}/>
            <CashItem value={hero.diamond} name={'DIAMENTY'} id={'diamenty'}/>
           
        </div>
            
        </>
    );


};



export default Cash;