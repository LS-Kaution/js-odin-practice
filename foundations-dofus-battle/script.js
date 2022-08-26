const OCHER_DOFUS = 'Ocher Dofus'
const TURQUOISE_DOFUS = 'Turquoise Dofus'
const EMERALD_DOFUS = 'Emerald Dofus'

const win = 'You Win!'
const lose = 'You Lose!'
const draw = 'Draw'

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
        let result = playRound(TURQUOISE_DOFUS, getComputerChoice())

        if (result === win) {
            pointsPlayer++
            playerValue.innerHTML = `${pointsPlayer}`
        }

        if(result === lose) {
            pointsEnemy++
            enemyValue.innerHTML = `${pointsEnemy}`
        }
    }
}

veganGame()

function lifes() {

    if (pointsPlayer === 5) {
        return 'You Win the game Adventurer'
    }

    if (pointsEnemy === 5) {
        return 'You Lose the game Adventurer'
    }
}