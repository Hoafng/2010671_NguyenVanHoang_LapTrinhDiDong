// Function to check dogs' ages and classify them as adult or puppy
function checkDogs(dogsJulia, dogsKate) {
    // 1. Create a shallow copy of Julia's array and remove the ages of the cats
    const correctedJuliaDogs = dogsJulia.slice(); // Create a shallow copy of Julia's array
    correctedJuliaDogs.splice(0, 2); // Remove the first two elements (cats)
    correctedJuliaDogs.splice(-2); // Remove the last two elements (cats)

    // 2. Combine Julia's corrected data with Kate's data
    const allDogs = correctedJuliaDogs.concat(dogsKate);

    // 3. Log to the console whether each dog is an adult or a puppy
    allDogs.forEach((age, index) => {
        const dogType = age >= 3 ? 'adult' : 'puppy';
        console.log(`Dog number ${index + 1} is an ${dogType}, and is ${age} years old`);
    });
}

// Test data 1
const juliaDogs1 = [3, 5, 2, 12, 7];
const kateDogs1 = [4, 1, 15, 8, 3];
console.log('Test Data 1:');
checkDogs(juliaDogs1, kateDogs1);

// Test data 2
const juliaDogs2 = [9, 16, 6, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];
console.log('Test Data 2:');
checkDogs(juliaDogs2, kateDogs2);
