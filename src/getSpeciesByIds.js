const data = require('../data/zoo_data');

const getSpeciesByIds = (...id) =>
  // eslint-disable-next-line array-callback-return
  data.species.filter((animal) => {
    const bichos = [];
    if (animal.id === id[0] || animal.id === id[1]) {
      bichos.push(animal);
      return bichos;
    }
  });

// console.log(
//   getSpeciesByIds(
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     'e8481c1d-42ea-4610-8e11-1752cfc05a46',
//   ),
// );

// console.log(data.species.residents);

module.exports = getSpeciesByIds;
