$(document).ready(function(){

    /* listen for when the page loads, when the happens grab form with id 'guess' and add an event listener to that form as well */
    const guess_form = $('#guess');
    let used_guesses = new Set();
    let score = $('#score');
    let counter = 0;
    score.text("Youre Score: " + counter)
    let top_score = localStorage.getItem('top_score') || 0;
    let top_score_h4 = $('#top_score');
    top_score_h4.text(top_score);



    guess_form.on('submit', async function(e){
        e.preventDefault();
        /* grab validation message */
        let validation_message = $('#validation_message');
        /* get value of guess input after submission, then add guessLi to used_guesses so user can keep track of their guesses */
        let guess_input = $('#guess_input').val();
        
        /* sending input data to /submit_guess */
        const response = await axios.post('/submit_guess',{guess_input: guess_input})
        const data = response.data;
        /* isolate validation result and either fill in validation message text content or run alert message. */
        let validation = data.result;
        if(validation == 'ok'){
            validation_message.text('Great find!!')
            if(used_guesses.has(guess_input)){
                alert('Sorry you already used this word!');
                
            }
            /* if used_guesses Set does not include guess add it to set and add counter to 1 for player point */
            else{
                used_guesses.add(guess_input);
                counter += 1;
                score.text("Youre Score: " + counter);
                
                if (counter > top_score) {
                    top_score = counter;
                    localStorage.setItem('top_score', top_score);
                    top_score_h4.text("Top Score: " + top_score);
                }   
            }
        } else if(validation == 'not-on-board'){
            validation_message.text('');
            alert('Sorry that word is not on the board');
                
        } else if(validation == 'not-word'){
            validation_message.text('');
            alert('Sorry that is not a word!!');
        }
        
        this.reset()

    })
})