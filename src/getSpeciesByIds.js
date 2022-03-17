const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((animal) => ids.some((id) => id === animal.id));
}

module.exports = getSpeciesByIds;

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
