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
const reset = document.querySelector('.resetScore');

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
        stopTimer();
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
                startTimer();
                player.score--;
                player.counter.textContent = player.score;
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
    stopTimer();
    resetTimer();
}

const startTimerBtn = document.querySelector('.start');
const stopTimerBtn  = document.querySelector('.stop');
const resetTimerBtn  = document.querySelector('.reset');
startTimerBtn.dislay

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);
resetTimerBtn .addEventListener('click', resetTimer);


const timer = document.getElementById('stopwatch');

let stoptime = true;
if(stoptime) {
  stopTimerBtn.style.display = 'none';
}



const clock = {
    ms: 0,
    sec: 0,
    min: 0,
    hr: 0
}

function startTimer() {
  if (stoptime) {
        stoptime = false;
        timerCycle();
        startTimerBtn.style.display = 'none';
        stopTimerBtn.style.display = '';



    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    stopTimerBtn.style.display = 'none';
    startTimerBtn.style.display = '';
  }
}




function timerCycle() {
    if (stoptime == false) {
    clock.ms = parseInt(clock.ms);
    clock.sec = parseInt(clock.sec);
    clock.min = parseInt(clock.min);
    clock.ms += 1;

    if (clock.ms == 100) {
      clock.sec = + clock.sec + 1;
      clock.ms = 0;
    }
    if (clock.sec == 60) {
      clock.min = clock.min + 1;
      clock.sec = 0;
    }
    if (clock.min == 60) {
      clock.hr = clock.hr + 1;
      clock.min = 0;
      clock.sec = 0;
    }

    if (clock.ms < 10 || clock.ms == 0) {
      clock.ms = '0' + clock.ms;
    }
    if (clock.sec < 10 || clock.sec == 0) {
      clock.sec = '0' + clock.sec;
    }
    if (clock.min < 10 || clock.min == 0) {
      clock.min = '0' + clock.min;
    }

    timer.innerHTML = clock.min + ':' + clock.sec + ':' + clock.ms;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    clock.hr = 0;
    clock.min = 0;
    clock.sec = 0;
    clock.ms = 0;    
}

