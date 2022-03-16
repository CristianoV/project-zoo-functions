const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((animal) => ids.some((id) => id === animal.id));
}

module.exports = getSpeciesByIds;
