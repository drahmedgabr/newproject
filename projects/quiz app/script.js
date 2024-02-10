const questionsBank = [
    {
      "question": "What is the capital of France?",
      "choices": ["Paris", "London", "Rome", "Berlin"],
      "answer": "Paris"
  },
  {
      "question": "What is the largest ocean in the world?",
      "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      "answer": "Pacific Ocean"
  },
  {
      "question": "What is the tallest mountain in the world?",
      "choices": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      "answer": "Mount Everest"
  },
  {
      "question": "What is the most populous country in the world?",
      "choices": ["China", "India", "United States", "Indonesia"],
      "answer": "China"
  },
  {
      "question": "What is the square root of 16?",
      "choices": ["2", "4", "8", "16"],
      "answer": "4"
  },
  {
      "question": "What is the name of the largest planet in our solar system?",
      "choices": ["Jupiter", "Saturn", "Uranus", "Neptune"],
      "answer": "Jupiter"
  },
  {
      "question": "What is the name of the chemical element with the atomic number 1?",
      "choices": ["Hydrogen", "Helium", "Lithium", "Beryllium"],
      "answer": "Hydrogen"
  },
  {
      "question": "What is the name of the book written by J.K. Rowling that tells the story of a young wizard named Harry Potter?",
      "choices": ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire"],
      "answer": "Harry Potter and the Sorcerer's Stone"
  },
  {
      "question": "What is the name of the artist who painted the Mona Lisa?",
      "choices": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Sandro Botticelli"],
      "answer": "Leonardo da Vinci"
  },
  {
      "question": "What is the name of the composer who wrote the Fifth Symphony?",
      "choices": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Peter Tchaikovsky"],
      "answer": "Ludwig van Beethoven"
  },
  {
      "question": "What is the name of the US state that is known for its golden gate bridge?",
      "choices": ["California", "New York", "Florida", "Texas"],
      "answer": "California"
  },
  {
      "question": "What is the name of the most popular social media platform in the world?",
      "choices": ["Facebook", "Twitter", "Instagram", "TikTok"],
      "answer": "Facebook"
  },
  {
      "question": "What is the name of the most popular programming language in the world?",
      "choices": ["Python", "Java", "JavaScript", "C++"],
      "answer": "Python"
  },
  {
      "question": "What is the name of the most popular video game in the world?",
      "choices": ["Minecraft", "Grand Theft Auto V", "Call of Duty: Modern Warfare", "Fortnite"],
      "answer": "Minecraft"
  },
  {
      "question": "What is the name of the most popular streaming service in the world?",
      "choices": ["Netflix", "Amazon Prime Video", "Hulu", "Disney+"],
      "answer": "Netflix"
  },
  {
      "question": "What is the name of the most popular smartphone in the world?",
      "choices": ["Apple iPhone 13", "Samsung Galaxy S22", "Xiaomi Redmi Note 11 Pro", "OPPO Reno 7 Pro"],
      "answer": "Apple iPhone 13"
  },
  {
      "question": "What is the name of the most popular cryptocurrency in the world?",
      "choices": ["Bitcoin", "Ethereum", "Tether", "USD Coin"],
      "answer": "Bitcoin"
  },
  {
    "question": "What is the name of the largest country in the world by area?",
    "choices": ["Russia", "Canada", "China", "United States"],
    "answer": "Russia"
  },
  {
    "question": "What is the name of the largest ocean in the world by volume?",
    "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer": "Pacific Ocean"
  },
  {
    "question": "What is the name of the longest river in the world?",
    "choices": ["Nile River", "Amazon River", "Yangtze River", "Yellow River"],
    "answer": "Nile River"
  },
  {
    "question": "What is the name of the highest mountain in the world outside of Asia?",
    "choices": ["Mount Aconcagua", "Mount Denali", "Mount Kilimanjaro", "Mount Elbrus"],
    "answer": "Mount Aconcagua"
  },
  {
    "question": "What is the name of the largest desert in the world?",
    "choices": ["Sahara Desert", "Antarctic Desert", "Arctic Desert", "Arabian Desert"],
    "answer": "Sahara Desert"
  },
  {
    "question": "What is the name of the most populous city in the world?",
    "choices": ["Tokyo", "Shanghai", "Delhi", "São Paulo"],
    "answer": "Tokyo"
  },
  {
    "question": "What is the name of the most popular language in the world?",
    "choices": ["Mandarin Chinese", "Spanish", "English", "Hindi"],
    "answer": "Mandarin Chinese"
  },
  {
    "question": "What is the name of the world's oldest religion?",
    "choices": ["Hinduism", "Buddhism", "Judaism", "Christianity"],
    "answer": "Hinduism"
  },
  {
    "question": "What is the name of the world's largest ocean?",
    "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer": "Pacific Ocean"
  },
  {
    "question": "What is the name of the world's longest river?",
    "choices": ["Nile River", "Amazon River", "Yangtze River", "Yellow River"],
    "answer": "Nile River"
  },
  {
    "question": "What is the name of the world's tallest mountain?",
    "choices": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    "answer": "Mount Everest"
  },
  {
    "question": "What is the name of the world's most populous country?",
    "choices": ["China", "India", "United States", "Indonesia"],
    "answer": "China"
  },
  {
    "question": "What is the name of the world's most spoken language?",
    "choices": ["Mandarin Chinese", "Spanish", "English", "Hindi"],
    "answer": "Mandarin Chinese"
  },
  {
    "question": "What is the sum of 1 and 1?",
    "choices": [0, 1, 2, 3],
    "answer": 2
  },
  {
    "question": "What is the product of 2 and 2?",
    "choices": [0, 1, 2, 4],
    "answer": 4
  },
  {
    "question": "What is the quotient of 4 divided by 2?",
    "choices": [0, 1, 2, 4],
    "answer": 2
  },
  {
    "question": "What is the difference of 6 and 2?",
    "choices": [0, 1, 2, 4],
    "answer": 4
  },
  {
    "question": "What is the square root of 16?",
    "choices": [2, 4, 8, 16],
    "answer": 4
  },
  {
    "question": "What is the cube root of 8?",
    "choices": [2, 4, 8, 16],
    "answer": 2
  },
  ];


