'use strict'
var userName = prompt("Bonjour! What's your name?");
alert("ok " + userName + ", let's play a guessing game! Answer yes or no to the following questions:");

//functions :

function congratulate() {
  alert("You're right " + userName +"!");
}
function wrongAnswer() {
  alert("Sorry, " + userName+ ", you're wrong!");
}
function wrongInput() {
  alert("Sorry, " + userName + " I didn't quite get that...");
}

//Quizz :
var questionOne = prompt("I went to nursing school");
console.log("user input: " + questionOne);
if (questionOne.toLowerCase() === 'y' || questionOne.toLowerCase() == 'yes') {
  congratulate();
}else if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  wrongAnswer();
  alert("I went to nursing school in France!");
}else {
  console.log("user input: " + questionOne);
  wrongInput();
  alert("The answer was yes!");
}

var questionTwo = prompt("I am allergic to bananas");
console.log("user input: " + questionTwo);
if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y') {
  congratulate();
}else if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
  console.log("user input: " + questionTwo);
  wrongAnswer();
  alert("I'm actually pretty allergic to bananas. Weird, eh.");
}else {
  console.log("user input: " + questionTwo);
  wrongInput();
  alert("As weird as it sounds, I am indeed allergic to bananas");
}

var questionThree = prompt("I speak 4 languages");
console.log("user input: " + questionThree);
if (questionThree.toLowerCase() === 'yes'|| questionThree.toLowerCase() === 'y' ) {
  congratulate();
}else if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
  wrongAnswer();
  alert("I speak French, English, German and Latin!");
}else {
  wrongInput();
  alert("The answer was yes, I speak French, English, German and Latin");
  }

var questionFour = prompt("I've lived in 6 countries");
console.log("user input: " + questionFour);
if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  wrongAnswer();
  alert("I've actually lived in 5 : France, Germany, England, Canada and the US");
}else if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
  congratulate();
}else {
  wrongInput();
  alert("The answer was no, I lived in 5 countries : France, Germany, England, Canada and the US");
}

var questionFive = prompt("In my spare time I golf")
console.log("user input: " + questionFive);
if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  wrongAnswer();
  alert("I don't golf, but I read a lot!")
}else if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase()==='n') {
  congratulate();
}else {
  wrongInput();
  alert("The answer was no, I do not golf, I read!");
}
