const DRAW = 'draw'
const P_WIN = 'Player Win!'
const C_WIN = 'Computer Win!'

let initScorePlayer = 0
let initScoreComputer = 0

let scorePlayer = document.getElementById('score-player')
let scoreComputer = document.getElementById('score-computer')

let imgPlayer = document.getElementById('img-player')
let imgComputer = document.getElementById('img-computer')

let playBtn =  document.getElementsByClassName('play-btn')

let imgPath = 'images'

let options = ['rock', 'paper', 'scissor']

function play(option) {
    let playerDecision = setImage(option)
    let comDecision = setImageComputer()

    setTheWinner(playerDecision, comDecision)
}

function setImage(option) {
    imgPlayer.src = imgPath+'/'+option+'-player.png'

    return option
}

function setImageComputer() {
    let computerDecision = options[Math.floor(Math.random()*options.length)]
    imgComputer.src = imgPath+'/'+computerDecision+'-computer.png'

    return computerDecision
}

function setTheWinner(playerDecision, comDecision) {
    let result = ''

    if(playerDecision == 'rock') {
        switch (comDecision){
            case 'rock':
                result = DRAW
                break;

            case 'paper':
                result = C_WIN
                break;

            case 'scissor':
                result = P_WIN
                break;
        }
    }

    if(playerDecision == 'paper') {
        switch (comDecision){
            case 'rock':
                result = P_WIN
                break;

            case 'paper':
                result = DRAW
                break;

            case 'scissor':
                result = C_WIN
                break;
        }
    }

    if(playerDecision == 'scissor') {
        switch (comDecision){
            case 'rock':
                result = C_WIN
                break;

            case 'paper':
                result = P_WIN
                break;

            case 'scissor':
                result = DRAW
                break;
        }
    }

    scoring(result)
}

function scoring(result) {
    if(result == 'Player Win!') {
        initScorePlayer++
        scorePlayer.innerHTML = initScorePlayer
    
        if(initScorePlayer >= 3) {
            for (let i = 0; i < playBtn.length; i++) {
                playBtn[i].setAttribute('disabled', '')
            }

            playAgain(P_WIN)
        }
    }
    if(result == 'Computer Win!') {
        initScoreComputer++
        scoreComputer.innerHTML = initScoreComputer

        if(initScoreComputer >= 3) {
            for (let i = 0; i < playBtn.length; i++) {
                playBtn[i].setAttribute('disabled', '')
            }

            playAgain(C_WIN)
        }
    }
}

function playAgain(winner) {
    if(confirm(winner+' Want To Play Again ?')) {
        initScorePlayer = 0
        initScoreComputer = 0
        
        scorePlayer.innerHTML = initScorePlayer
        scoreComputer.innerHTML = initScoreComputer

        for (let i = 0; i < playBtn.length; i++) {
            playBtn[i].removeAttribute('disabled')
        }
    }
}
