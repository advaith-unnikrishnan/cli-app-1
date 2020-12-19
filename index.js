var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Advaith",
    score: 4,
  },

  {
    name: "Adithya",
    score: 2,
  },
]


// array of objects
var questions = [
  {
  question: "Where do I live? ",
  answer: "Trivandrum"
}, {
  question: "Whose my favorite superhero? ",
  answer: "Ironman"
},
{
  question: "What is my favorite movie? ",
  answer: "The Dark Knight"
}, {
  question: "What is my favorite movie franchise? ",
  answer: "Harry Potter"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Advaith?");
}


// function to check answers
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("Wohoo! You guessed it right ");
    score = score + 1;
    
  } else {
    console.log("Oops! It's wrong");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}


// function to choose questions
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


//function to display scores
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
