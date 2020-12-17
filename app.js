const playerOne = {
    score: 0,
    btn: document.querySelector('.p1btn'),
    counter: document.querySelector('.p1score'),
    btnMinus: document.querySelector('.p1btnMin')
}
const playerTwo = {
    score: 0,
    btn: document.querySelector('.p2btn'),
    counter: document.querySelector('.p2score'),
    btnMinus: document.querySelector('.p2btnMin')
}
const reset = document.querySelector('.reset');

for (let i = 3; i < 22; i++){
    scorePicker.innerHTML += `<option value="${i}">${i}</option>`
}

let gameOver = false;

playerOne.btn.addEventListener('click', ()=>{counter(playerOne, playerTwo)});
playerTwo.btn.addEventListener('click', ()=>{counter(playerTwo, playerOne)});
reset.addEventListener('click', resetGame);
scorePicker.addEventListener('change', resetGame);

function counter(player, opponent) {
    if (!gameOver) {
        player.score++;
        player.counter.textContent = player.score;
    }
    if (player.score === parseInt(scorePicker.value)){
        player.counter.classList.add('has-text-success'); 
        opponent.counter.classList.add('has-text-danger'); 
        player.btn.disabled = true;
        opponent.btn.disabled = true;
        gameOver = true;
    }
}

playerOne.btnMinus.addEventListener('click', ()=>{counterMinus(playerOne, playerTwo)});
playerTwo.btnMinus.addEventListener('click', ()=>{counterMinus(playerTwo, playerOne)});

function counterMinus(player, opponent) {
    
        if (player.score != 0) {
            if (!gameOver) {
                player.score--;
                player.counter.textContent = player.score;
            }
            if (gameOver){
                gameOver = false;
                player.btn.disabled = false;
                opponent.btn.disabled = false;
                player.counter.classList.remove('has-text-success', 'has-text-danger')
                opponent.counter.classList.remove('has-text-success', 'has-text-danger')
            }

        }

    }



function resetGame(){
    playerOne.counter.classList.remove('has-text-success', 'has-text-danger')
    playerTwo.counter.classList.remove('has-text-success', 'has-text-danger')
    playerOne.btn.disabled = false;
    playerTwo.btn.disabled = false;
    gameOver = false;
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.counter.textContent = 0;
    playerTwo.counter.textContent = 0;
}

//timer 

const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00:00';
}
