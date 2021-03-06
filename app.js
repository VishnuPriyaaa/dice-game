var scores,roundScore,activePlayer,gamePlaying;

init();
var lastDice;
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying) {
         // 1.Random Number
        
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2.Display the Result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if((dice === 6) && (lastDice === 6)){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }
// 3.Update the round score If the Round number was Not a 1
    if(dice !== 1){
        
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    } else {
        nextPlayer();
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('player-1-panel').classList.add('active');
      }
    }
    lastDice = dice; 
});

document.querySelector('.btn-hold').addEventListener('click',function() {
    if(gamePlaying) {
         if(nextPlayer) {
       // 1.Add Current Score to the Global Score
          scores[activePlayer] += roundScore;
    // 2.Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('final-score').value;
    var winningScore;
    if(input){
        winningScore = input;
    }else {
        winningScore = 100;
    }
    //nextPlayer();
    
    // 3.Check If the Player Won
     if (scores[activePlayer] >= winningScore) {
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
     } else {
         nextPlayer();
     }
    
   }
  
    }
    
  
});
                                                     
function nextPlayer() {
    activePlayer === 0? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
       document.querySelector('.dice').style.display = 'none';
}     

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [0,0]; 
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
//
////document.querySelector('#current-' + activePlayer).textContent = dice;
//
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//
//var x = document.querySelector('#score-1').textContent;
//console.log(x);                                                    