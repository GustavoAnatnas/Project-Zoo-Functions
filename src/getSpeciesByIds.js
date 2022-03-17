const data = require('../data/zoo_data');

const { species } = data;

// console.log(species);

function getSpeciesByIds(...ids) {
  const coletaEspecies = ids.map((id) => species.find((spe) => spe.id === id));
  return coletaEspecies;
}
// const getId = species.map((spe) => `${spe.id} ${spe.location} ${spe.availability} ${spe.name}
// ${spe.popularity}  ${spe.residents}`);
// // console.log(getId);

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
