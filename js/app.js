var correctAnswers = 0;

alert('Whats up people');

var userName = prompt('Welcome everyone, you just entered Ty\s dope ass page, What is your name?');

alert('Hi, ' + userName + ', welcome! Let\'s see if you can answer some questions about Ty! Please answer yes/no or y/n.');

// Question 1 wrapped in a function by Ty and Bronwyn
function questionOne() {
  var answer1 = prompt('Did Ty Play Soccer in College?');
  if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert('You got it right, ' + userName + '! Ty Did not play soccer in college.');
    correctAnswers += 1;
  } else {
    alert('Sorry, ' + userName + ', you got it wrong. Ty did not play soccer.');
  }
}
questionOne();

//Question 2 wrapped in a function by Ty and Bronwyn
function questionTwo() {
  var answer2 = prompt('Does Ty have 2 siblings?');
  if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
    alert('You got it right, ' + userName + '! Ty does have 2 siblings.');
    correctAnswers += 1;
  } else {
    alert('Wrong, ' + userName + ', try again next time. Ty has 2 siblings.');
  }
}
questionTwo();

// Question 3 wrapped in a function by Ty and Bronwyn
function questionThree() {
  var answer3 = prompt('What is Ty favorite color?');
  if (answer3.toLowerCase() === 'red' || answer3.toLowerCase() === 'green') {
    alert('You got it right, ' + userName + '! You picked to one of Ty favorite color.');
    correctAnswers += 1;
  } else {
    alert('Sorry better luck next time, ' + userName + '!');
  }
}
questionThree();

// Question 4 wrapped in a function by Ty and Bronwyn
function questionFour() {
  var answer4 = prompt('What is Ty favorite food?');
  if (answer4.toLowerCase() === 'seafood' || answer4.toLowerCase() === 'chinese food') {
    alert('You got it right, ' + userName + '! Great Job, Ty loves seafood and Chinese food.');
    correctAnswers += 1;
  } else {
    alert('Wrong, ' + userName + '! Ty hates vegetables.');
  }
}
questionFour();

// Question 5  wrapped in a function by Ty and Bronwyn
function questionFive() {
  var answer5 = prompt('Did Ty run track as a kid?');
  if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
    alert('Great Job, ' + userName + '! You managed to guess the correct answer.');
    correctAnswers += 1;
  } else {
    alert('Sorry, ' + userName + ', Ty has never stepped foot on a track.');
  }
}
questionFive();


var age = 27;
for (var i = 0; i < 4; i++) {
  var ageAnswer = parseInt(prompt('How old is Ty?'));
  console.log('i is equal to', i);
  if ((i === 3) && (parseInt(ageAnswer) !== age)) {
    alert ('You ran out of Chances, Ty\'s correct age is 27');
    console.log(ageAnswer);
  } else if (parseInt(ageAnswer) === age) {
    alert ('Taiwan is' + age + '! Great guess.');
    correctAnswers += 1;
    console.log(ageAnswer);
    break;
  } else if (parseInt(ageAnswer) > age) {
    alert('Sorry that is too high, Guess again.');
    console.log(ageAnswer);
  } else if (parseInt(ageAnswer) < age) {
    alert('That answer is too low! try again');
    console.log(ageAnswer);
  }
}

var city = ['chicago ', 'miami ', 'fort lauderdale ', 'peoria ', 'seattle ', 'tempe '];
var guesses = 0;

while (guesses < 7) {
  var cityAnswer = prompt('What cities have Taiwan lived?').toLowerCase();
  for (var i = 0; i < city.length; i++) {
    if (cityAnswer === city[i]) {
      alert('You got it Right!' + city);
      correctAnswers += 1;
      console.log(cityAnswer);
      guesses = 7;
      break;
    }
  }
  if (guesses !== 7){
    alert('You got it wrong!');
  }
  guesses++;
}
if (guesses >= 7) {
  alert('You have ran out of guesses!' + city);
  console.log(cityAnswer);
}

alert('I hope you enjoyed the Game, ' + userName + '. You got ' + correctAnswers + ' out of 7 questions correct.');
