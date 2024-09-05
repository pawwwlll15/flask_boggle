let timeCounter = 60;
let timer = document.querySelector('#timer');
timer.textContent = timeCounter;
let gameboard = document.querySelector('#gameboard')

function updateTimer(){
    if(timeCounter > 0){
        timeCounter -= 1;
        timer.textContent = timeCounter;
    } else{
        clearInterval(countdown)
        
        
    }
}

let countdown = setInterval(updateTimer,1000);


