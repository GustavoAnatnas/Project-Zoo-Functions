const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  const firstAnimalId = employees.find((emp) => emp.id === id).responsibleFor[0];
  const resiAnimal = species.find((animal) => animal.id === firstAnimalId).residents;
  const olderThan = resiAnimal.sort((a, b) => b.age - a.age);
  return [olderThan[0].name, olderThan[0].sex, olderThan[0].age];
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
