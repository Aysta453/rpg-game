import React,{useState , useEffect} from 'react'

import './test.css';
const Test = () => {
    const [testValue, setTestValue] = useState(false);
    let width = 500;
    const [color, setColor] = useState("blue");
    const [timeBar, setTimeBar] = useState(0);
    
    const [secondValue, setSecondValue] = useState(0);

    const [firstSkill, setFirstSkill] = useState({
        castTime: 5000,
        durationTime: 2000,
        recastTime: 20000,
    });

    let progress = width / (firstSkill.castTime/1000);
    const [timeSkillBar, setTimeSkillBar] = useState(0);
     const sleep = (ms) => {
         return new Promise(resolve => setTimeout(resolve, ms));
        }

    const showingDiv = () => {
        setTestValue(!testValue);
    };
    useEffect(() => {
        if (secondValue === 1) {
            setColor("red");
            progress = width / (firstSkill.durationTime / 1000);
            setTimeSkillBar(setInterval(() => {
                setTimeBar(timeBar => timeBar - progress);
            }, 1 * 1000));
        }
         if (secondValue === 2) {
            setColor("green");
            progress = width / (firstSkill.recastTime / 1000);
            setTimeSkillBar(setInterval(() => {
                setTimeBar(timeBar => timeBar + progress);
            }, 1 * 1000));
        }
    },[secondValue]);
    
    useEffect(() => {
       if(testValue == true){     
        setTimeSkillBar(setInterval(() => {
              setTimeBar(timeBar => timeBar + progress);
        }, 1 * 1000));  
        }
    }, [testValue]);

    useEffect(() => {
        if (timeBar == width && secondValue == 0) {
            sleep(1000).then(() => {
                clearInterval(timeSkillBar);

                if (firstSkill.durationTime !== 0 && secondValue == 0) {
                    setTimeBar(width);
                    setSecondValue(1);
                } else {
                    setTimeBar(0);
                    setSecondValue(2);
                }
            });      
        }
                if (timeBar == 0 && secondValue == 1) {
            sleep(1000).then(() => {
                clearInterval(timeSkillBar);
                setTimeBar(0);
                if (firstSkill.durationTime !== 0 && secondValue ==1) {
                    setSecondValue(2);
                } else {
                    setSecondValue(3);
                }
            });      
        }
                if (timeBar == width && secondValue == 2) {
             sleep(1000).then(() => {
                clearInterval(timeSkillBar);
                setTimeBar(0);
                showingDiv();
                setColor("blue");
                setSecondValue(0);
            });      
        }
        if (timeBar == width && secondValue==3) {
            sleep(1000).then(() => {
                clearInterval(timeSkillBar);
                setTimeBar(0);
                showingDiv();
                setColor("blue");
                setSecondValue(0);
            });      
        }
    },[timeBar])
   

    const convertingTime= (time) => {
        let newTime;
        let tempTime = time / 1000;
        let minutes;
        let seconds;
        if (tempTime >=60 ) {
            minutes =  Math.floor(tempTime / 60);
            seconds =  Math.floor(tempTime % minutes);
           
            if (seconds >= 10) {
                newTime = minutes + ' : ' + seconds +' min';
            } else {
                newTime = minutes + ' : 0' + seconds+' min';
            }
         
        } else {
            newTime = tempTime+' s';
        }
        return newTime;
    }


    return (
        <div>
            <div>{convertingTime(224000)}</div>
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
