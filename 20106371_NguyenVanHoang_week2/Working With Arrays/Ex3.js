// Arrow function with chaining to calculate the average human age of dogs
const calcAverageHumanAge = ages =>
    ages
        .map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4) // Convert dog age to human age
        .filter(humanAge => humanAge >= 18) // Exclude ages less than 18
        .reduce((sum, age, _, { length }) => sum + age / length, 0); // Calculate average

// Test data 1
const data1 = [5, 2, 4, 1, 15, 8, 3];
console.log('Average human age for Data 1:', calcAverageHumanAge(data1));

// Test data 2
const data2 = [16, 6, 10, 5, 6, 1, 4];
console.log('Average human age for Data 2:', calcAverageHumanAge(data2));
