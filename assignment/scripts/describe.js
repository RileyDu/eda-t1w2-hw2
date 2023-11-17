// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as a string.
// We check if the name variable is equal to the string 'Mary'`. It is not.
// This means we skip the console.log 'Hi, Mary!'. This leads us to automatically refer to the second log message as a default.
// We console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret and leave it unset.
// We make a variable called code and set it to the number 123.
// We check if the code variable is equal to 123. It is equal!!!
// We execute the function. We set the secret variable to the string of 'super' and double our code variable, resulting in 246.
// After excuting the function we then make our second check. Is the code variable (246) less than 250? It is!
// This means we also excute the second function, which changes our secret variable to 'duper' string.
// We console.log the secret variable. The console log will output duper.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and give it the boolean value of true.
// We make a variable called age and give it the number value of 34.
// We make a variable called zip and give it the number value of 55407.
// We check if the isStudent variable is true AND if the zip variable is greater than 80000.
// The first conditional is met, but not the second, so we move forward to the next check.
// We check if the isStudent variable is falso OR if the age variable is less than 30.
// Neither of these conditions are met so we move onto the next check.
// The next check is seeing if the isStudent variable is true. IT IS!! 
// We console log Welcome to Prime!
// Since our check went through, the code is done excuting. This means the default message about the weather is not used in this particular situation

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and colorTwo values need to be changed
// colorOne = blue & colorTwo = red
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

// FIX - add to the function, colorTwo is also purple
// colorTwo = 'pruple';
if (mix === true) {
  colorOne = 'purple';
}
*/



//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - || signifies OR it should be replaced with && to make sure BOTH requirements are fulfilled before excuting the function.
// if (temp > 39 && time >= 4)
// The statement is true and the console would log 'throw away the food!'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


// FIX - The function is written backwards. Right now it is checking if the minAge is less than or equal to the age. It needs to be checking if the age is greater or equal to the minAge. 
// The console logs then have to be switched. This sets up the function to default to 'no entry' when the minimum age is not met. It should look like this
// if(age >= minAge) {
//  console.log ('enter');
// } else {
//  console.log ('no entry');
// }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

