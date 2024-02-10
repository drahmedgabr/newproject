var questions = [0, 1, 2, 3, 4, 5, 7, 9];


var newNumber = Math.random() * 10;

newNumber = Math.floor(newNumber);


while (questions.includes(newNumber)) {
  newNumber = Math.random() * 10;

  newNumber = Math.floor(newNumber);
}

questions.push(newNumber);

console.log(questions);