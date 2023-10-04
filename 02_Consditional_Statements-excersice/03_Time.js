function time (input) {
    let hours = +input[0];
    let minutes = +input[1] + 15;

    
    if (minutes >= 60) {
        minutes = minutes - 60;
        hours = hours + 1;
    }


    if (hours > 23) {
        hours = 0;
    }
    
    if (minutes < 10){
        console.log (`${hours}:0${minutes}`);
    }   else {
        console.log(`${hours}:${minutes}`);
    }
    
}

time(["0", "47"])

