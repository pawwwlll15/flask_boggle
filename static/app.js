
/* listen for when the page loads, when the happens grab form with id 'guess' and add an event listener to that form as well */
document.addEventListener('DOMContentLoaded',() => {
    const guess_form = document.querySelector('#guess');

    guess_form.addEventListener('submit',function(e){
        e.preventDefault()

      
    })
})

