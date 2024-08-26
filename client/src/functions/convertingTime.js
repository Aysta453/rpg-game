export default function convertingTime(time){
    console.log('test')
        let newTime;
        let tempTime = time;
        let minutes;
        let seconds;
        if (tempTime >=60 ) {
            minutes = Math.floor(tempTime / 60);
            seconds = Math.floor(tempTime - (60*minutes));
           
            if (seconds >= 10) {
                newTime = minutes + ':' + seconds;
            } else {
                newTime = minutes + ':0' + seconds;
            }
         
        } else {
            seconds = time;
            if (seconds >= 10) {
                newTime = '0:' + seconds;
            } else {
                newTime = '0:0' + seconds;
            }
           
        }
        return newTime;
    }
