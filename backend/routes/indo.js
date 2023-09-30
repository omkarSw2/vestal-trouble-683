const fs = require('fs'); // Required for file operations
const data = require('./db'); // Import data from db.js
console.log(data)

// Function to add random elements to data
function addRandomElements(data) {
    // Add a random username, comments, and likes to each entry
    data.forEach(entry => {
        entry.username = generateRandomUsername();
        entry.comments = getRandomNumber(0, 10);
        entry.likes = getRandomNumber(0, 10);
    });
}

// Generate a random username (you can customize this function)
function generateRandomUsername() {
    const usernames = ["user1", "user2", "user3"];
    const randomIndex = getRandomNumber(0, usernames.length - 1);
    return usernames[randomIndex];
}

// Generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add random elements to the imported data
addRandomElements(data);

// Export the updated data back to db.js (optional)
const updatedData = `module.exports = ${JSON.stringify(data, null, 4)};`;

fs.writeFileSync('./db.js', updatedData);

// console.log('Updated data:', dbData);
