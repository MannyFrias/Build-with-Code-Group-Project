//starting page

//questions & answers
const easyQuestions = [
  {
    question: "What was the most downloaded app of the 2010s?",
    choices: ["Facebook", "Instagram", "Snapchat", "Messenger"],
    answer: "Facebook", // 0
  },
  {
    question:
      "One gigabyte is equal to how many megabytes?One gigabyte is equal to how many megabytes?",
    choices: ["5000", "1000", "100", "2000"],
    answer: "1000", // 1
  },
  {
    question: `"What is the official name for the “prove you’re not a robot” tests that websites sometimes require"`,
    choices: ["FunCaptcha", "hCaptcha", "ALTCHA", "CAPTCHAs"],
    answer: "CAPTCHAs", // 3
  },
  {
    question:
      "What software development hosting company has an Octocat for the logo?What software development hosting company has an Octocat for the logo?",
    choices: ["Source Forge", "GitHub", "Godegiant", "Beanstalk"],
    answer: "Github", // 1
  },
  {
    question: "What app has a green owl as the mascot?",
    choices: ["Parakeet", "Twitter", "Duolingo", "eBird"],
    answer: "Duolingo", // 2
  },
];

const hardQuestions = [
  {
    question:
      "What was Google’s fourth retired attempt at launching a social media platform?",
    choices: ["Google+", "Youtube", "GoogleTv", "GoogleFi"],
    answer: "Google+", //  0
  },
  {
    question:
      "What British computer scientist is widely credited with inventing the World Wide Web?",
    choices: ["Scott Pilgrim", "Tim Berners-Lee", "Einstein", "Churchill"],
    answer: "Tim Berners-Lee", // 1
  },
  {
    question:
      "In what year did the first Amazon Web Service launch to the public?",
    choices: [1999, 2004, 2010, 2013],
    answer: 2004, // 1
  },
  {
    question:
      "What smartphone app was founded by a father and son duo to promote incremental and passive investing?",
    choices: ["Square", "Kick", "Chime", "Acorns"],
    answer: "Acorns", // 3
  },
  {
    question:
      "The internet is stored in one massive room in America. True or false??",
    choices: [true, false],
    answer: false,
  },
];
let score = 0;

function showStartMenu() {
  alert("Welcome to the Game!");

  let choice = prompt(
    "MAIN MENU\n\n1. Start Game\n2. Exit\n\nEnter your choice (1-2):"
  );

  if (choice === null) {
    alert("Thanks for visiting!");
    return;
  }

  if (choice === "1") {
    startGame();
  } else if (choice === "2") {
    alert("Thanks for playing!");
  } else {
    alert("Invalid choice! Please try again.");
    showStartMenu();
  }
}

// higher order function / logic for hard and easy questions
function showQuestions(questions) {
  return function () {
    score = 0;

    for (let i = 0; i < questions.length; i++) {
      // Question with choices
      let questionText = questions[i].question + "\n\n";
      questionText += "1. " + questions[i].choices[0] + "\n";
      questionText += "2. " + questions[i].choices[1] + "\n";
      questionText += "3. " + questions[i].choices[2] + "\n";
      questionText += "4. " + questions[i].choices[3] + "\n\n";
      questionText += "Type 1, 2, 3, or 4:";

      let userAnswer = prompt(questionText);

      if (userAnswer === null) {
        alert("Game cancelled!");
        return;
      }

      // Get the selected answer
      let selectedAnswer = "";
      if (userAnswer === "1") {
        selectedAnswer = questions[i].choices[0];
      } else if (userAnswer === "2") {
        selectedAnswer = questions[i].choices[1];
      } else if (userAnswer === "3") {
        selectedAnswer = questions[i].choices[2];
      } else if (userAnswer === "4") {
        selectedAnswer = questions[i].choices[3];
      } else {
        continue;
      }
      // Check if correct and update score 
      if (selectedAnswer === questions[i].answer) {
        score++;
      }
      // If wrong, just continue to next question without showing anything
    }
    // Show final score
    let percentage = Math.round((score / questions.length) * 100);
    alert("Game Complete!\n\nFinal Score: " + score + "/" + questions.length);
  };
}

function startGame() {
  alert("Welcome to the trivia!");

  let difficulty = prompt(
    "Choose difficulty:\n\n1. Easy\n2. Hard\n\nEnter your choice (1-2):"
  );
  if (difficulty === null) {
    alert("Game cancelled!");
    if (confirm("Return to main menu?")) {
      showStartMenu();
    }
    return;
  }
  if (difficulty === "1") {
    alert("Easy mode selected! Get ready for 5 questions.");
    // easy questions logic will go here
    let playEasyQuestions = showQuestions(easyQuestions);
    playEasyQuestions();
  } else if (difficulty === "2") {
    alert("Hard mode selected! Prepare for challenging questions!");
    // hard questions logic will go here
    let playHardQuestions = showQuestions(hardQuestions);
    playHardQuestions();
  } else {
    alert("Invalid choice! Please try again.");
    return startGame();
  }

  // if the game ends
  if (confirm("Game finished! Return to main menu?")) {
    showStartMenu();
  }
}

showStartMenu();
