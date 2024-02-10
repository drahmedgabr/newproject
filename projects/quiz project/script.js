const questionsBank = [
    {
      "question": "What is the capital of France?",
      "choices": ["Paris", "London", "Berlin", "Rome"],
      "answer": "Paris"
    },
    {
      "question": "What is the largest ocean in the world?",
      "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      "answer": "Pacific Ocean"
    },
    {
      "question": "What is the square root of 16?",
      "choices": ["2", "4", "8", "16"],
      "answer": "4"
    },
    {
      "question": "What is the name of the tallest mountain in the world?",
      "choices": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      "answer": "Mount Everest"
    },
    {
      "question": "What is the chemical symbol for water?",
      "choices": ["H2O", "CO2", "O2", "N2"],
      "answer": "H2O"
    },
    {
      "question": "What is the name of the largest planet in our solar system?",
      "choices": ["Jupiter", "Saturn", "Uranus", "Neptune"],
      "answer": "Jupiter"
    },
    {
      "question": "What is the name of the first person to walk on the moon?",
      "choices": ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
      "answer": "Neil Armstrong"
    },
    {
      "question": "What is the name of the currency of the United Kingdom?",
      "choices": ["Pound sterling", "Euro", "Dollar", "Yen"],
      "answer": "Pound sterling"
    },
    {
      "question": "What is the name of the largest country in the world by area?",
      "choices": ["Russia", "Canada", "China", "United States"],
      "answer": "Russia"
    },
    {
      "question": "What is the name of the largest city in the world by population?",
      "choices": ["Tokyo", "Shanghai", "Delhi", "Sao Paulo"],
      "answer": "Tokyo"
    }
  ];

const mainDiv = document.getElementById("mainDiv");
const questionDiv = document.getElementById("questionDiv");
const answersDiv = document.getElementById("answersDiv");
const nextButton = document.getElementById("nextButton");
const scoreText = document.getElementById("scoreText");
const answers = document.getElementsByClassName("answerDiv");
const questionNumberText = document.getElementById("questionNumber");
const resultDiv = document.getElementById("resultDiv");
const resultText = document.getElementById("resultText");
const resultGrade = document.getElementById("resultGrade");

var questionNumber = 0;
var selectedAnswer = "";
var score = 0;


answersDiv.addEventListener("click", function(e) {
    if(e.target.className == "answerDiv"){
        clearAnswer();
        e.target.style.backgroundColor = "rgb(204, 209, 249)";
        e.target.style.color = "darkblue";
        const answer = e.target.innerText;
        answerClicked(answer);
    }
});

loadQuestion();

function clearAnswer() {
    for (let index = 0; index < answers.length; index++) {
        const element = answers[index];
        element.style.backgroundColor = "";
        element.style.color = "rgb(204, 209, 249)";
    }
    nextButton.style.display = "none";
}

function loadQuestion() {
    if (questionNumber < questionsBank.length) {
        questionDiv.innerText = questionsBank[questionNumber].question;
        for (let index = 0; index < answers.length; index++) {
            const element = answers[index];
            element.innerText = questionsBank[questionNumber].choices[index];
        }
        questionNumberText.innerText = questionNumber + 1;
    } else {
        if(score > 6){
            resultText.innerText = "Success";
        } else {
            resultText.innerText = "Try again!";
        }
        resultGrade.innerText = score;
        mainDiv.style.display = "none";
        resultDiv.style.display = "block";
    }
}

function answerClicked(answer) {
    selectedAnswer = answer;
    nextButton.style.display = "inline-block";
}

function checkAnswer() {
    const result = selectedAnswer == questionsBank[questionNumber].answer;
    if(result){
        score++;
        scoreText.innerText = score;
    }
    questionNumber++;
    clearAnswer();
    loadQuestion();
}

function playAgain() {
    questionNumber = 0;
    score = 0;
    scoreText.innerText = score;
    loadQuestion();
    mainDiv.style.display = "block";
    resultDiv.style.display = "none";
}