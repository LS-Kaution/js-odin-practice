function startGame() {
    const OCHER_DOFUS = document.getElementById('ocher-Dofus')
    OCHER_DOFUS.addEventListener('click', ocher)

    const TURQUOISE_DOFUS = document.getElementById('turquoise-Dofus')
    TURQUOISE_DOFUS.addEventListener('click', turquoise)

    const EMERALD_DOFUS = document.getElementById('emerald-Dofus')  
    EMERALD_DOFUS.addEventListener('click', emerald)
}
const OCHER_DOFUS = document.getElementById('ocher-Dofus')
const TURQUOISE_DOFUS = document.getElementById('turquoise-Dofus')
const EMERALD_DOFUS = document.getElementById('emerald-Dofus')

const win = 'You Win!'
const lose = 'You Lose!'
const draw = 'Draw'

let selection

let pointsPlayer = 0
let pointsEnemy = 0

let playerValue = document.getElementById("points-player")
let enemyValue = document.getElementById("points-enemy")

function getComputerChoice() {
    let ramdon = Math.floor(Math.random() * 3) + 1

    if (ramdon === 1) {
        return OCHER_DOFUS
    }

    if (ramdon === 2) {
        return TURQUOISE_DOFUS
    }

    else {
        return EMERALD_DOFUS
    }
}

function ocher(){
    selection = playRound(OCHER_DOFUS, getComputerChoice())
    veganGame()
}

function turquoise() {
    selection = playRound(TURQUOISE_DOFUS, getComputerChoice())
    veganGame()
}

function emerald() {
    selection = playRound(EMERALD_DOFUS, getComputerChoice())
    veganGame()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === OCHER_DOFUS && computerSelection === EMERALD_DOFUS) {
        return win
    }

    if (playerSelection === TURQUOISE_DOFUS && computerSelection === OCHER_DOFUS) {
        return win
    }

    if (playerSelection === EMERALD_DOFUS && computerSelection === TURQUOISE_DOFUS) {
        return win
    }

    if (playerSelection === computerSelection) {
        return draw
    }

    else {
        return lose
    }
}

function veganGame() {
    for (let i = 0; i <= 5; i++) {
        if (selection === win) {
            pointsPlayer++
            playerValue.innerHTML = `${pointsPlayer}`
        }

        if(selection === lose) {
            pointsEnemy++
            enemyValue.innerHTML = `${pointsEnemy}`
        }
    }
}

function lifes() {
    if (pointsPlayer === 5) {
        return 'You Win the game Adventurer'
    }

    if (pointsEnemy === 5) {
        return 'You Lose the game Adventurer'
    }
}