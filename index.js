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
    answer: CAPTCHAs, // 3
  },
  {
    question:
      "What software development hosting company has an Octocat for the logo?What software development hosting company has an Octocat for the logo?",
    choices: ["Source Forge", "GitHub", "Godegiant", "Beanstalk"],
    answer: Github, // 1
  },
  {
    question: "What app has a green owl as the mascot?",
    choices: ["Parakeet", "Twitter", "Duolingo", "eBird"],
    answer: Duolingo, // 2
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

const countDown = (time) => {
  if (time < 0) {
    console.log(`Time Remaining: ${time}`);
    // RECURSION
    // setTimeout calls fucntion again after 1 second
    setTimeout(() => {
      countDown(time - 1);
    }, 1000);
  } else {
    console.log("Time's up!");
  }
};
