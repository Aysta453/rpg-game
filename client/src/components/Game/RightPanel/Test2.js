import React, {useEffect,useState }from 'react'
import './test.css';
const Test2 = ({ show, value, sleep ,check}) => {

  const [render, setRender] = useState(check);

    useEffect(() => {
        if (render === true) {
             sleep(3000).then(() => {
        setRender(false);
    })
        }
    }, [render]);
   
    return (
        render ? (
            <div key={value} className="combatDiv1">
                <div className="combatDivText1" key={value} >{show}</div>
            </div>
          
        ) : ('')
  );
};
export default Test2
