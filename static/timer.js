let timeCounter = 60;
let timer = document.querySelector('#timer');
timer.textContent = timeCounter;



function updateTimer(){
    if(timeCounter > 0){
        timeCounter -= 1;
        timer.textContent = timeCounter;
    } else{
        clearInterval(countdown);
        alert("TIME IS UP, PLEASE CLICK 'OK' TO HEAD BACK TO HOME PAGE!!");
        window.location.href = '/';
        if(score > top_score){
            top_score.textContent = score;
        }
        
    }
}

let countdown = setInterval(updateTimer,1000);


/* top score is not updating for some reason!! */

