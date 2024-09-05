//Ex1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
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

//Ex2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"


function BMI(m, h) {
    return m / h ** 2;
}

console.log("Ex1: ");

let m1_Marks = 78;
let h1_Marks = 1.69;
let m1_John = 92;
let h1_John = 1.95;
let markHigherBMI1 = true;


let BMI1_Mark = BMI(m1_Marks, h1_Marks);
let BMI1_John = BMI(m1_John, h1_John);
console.log("BMI1_Mark: ", BMI1_Mark);
console.log("BMI1_John: ", BMI1_John);
if (BMI1_Mark > BMI1_John)
    markHigherBMI1 = true;
else
    markHigherBMI1 = false;

if (markHigherBMI1 == true)
    console.log("Mark's BMI1 (", BMI1_Mark, ") is higher than John (", BMI1_John, ")");
else
    console.log("John's BMI1 (", BMI1_John, ") is higher than Mark (", BMI1_Mark, ")");


let m2_Marks = 95;
let h2_Marks = 1.88;
let m2_John = 85;
let h2_John = 1.76;
let markHigherBMI2 = true;

let BMI2_Mark = BMI(m2_Marks, h2_Marks);
let BMI2_John = BMI(m2_John, h2_John);
if (BMI2_Mark > BMI2_John)
    markHigherBMI2 = true;
else
    markHigherBMI2 = false;

if (markHigherBMI2 == true)
    console.log("Mark's BMI2 (", BMI2_Mark, ") is higher than John (", BMI2_John, ")");
else
    console.log("John's BMI2 (", BMI2_John, ") is higher than Mark (", BMI2_Mark, ")");

//Ex3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

function Average(a, b, c) {
    return (a + b + c) / 3;
}

console.log("Ex3: ");

function Compare(Dolphins_Average, Koalas_Average) {
    console.log("Dolphins's Average Score: ", Dolphins_Average);
    console.log("Koalas's Average Score: ", Koalas_Average);
    if (Dolphins_Average < 100 || Koalas_Average < 100)
        console.log("No one is the winner");
    else
    if (Dolphins_Average > Koalas_Average)
        console.log("The winner is Dolphins~");
    else
    if (Dolphins_Average < Koalas_Average)
        console.log("The winner is Koalas~");
    else
        console.log("Draw~");
}


let Dolphins_Average1 = Average(96, 108, 89);
let Koalas_Average1 = Average(88, 91, 110);

let Dolphins_Average2 = Average(97, 112, 101);
let Koalas_Average2 = Average(109, 95, 123);

let Dolphins_Average3 = Average(97, 112, 101);
let Koalas_Average3 = Average(109, 95, 106);

console.log("Average Score 1: ");
Compare(Dolphins_Average1, Koalas_Average1)
console.log("Average Score 2: ");
Compare(Dolphins_Average2, Koalas_Average2)
console.log("Average Score 3: ");
Compare(Dolphins_Average3, Koalas_Average3)


//Ex4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

console.log("Ex4: ")

function tip(a) {
    let tip = 0;
    return tip = (a >= 50 && a <= 300) ? a * 0.15 : a * 0.2;
}

let bill = [275, 40, 430]

console.log("The bill was (", bill[0], "), the tip was  (", tip(bill[0]), ") and the total value: (", bill[0] + tip(bill[0]), ")");
console.log("The bill was (", bill[1], "), the tip was  (", tip(bill[1]), ") and the total value: (", bill[1] + tip(bill[1]), ")");
console.log("The bill was (", bill[2], "), the tip was  (", tip(bill[2]), ") and the total value: (", bill[2] + tip(bill[2]), ")");


//Part 2 - Ex1
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

console.log("Part 2 - Ex1: ")

let avg1_Dolphins = Average(44, 23, 71);
let avg2_Dolphins = Average(85, 54, 41);
let avg1_Koalas = Average(65, 54, 49);
let avg2_Koalas = Average(23, 34, 27);

function checkWinner(a, b) {
    if (a >= 2 * b)
        console.log("Dolphins win (", a, ") vs (", b, ")")
    else if (b >= a * a)
        console.log("Koalas win (", b, ") vs (", a, ")")
    else
        console.log("No team win!(", a, ") vs (", b, ")");

}

checkWinner(avg1_Dolphins, avg1_Koalas);
checkWinner(avg2_Dolphins, avg2_Koalas);

//Part 2 - Ex2
//Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

console.log("Part2 - Ex2: ");
let check = 100;
console.log("(Check) The bill was (", check, "), the tip was  (", tip(check), ") and the total value: (", check + tip(check), ")");
let bill_p2_ex2 = [125, 555, 44];
let tips = [tip(bill_p2_ex2[0]), tip(bill_p2_ex2[1]), tip(bill_p2_ex2[2])];
let totals = [bill_p2_ex2[0] + tips[0], bill_p2_ex2[1] + tips[1], bill_p2_ex2[2] + tips[2]];
for (let i = 0; i <= 2; i++) {
    console.log("Bills:", bill_p2_ex2[i], " Tips : ", tips[i], " Totals: ", totals[i]);
}


//Part 2- Ex3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
console.log("Part 2 - Ex3")
class user {
    constructor(fullname, mass, height) {
        this.fullname = fullname;
        this.mass = mass;
        this.height = height;
    }
}

let user_mark = new user('Mark Miller', 78, 1.96);
let user_john = new user('John Smith', 92, 1.95);

let BMI_user_mark = BMI(user_mark.mass, user_mark.height);
let BMI_user_john = BMI(user_john.mass, user_john.height);

function BMI_higher(a, b) {
    if (a > b)
        console.log("John's BMI (", a, ") is higher than Mark's BMI(", b, ")");
    else if (a < b)
        console.log("Mark's BMI (", b, ") is higher than John's BMI(", a, ")");
    else
        console.log("BMI same~");
}
BMI_higher(BMI_user_john, BMI_user_mark);

//Part 2 - Ex4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

console.log("Part 2 - Ex4: ");
let arr_bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let arr_tip = [];
let arr_total = [];

for (let j = 0; j <= 9; j++) {
    arr_tip.push(tip(arr_bill[j]));
    arr_total.push(arr_tip[j] + arr_bill[j]);
    console.log("Bills", j + 1, ":", arr_bill[j], " Tips : ", arr_tip[j], " Totals: ", arr_total[j]);
}

console.log("Bonus Part 2 - Ex4: ");

function calcAverage(a) {
    let sum = 0;
    for (let i = 0; i <= 9; i++) {
        sum += a[i];
    }
    return sum / 9;
}

console.log("Average of Bill: ", calcAverage(arr_bill));
console.log("Average of Tip: ", calcAverage(arr_tip));
console.log("Average of total: ", calcAverage(arr_total));

//Ex9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print &quot;... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ...&quot;
// Your tasks:
// 1. Create a function &#39;printForecast&#39; which takes in an array &#39;arr&#39; and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
console.log('Ex9: ');

function printForecast(a) {
    let newarr = [];
    for (let i = 0; i < a.length; i++) {
        let j = i + 1;
        newarr.push(a[i] + 'oC in ' + j + ' days');
    }
    return newarr.forEach((e) => console.log(e));

}
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
console.log("with Data 1: ");
printForecast(data1);
console.log("with Data 2: ");
printForecast(data2);