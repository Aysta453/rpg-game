import React,{useState , useEffect} from 'react'

import './test.css';
const Test = () => {
    const [testValue, setTestValue] = useState(false);
    let width = 500;
    const [color, setColor] = useState("blue");
    const [timeBar, setTimeBar] = useState(0);
    let progress = width / 5;
    
    const [secondValue, setSecondValue] = useState(0);

    const [timeSkillBar, setTimeSkillBar] = useState(0);
     const sleep = (ms) => {
         return new Promise(resolve => setTimeout(resolve, ms));
        }

    const showingDiv = () => {
        setTestValue(!testValue);
    };

    
    useEffect(() => {
       if(testValue == true){     
        setTimeSkillBar(setInterval(() => {
              setTimeBar(timeBar => timeBar + progress);
        }, 1 * 1000));  
        }
    }, [testValue]);


    useEffect(() => {

        if (secondValue === 1) {
            setColor("green");
            sleep(100).then(() => {
                 
                progress = width / 10;
                setTimeSkillBar(setInterval(() => {
                    setTimeBar(timeBar => timeBar + progress);
                }, 1 * 1000));
            });
        }
        
        if (secondValue === 2) {
            setColor("red");
            sleep(100).then(() => {
                 
                progress = width / 10;
                setTimeSkillBar(setInterval(() => {
                    setTimeBar(timeBar => timeBar + progress);
                }, 1 * 1000));
            });
        }
           
    }, [secondValue]);
    
    
    useEffect(() => {
        if (timeBar === (width)) {
            sleep(1000).then(() => {
                clearInterval(timeSkillBar);
                setTimeBar(0);
                setSecondValue(2);
            })   
        }
      
       
    }, [timeBar]);
    
    useEffect(() => {
        if (timeBar === (width) && (secondValue === 2)) {
            clearInterval(timeSkillBar);
                setTimeBar(0);
                setSecondValue(3);
        }
    },[timeBar,secondValue])

    useEffect(() => {
        if (secondValue === 3 && timeBar === 0) {
            showingDiv();
        }
    }, [secondValue, timeBar]);

   
    return (
        <div>
            <button onClick={() => {
                clearInterval(timeSkillBar);
                showingDiv();
            }}>testing</button>
                        {testValue ? (
            <div >
                <div className="progress-div" style={{ width: width }}>                     
                    <div style={{ width: `${timeBar}px`,backgroundColor:color    }}  className="progress"/>
                </div>
                 </div>  
            ):("")}
            
        </div>
    )
}

export default Test;
