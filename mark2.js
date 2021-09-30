var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Manthan",
    score: 5,
  },

  {
    name: "Ankur",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Jaipur"
}, {
  question: "My favorite superhero would be? ",
  answer: "Spiderman"
},
{
  question: "What i wannabe? ",
  answer: "Fullstack dev"
},{
  question: "My fav boxing player?",
  answer: "Ali"
},{
  question: "My fav football player? ",
  answer: "messi"
}

];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Tanay?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, score more and  I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


