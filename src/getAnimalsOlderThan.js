const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  return species.find((spe) => spe.name === animal).residents.every((id) => id.age >= age);
}
console.log(species);
module.exports = getAnimalsOlderThan;
