const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  const firstAnimalId = employees.find((emp) => emp.id === id).responsibleFor[0];
  const resiAnimal = species.find((animal) => animal.id === firstAnimalId).residents;
  const olderThan = resiAnimal.sort((a, b) => b.age - a.age);
  return [`Nome: ${olderThan[0].name}, Sexo: ${olderThan[0].sex}, Idade:${olderThan[0].age}`];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
