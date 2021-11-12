import React,{useState , useEffect} from 'react'

import './test.css';
import Test2 from './Test2';


const Test = () => {
    const [show, setShow] = useState(0);
    const [check, setCheck] = useState(false);
     const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const a = () => {
        setShow(show => show + 1);


  }
  
   const Test = (value) => {   //use {
    return(  //use return to return the html elements
            <div key={Math.random()} id={Math.random()} className="combatDiv1">
            <div   className="combatDivText1">- {value}</div>
            </div>
    )
  };
  

      useEffect(() => {
        Test(show);
    }, [show]);
  return (
    <>
          <button onClick={() => {
              a();

      }}>
          testing {show}
          </button>
    </>
  );
};

export default Test;
