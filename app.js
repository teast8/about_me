alert('Whats up people');

var userName = prompt('Welcome everyone, you just entered Ty\s dope ass page, What is your name?');

alert('Hi, ' + userName + ', welcome! Let\'s see if you can answer some questions about Ty! Please answer yes/no or y/n.');

var answer1 = prompt('Did Ty Play Soccer in College?');

if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  alert('You got it right, ' + userName + '! Ty Did not play soccer in college.');
} else {
  alert('Sorry, ' + userName + ', you got it wrong. Ty did not play soccer.');
}

var answer2 = prompt('Does Ty have 2 siblings?');

if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  alert('You got it right, ' + userName + '! Ty does have 2 siblings.');
} else {
  alert('Wrong, ' + userName + ', try again next time. Ty has 2 siblings.');
}

var answer3 = prompt('What is Ty favorite color?');

if (answer3.toLowerCase() === 'red' || answer3.toLowerCase() === 'green') {
  alert('You got it right, ' + userName + '! You picked to one of Ty favorite color.');
} else {
  alert('Sorry better luck next time, ' + userName + '!');
}

var answer4 = prompt('What is Ty favorite food?');

if (answer4.toLowerCase() === 'seafood' || answer4.toLowerCase() === 'chinese food') {
  alert('You got it right, ' + userName + '! Great Job, Ty loves seafood and Chinese food.');
} else {
  alert('Wrong, ' + userName + '! Ty hates vegetables.');
}

var answer5 = prompt('Did Ty run track as a kid?');

if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  alert('Great Job, ' + userName + '! You managed to guess the correct answer.');
} else {
  alert('Sorry, ' + userName + ', Ty has never stepped foot on a track.');
}
