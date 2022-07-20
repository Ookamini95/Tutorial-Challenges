// BMI = mass / height ** 2 = mass / (height * height)

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.



const markHeight = 1.69;
const markWeight = 78;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight ** 2)
const johnBMI = johnWeight / (johnHeight ** 2)

const markHigherBMI = markBMI > johnBMI

console.log(markBMI + " BMI", "\n" + johnBMI + " BMI");

console.log(markHigherBMI);