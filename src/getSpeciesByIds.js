const data = require('../data/zoo_data');

const { species } = data;

// console.log(species);

function getSpeciesByIds(ids) {
  const getId = species.filter((spe) => spe.id === ids);
  return getId;
}
// const getId = species.map((spe) => `${spe.id} ${spe.location} ${spe.availability} ${spe.name}
// ${spe.popularity}  ${spe.residents}`);
// // console.log(getId);

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
