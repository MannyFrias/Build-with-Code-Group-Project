// if they get a question correct score counter ++, else counter --
let counter = 0;
counter = counter ++;
counter = counter --;
counter = 0; //start score counter at 0 and have it increase 25 points 

console.log(counter); 

export function counter(score, lives) {
  if(question === score) {
    counter += 25;
  } else {
    counter - 25 
    --startingLife; 
  }
 if(startingLife === 0){
    lost = true
  }
}
  



//life storage
const won = false;
const currentScore = 0;
const winningScore = 100;
const lost = false;
const startingLife = 4;
const lostLife = 0;

//Heart/Lives Tracker
export function livesHandled(player, question) {
  question.lose();
  if(question.key === score) {
    currentScore = currentScore + 25;
  } else if (question.key === lose) {
      currentLife = currentLife - 1;
  } else if (question.key === heart ) {
     currentScore = currentScore + 25;
  } 
  
  if (currentLife === losingLife) {
     lost = true;
  }if (currentScore === winningScore){
     won = true;
  }
}
