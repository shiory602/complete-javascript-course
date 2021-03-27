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

let mbiCalculator = (wm, hm, wj, hj) => {
	let bmiM = (wm / hm ** 2).toFixed(2);
	let bmiJ = (wj / (hj * hj)).toFixed(2);
	let markhigherBMI = bmiM > bmiJ;
	return `Mark: ${bmiM}
	 	John: ${bmiJ}
	  Mark has a higher BMI than John: ${markhigherBMI}`;
}

console.log(`Data1: ${mbiCalculator(78, 1.69, 92, 1.95)}`);
console.log(`Data2: ${mbiCalculator(95, 1.88, 85, 1.76)}`);