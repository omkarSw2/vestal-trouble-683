const fs = require('fs');

// Read the data frtoom db.js
const filePath = 'db.js';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Remove the "username" property from each object
    jsonData.forEach(item => {
      delete item.username;
    });

    // Convert the modified data back to JSON string
    const modifiedData = JSON.stringify(jsonData, null, 2);

    // Write the modified data back to db.js
    fs.writeFile(filePath, modifiedData, 'utf8', err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Data updated successfully.');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
