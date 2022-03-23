const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(entrants) {
  return entrants.reduce((acc, cur) => {
    if (cur.age < 18) {
      acc.child += 1;
    } else if (cur.age < 50) {
      acc.adult += 1;
    } else acc.senior += 1;
    return acc;
  },
  { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
