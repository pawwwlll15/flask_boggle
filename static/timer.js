   
$(document).ready(function(){

    let timeCounter = 60;
    let timer = $('#timer');
    timer.text(timeCounter);




    /* timer that implements -1 every second, when timeCounter hits 0, run alert message and then send player back to home page */
    function updateTimer(){
        if(timeCounter > 0){
            timeCounter -= 1;
            timer.text(timeCounter);
        } else{
            clearInterval(countdown);
            alert("TIME IS UP, PLEASE CLICK 'OK' TO HEAD BACK TO HOME PAGE!!");
            window.location.href = '/';
            /* counter and top_score are defined in app.js */
            if(counter > top_score){
                top_score = counter;
            }
            
        }
    }

    let countdown = setInterval(updateTimer,1000);


    /* top score is not updating for some reason!! */




});
 

