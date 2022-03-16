const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalCorreto = species.find((element) => element.name === animal);
  const { residents } = animalCorreto;
  const idade = residents.every((element) => element.age > age);
  return idade;
}

module.exports = getAnimalsOlderThan;
