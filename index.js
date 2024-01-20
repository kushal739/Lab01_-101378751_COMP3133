// Import required modules
const fs = require('fs');
const csv = require('csv-parser');

// Define the file paths
const canadaFilePath = 'canada.txt';
const usaFilePath = 'usa.txt';
const inputCsvFilePath = 'input_countries.csv';

// Q-1. Delete canada.txt and usa.txt if they already exist
if (fs.existsSync(canadaFilePath)) {
  fs.unlinkSync(canadaFilePath);
}

if (fs.existsSync(usaFilePath)) {
  fs.unlinkSync(usaFilePath);
}

// Q-2 Filter data of Canada and write data to canada.txt
fs.createReadStream(inputCsvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    if (row.Country === 'Canada') {
      fs.appendFileSync(canadaFilePath, JSON.stringify(row) + '\n');
    }
  })
  .on('end', () => {
    console.log('Canada data written to canada.txt');
  });

// Q-3.s Filter data of United States and write data to usa.txt
fs.createReadStream(inputCsvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    if (row.Country === 'United States') {
      fs.appendFileSync(usaFilePath, JSON.stringify(row) + '\n');
    }
  })
  .on('end', () => {
    console.log('USA data written to usa.txt');
  });
