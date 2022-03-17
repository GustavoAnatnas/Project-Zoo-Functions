const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  return employees.some((empregado) => empregado.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const nomeEmpregados = employees.filter((empregados) => empregados.managers.includes(managerId));
  return nomeEmpregados.map((emp) => `${emp.firstName} ${emp.lastName}`);
}
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
