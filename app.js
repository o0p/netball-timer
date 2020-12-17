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

function counterMinus(player) {
    if (!gameOver) {
        player.score--;
        player.counter.textContent = player.score;
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
