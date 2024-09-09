
/* listen for when the page loads, when the happens grab form with id 'guess' and add an event listener to that form as well */
const guess_form = document.querySelector('#guess');
let used_guesses = new Set();
let top_score = document.querySelector('#top_score');
let score = document.querySelector('#score');
let counter = 0;
score.textContent = "Youre Score: " + counter



guess_form.addEventListener('submit', async function(e){
    e.preventDefault();
    let validation_message = document.querySelector('#validation_message');
    /* get value of guess input after submission, then add guessLi to used_guesses so user can keep track of their guesses */
    let guess_input = document.querySelector('#guess_input').value;
      
        
        
    /* sending input data to /submit_guess */
    const response = await axios.post('/submit_guess',{guess_input: guess_input})
    const data = response.data;
    let validation = data.result;
    if(validation == 'ok'){
        validation_message.textContent = 'Great find!!'
        if(used_guesses.has(guess_input)){
            alert('Sorry you already used this word!');
        }else if(!used_guesses.has(guess.input)) {
            used_guesses.add(guess_input);
            counter += 1;
            score.textContent = "Youre Score: " + counter;
                
        }
    } else if(validation == 'not-on-board'){
        validation_message.textContent = '';
        alert('Sorry that word is not on the board');
            
    } else if(validation == 'not-word'){
        validation_message.textContent = '';
        alert('Sorry that is not a word!!');
    }
    
    this.reset()

})

