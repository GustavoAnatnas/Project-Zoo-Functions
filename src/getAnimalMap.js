const data = require('../data/zoo_data');

const { species } = data;
function listAnimals(a, specie) {
  return specie.residents.reduce((acc, cur) => {
    if (a.sex && cur.sex === a.sex) acc.push(cur.name);
    if (a.sex === undefined) acc.push(cur.name);
    return acc;
  }, []);
}

function getAnimalMap(param = { includeNames: false, sorted: false, sex: false }) {
  const locAnimal = species.reduce((objList, specie) => {
    if (param.includeNames) {
      const animalList = listAnimals(param, specie);
      if (param.sorted) {
        animalList.sort();
      }
      objList[specie.location].push({ [specie.name]: animalList });
    } else {
      objList[specie.location].push(specie.name);
    }
    return objList;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return locAnimal;
}

module.exports = getAnimalMap;
