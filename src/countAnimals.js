const data = require('../data/zoo_data');

const { species } = data;

function verificacao(acc, element) {
  acc[element.name] = element.residents.length;
  return acc;
}

function countAnimals(animal) {
  if (!animal) {
    const todosOsAnimais = species.reduce(verificacao, {});
    return todosOsAnimais;
  }
  if (animal) {
    const animalEncontrado = species.filter((NomeEspecie) => NomeEspecie.name === animal.specie);
    const quantidadeDeAnimais = animalEncontrado.find((animais) => animais.residents);
    const { residents } = quantidadeDeAnimais;
    if (animal.sex) {
      const animaisPorSexo = residents.filter((Sexo) => Sexo.sex === animal.sex);
      return animaisPorSexo.length;
    }
    return residents.length;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
