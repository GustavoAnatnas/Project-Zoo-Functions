const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  return employees.find((name) => name.firstName === employeeName || 
  name.lastName === employeeName);
}

module.exports = getEmployeeByName;
