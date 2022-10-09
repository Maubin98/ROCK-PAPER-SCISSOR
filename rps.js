function reloadw() { alert('congrats you won') ; window.location.reload()}
function reloadl() { alert('sad you lose') ; window.location.reload()}
const buttons = document.querySelectorAll('input');
let pscore    = document.getElementById('playerscore');
let cscore    = document.getElementById('computerscore');
let ps = 0;
let cs = 0;
cscore.innerHTML = cs;
pscore.innerHTML = ps;



function computerplay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playround(button.value)
    })
})


function playround(pselect){
    let cselect = computerplay()

    if ((pselect == 'rock' && cselect == 'scissors') ||
        (pselect == 'scissors' && cselect == 'paper') ||
        (pselect == 'paper' && cselect == 'rock')) {

        alert('You win this round');
        ps +=1;
        pscore.innerHTML = ps;
        if (ps == 5) {reloadw()}
        }

        else if((pselect == 'rock' && cselect == 'paper') ||
        (pselect == 'paper' && cselect == 'scissors')     ||
        (pselect == 'scissors' && cselect == 'rock' ))    {

        alert('You lose this round');
        cs +=1;
        cscore. innerHTML = cs;
        if (cs == 5) {reloadl()}
        } 
        else{  alert('Tie round') }
}
    














