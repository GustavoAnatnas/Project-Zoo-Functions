const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((name) => name.firstName === employeeName
  || name.lastName === employeeName);
}
console.log(getEmployeeByName('Wilburn'));
module.exports = getEmployeeByName;
