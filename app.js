var scores, roundScore, activePlayer, gamePlay;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random()*6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlay) {
        var dice = Math.floor(Math.random()*6) + 1;
    var diceDOM = document.querySelector('#dice-2');
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    if (dice !== 1) {
        
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        
        nextPlayer();
        
    }
    
 }
    
    
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    
    if (gamePlay) {
        
        scores[activePlayer] += roundScore;
    
    document.getElementById('score-' +activePlayer).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= 10) {
        document.getElementById('name-' +activePlayer).textContent = 'Winner!';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlay = false;
    }
    
    else {
        
        nextPlayer();
    }
        
    }
    
    
    
    
    
    
})

function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    
}

document.querySelector('.btn-new').addEventListener('click', function() {
    
    gamePlay = true;
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    

    
})