
function GameQuestions(questionsArray) {
  let score = 0;

  for (let i = 0; i < questionsArray.length; i++) {
    const current = questionsArray[i];

    let question = current.question

    let choices = current.choices;

    let userChoice = prompt(`${question}\n ${choices}`)

    if(userChoice === current.answer){
      score += 1;
      alert(`Correct!\n Your score is: ${score}\n your streak is ${streak}`)
    }

  }
}

