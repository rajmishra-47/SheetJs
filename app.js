
const XLSX = require('xlsx');

const workbook = XLSX.readFile('test-1.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const options = {
  raw: false, 
};

const data = XLSX.utils.sheet_to_json(worksheet, options);

const values = data.map(obj => {

  const value = obj['Data-1'];

  if (typeof value === 'string' && value.includes('%')) {
    return value;
  } 
  else if (!isNaN(value)) {
    return parseFloat(value);
  } 
  else {
    return value; 
  }
});

console.log(values);

