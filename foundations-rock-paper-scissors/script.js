const OCHER_DOFUS = 'Ocher Dofus'
const TURQUOISE_DOFUS = 'Turquoise Dofus'
const EMERALD_DOFUS = 'Emerald Dofus'

function getComputerChoice() {
    let ramdon = Math.floor(Math.random() * 3) + 1
    
    if(ramdon === 1){
        return OCHER_DOFUS
    }

    if(ramdon === 2){
        return TURQUOISE_DOFUS
    }

    else{
        return EMERALD_DOFUS
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === OCHER_DOFUS && computerSelection === EMERALD_DOFUS) {
        return `You Win! ${OCHER_DOFUS} beats ${EMERALD_DOFUS}`
    }

    if(playerSelection === TURQUOISE_DOFUS && computerSelection === OCHER_DOFUS) {
        return `You Win! ${TURQUOISE_DOFUS} beats ${OCHER_DOFUS}`
    }

    if(playerSelection === EMERALD_DOFUS && computerSelection === TURQUOISE_DOFUS) {
        return `You Win! ${EMERALD_DOFUS} beats ${TURQUOISE_DOFUS}`
    }

    if(playerSelection === OCHER_DOFUS && computerSelection === TURQUOISE_DOFUS) {
        return `You Lose! ${TURQUOISE_DOFUS} beats ${OCHER_DOFUS}`
    }
    
    if(playerSelection === TURQUOISE_DOFUS && computerSelection === EMERALD_DOFUS) {
        return `You Lose! ${EMERALD_DOFUS} beats ${TURQUOISE_DOFUS}`
    }

    if(playerSelection === EMERALD_DOFUS && computerSelection === OCHER_DOFUS) {
        return `You Lose! ${OCHER_DOFUS} beats ${EMERALD_DOFUS}`
    }

    if(playerSelection === OCHER_DOFUS && computerSelection === OCHER_DOFUS) {
        return 'Draw'
    }

    if(playerSelection === TURQUOISE_DOFUS && computerSelection === TURQUOISE_DOFUS) {
        return 'Draw'
    }

    if(playerSelection === EMERALD_DOFUS && computerSelection === EMERALD_DOFUS) {
        return 'Draw'
    }
}

function veganGame() {
    let pointsPlayer = 0
    let pointsEnemy = 0
    
    for(let i = 0; i < 5; i++) {
        let result = playRound(TURQUOISE_DOFUS, getComputerChoice())
        
        if(result === `You Win! ${OCHER_DOFUS} beats ${EMERALD_DOFUS}`) {
            pointsPlayer++
        }

        if(result === `You Win! ${TURQUOISE_DOFUS} beats ${OCHER_DOFUS}`) {
            pointsPlayer++
        }

        if(result === `You Win! ${EMERALD_DOFUS} beats ${TURQUOISE_DOFUS}`) {
            pointsPlayer++
        }

        if(result === `You Lose! ${TURQUOISE_DOFUS} beats ${OCHER_DOFUS}`) {
            pointsEnemy++
        }

        if(result === `You Lose! ${EMERALD_DOFUS} beats ${TURQUOISE_DOFUS}`) {
            pointsEnemy++
        }

        if(result === `You Lose! ${OCHER_DOFUS} beats ${EMERALD_DOFUS}`) {
            pointsEnemy++
        }
    }
}