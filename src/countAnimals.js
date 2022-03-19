const data = require('../data/zoo_data');

const { species } = data;

function verificacao(acc, element) {
  acc[element.name] = element.residents.length;
  return acc;
}

function countAnimals(animal) {
  if (!animal) {
    const normal = species.reduce(verificacao, {});
    return normal;
  }
  if (animal) {
    const animalEncontrado = species.filter((nome) => nome.name === animal.specie);
    const quantidadeDeAnimais = animalEncontrado.find((teste) => teste.residents);
    const { residents } = quantidadeDeAnimais;
    if (animal.sex) {
      const animaisPorSexo = residents.filter((arroz) => arroz.sex === animal.sex);
      return animaisPorSexo.length;
    }
    return residents.length;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
