// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// let weightsM = 78;
// let heightM = 1.69;
// let weightsJ = 92;
// let heightJ = 1.95;

// let weightsM = 95;
// let heightM = 1.88;
// let weightsJ = 85;
// let heightJ = 1.76;

// let mbiCalculator = (wm, hm, wj, hj) => {
// 	let bmiM = (wm / hm ** 2).toFixed(2);
// 	let bmiJ = (wj / (hj * hj)).toFixed(2);
// 	let markhigherBMI = bmiM > bmiJ;
// 	return `Mark: ${bmiM}
// 	 	John: ${bmiJ}
// 	  Mark has a higher BMI than John: ${markhigherBMI}`;
// }

// console.log(`Data1: ${mbiCalculator(78, 1.69, 92, 1.95)}`);
// console.log(`Data2: ${mbiCalculator(95, 1.88, 85, 1.76)}`);

//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = (massMark / heightMark ** 2).toFixed(2);
// const BMIJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);
// const markHigherBMI = BMIMark > BMIJohn;

// if (BMIMark > BMIJohn) {
// 	console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
// 	console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }

// let mbiCalculator = (wm, hm, wj, hj) => {
// 	let bmiM = (wm / hm ** 2).toFixed(2);
// 	let bmiJ = (wj / (hj * hj)).toFixed(2);
// 	if (bmiM > bmiJ) {
// 		return `Mark's BMI ${bmiM} is higher than John's ${bmiJ}!`;
// 	} else {
// 		return `John's BMI ${bmiJ} is higher than Mark's ${bmiM}!`;
// 	}
// }

// console.log(mbiCalculator(78, 1.69, 92, 1.95));
// console.log(mbiCalculator(95, 1.88, 85, 1.76));


//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


let DolphinsAve = (96 + 108 + 89) / 3;
let KoalasAve = (88 + 91 + 110) / 3;

let DolphinsB1Ave = (97 + 112 + 101) / 3;
let KoalasB1Ave = (109 + 95 + 123) / 3;

let DolphinsB2Ave = (97 + 112 + 101) / 3;
let KoalasB2Ave = (109 + 95 + 106) / 3;

