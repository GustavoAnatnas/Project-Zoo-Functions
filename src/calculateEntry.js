const data = require('../data/zoo_data');

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
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const countEntrant = countEntrants(entrants);
  const child = countEntrant.child * 20.99;
  const adult = countEntrant.adult * 49.99;
  const senior = countEntrant.senior * 24.99;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
