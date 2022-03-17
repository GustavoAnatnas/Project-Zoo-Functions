const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  const resid = species.find((spe) => spe.residents.find((resi) => resi.name || resi.age));
  if (animal === undefined) {
    return resid;
  }
}

module.exports = countAnimals;
