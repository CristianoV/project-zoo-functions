const data = require('../data/zoo_data');

function getAnimalMap(options) {
  const animais = {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  };
  if (!options || options.sex || options.sorted === true) {
    return animais;
  }
}

module.exports = getAnimalMap;
