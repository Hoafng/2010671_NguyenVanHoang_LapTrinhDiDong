// Function to calculate the average human age of dogs
function calcAverageHumanAge(ages) {
    // 1. Convert dog ages to human ages
    const humanAges = ages.map(dogAge => {
        return dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4;
    });

    // 2. Exclude dogs that are less than 18 human years old
    const adultHumanAges = humanAges.filter(age => age >= 18);

    // 3. Calculate the average human age of all adult dogs
    const averageHumanAge = adultHumanAges.length > 0
        ? adultHumanAges.reduce((sum, age) => sum + age, 0) / adultHumanAges.length
        : 0;

    return averageHumanAge;
}

// Test data 1
const data1 = [5, 2, 4, 1, 15, 8, 3];
console.log('Average human age for Data 1:', calcAverageHumanAge(data1));

// Test data 2
const data2 = [16, 6, 10, 5, 6, 1, 4];
console.log('Average human age for Data 2:', calcAverageHumanAge(data2));
