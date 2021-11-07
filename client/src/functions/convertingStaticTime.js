export default function convertingStaticTime(time){
        let newTime;
        let tempTime = time / 1000;
        let minutes;
        let seconds;
        if (tempTime >=60 ) {
            minutes =  Math.floor(tempTime / 60);
            seconds =  Math.floor(tempTime % minutes);
           
            if (seconds >= 10) {
                newTime = minutes + ':' + seconds +' min';
            } else {
                newTime = minutes + ':0' + seconds+' min';
            }
         
        } else {
            newTime = tempTime+' s';
        }
        return newTime;
    }
