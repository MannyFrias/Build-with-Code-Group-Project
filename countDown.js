export const countDown = (question, answer, max = 1) => {
  let attemptsLeft = max;
  let playerAnswer = "";

  // The loop continues as long as attempts are left and the answer is incorrect.
  while (attemptsLeft > 0) {
    // The countdown is displayed directly in the prompt message.
    const promptMessage = `${question}\n\nYou only have ${attemptsLeft} attempt.`;
    playerAnswer = prompt(promptMessage);

    // Handle the case where the user cancels the prompt.
    if (playerAnswer === null) {
      alert("You skipped the question.");
      return false;
    }

    // Check for a correct answer (case-insensitive and trimmed).
    if (playerAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      alert("Correct!");
      return true;
    } else {
      attemptsLeft--; // Decrement the countdown.
      if (attemptsLeft > 0) {
        alert(`Incorrect. Try again!`);
      }
    }
  }
};
