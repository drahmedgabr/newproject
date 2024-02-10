const trialsNumberText = document.getElementById("trialsNumber");
const resultNumber = document.getElementById("resultNumber");
const inputDiv = document.getElementById("inputDiv");
const resultDiv = document.getElementById("resultDiv");
const resultText = document.getElementById("resultText");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const successImg = document.getElementById("successImg");
const failedImg = document.getElementById("failedImg");

var trialsNumber = 3;
var correctNumber = 0;

const correctAudio = new Audio("https://tatbeqak.site/debug/tada.mp3");
const wrongAudio = new Audio("https://tatbeqak.site/debug/wrong.mp3");

async function selectNumber(number) {
    inputDiv.style.display = "none";
    resultText.innerText = `You choosed number ${number}`;
    resultDiv.style.display = "block";

    for (let index = 0; index < 10; index++) {
        correctNumber = randomNumber();
        resultNumber.innerText = correctNumber;
        await new Promise(r => setTimeout(r, 50));
    }

    if(correctNumber == number){
        correctAudio.currentTime = 0;
        correctAudio.play();
        resultText.innerText = `Oh my god .. you are so lucky`;
        successImg.style.display = "block";
    } else {
        wrongAudio.currentTime = 0;
        wrongAudio.play();
        trialsNumber--;
        trialsNumberText.innerText = trialsNumber;
    
        if(trialsNumber > 0){
            tryAgainBtn.style.display = "inline-block";
        } else {
            resultText.innerText = `See you on the other side cow boy .. tshshshsh`;
            failedImg.style.display = "block";
        }  
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function tryAgain() {
    inputDiv.style.display = "block";
    tryAgainBtn.style.display = "none";
    resultDiv.style.display = "none";
}