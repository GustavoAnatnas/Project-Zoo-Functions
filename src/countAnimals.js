const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  return species.find((spe) => spe.residents.find((resi) => resi.name === animal));
}

module.exports = countAnimals;
