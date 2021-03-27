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

let mbiCalculator = (wm, hm, wj, hj) => {
	let bmiM = (wm / hm ** 2).toFixed(2);
	let bmiJ = (wj / (hj * hj)).toFixed(2);
	if (bmiM > bmiJ) {
		return `Mark's BMI ${bmiM} is higher than John's ${bmiJ}!`;
	} else {
		return `John's BMI ${bmiJ} is higher than Mark's ${bmiM}!`;
	}
}

console.log(mbiCalculator(78, 1.69, 92, 1.95));
console.log(mbiCalculator(95, 1.88, 85, 1.76));