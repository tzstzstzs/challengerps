function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'It’s a tie!';
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Assign button elements to variables
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const resultDiv = document.getElementById('result');
    const clearBtn = document.getElementById('clear-button')

    let rounds = 0;
    let wins = 0;
    let ties = 0;
    let losses = 0;
    
    // Add event listeners to buttons
    rockBtn.addEventListener('click', function() {
        playGame('Rock');
    });
    
    paperBtn.addEventListener('click', function() {
        playGame('Paper');
    });
    
    scissorsBtn.addEventListener('click', function() {
        playGame('Scissors');
    });
    
    // Game function
    function playGame(playerChoice) {
        const computerChoice = computerPlay();
        let computerChoiceSymbol = '...'
        const result = playRound(playerChoice, computerChoice);
        resultDiv.textContent = result;

        rounds++;
        if (result.includes('Win')) wins++;
        else if (result.includes('Lose')) losses++;
        else ties++;

        switch (computerChoice) {
            case 'Rock':
                computerChoiceSymbol = '✊';
                break;
            case 'Paper':
                computerChoiceSymbol = '✋';
                break;
            case 'Scissors':
                computerChoiceSymbol = '✌️';
                break;
            default:
                console.error('Invalid computer choice:', computerChoice);
                return;
        }

        document.getElementById('computer-choice').textContent = computerChoiceSymbol;

        updateScoreboard();
    }

    function updateScoreboard() {
        document.getElementById('rounds').textContent = `Rounds: ${rounds}`;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
        document.getElementById('ties').textContent = `Ties: ${ties}`;
        document.getElementById('losses').textContent = `Losses: ${losses}`;
    }

    function clearCounters() {
        rounds = 0;
        wins = 0;
        ties = 0;
        losses = 0;
        updateScoreboard();
    }

    clearBtn.addEventListener('click', clearCounters)
});
