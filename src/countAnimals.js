const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(...animal) {
  if (animal.length === 0) {
    const animals = {};
    species.forEach((spe) => { animals[spe.name] = spe.residents.length; });
    return animals;
  }
  if (animal[0].sex) {
    return species.find((spe) => spe.name === animal[0].specie)
      .residents.filter((sex) => sex.sex === animal[0].sex).length;
  }
  return species.find((spe) => spe.name === animal[0].specie).residents.length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));
module.exports = countAnimals;