//global variables
const mainDiv = document.getElementById("mainDiv");
const resultDiv = document.getElementById("resultDiv");
const questionNumberText = document.getElementById("questionNumberText");
const scoreNumberText = document.getElementById("scoreNumberText");
const answers = document.getElementsByClassName("answerDiv");
const nextButton = document.getElementById("nextButton");
const questionDiv = document.getElementById("questionDiv");
const resultText = document.getElementById("resultText");
const resultScore = document.getElementById("resultScore");

const correctAudio = new Audio("https://tatbeqak.site/debug/tada.mp3");
const wrongAudio = new Audio("https://tatbeqak.site/debug/wrong.mp3");


var questionNumber = 0;
var selectedAnswer = "";
var score = 0;

var currentQuestion = 0;

var loadedQuestions = [];

loadQuestion();


for (let index = 0; index < answers.length; index++) {
    const element = answers[index];
    element.addEventListener("click", function(){
        clearSelection();
        element.style.backgroundColor = "rgb(204, 209, 249)";
        element.style.color = "darkblue";
        selectedAnswer = element.innerText;
        nextButton.style.display = "block";
    });
}

function clearSelection() {
    for (let index = 0; index < answers.length; index++) {
        const element = answers[index];
        element.style.backgroundColor = "";
        element.style.color = "rgb(204, 209, 249)";
    }
}

function loadQuestion() {

    if(questionNumber < 10) {

      currentQuestion = Math.random() * questionsBank.length;
      currentQuestion = Math.floor(currentQuestion);

      while (loadedQuestions.includes(currentQuestion)) {
        currentQuestion = Math.random() * questionsBank.length;
        currentQuestion = Math.floor(currentQuestion);
      }

      loadedQuestions.push(currentQuestion);

      questionDiv.innerText = questionsBank[currentQuestion].question;

  
        for (let index = 0; index < answers.length; index++) {
            const element = answers[index];
            element.innerText = questionsBank[currentQuestion].choices[index];
        }

        questionNumberText.innerText = questionNumber + 1;


    } else {
      mainDiv.style.display = "none";
      resultDiv.style.display = "block";
      if(score > 6){
        resultText.innerText = "Good Job";
      } else {
        resultText.innerText = "Try Again";
      }
      resultScore.innerText = `${score}/10`;
    }

    nextButton.style.display = "none";
}



function checkAnswer() {
    const result = selectedAnswer == questionsBank[currentQuestion].answer;


    if(result){
        score++;
        scoreNumberText.innerText = score;
        correctAudio.currentTime = 0;
        correctAudio.play();
    } else {
      wrongAudio.currentTime = 0;
      wrongAudio.play();
    }

    questionNumber++;

    clearSelection();

    loadQuestion();
}

function playAgain() {
  questionNumber = 0;
  score = 0;
  questionNumberText.innerText = questionNumber + 1;
  scoreNumberText.innerText = score;
  mainDiv.style.display = "block";
  resultDiv.style.display = "none";
  loadQuestion();
}