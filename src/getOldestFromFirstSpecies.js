const data = require('../data/zoo_data');

const { employees, species } = data;

const object = (id) => {
  const verificacaoPessoa = employees.filter((empregados) =>
    id.some((Pessoas) => Pessoas === empregados.id));
  const idDosAnimais = verificacaoPessoa.map((nom) => nom.responsibleFor);
  const ImplementacaoDosAnimais = idDosAnimais.reduce(((acc, element) => {
    const animais = element.find((ids) =>
      species.map((animal) => animal.id === ids));
    acc.push(animais);
    return acc;
  }), []);
  const arrayDosAnimais = ImplementacaoDosAnimais.map((test) =>
    species.find((animal) => animal.id === test));
  console.log(arrayDosAnimais);
  const resultado = arrayDosAnimais.map((animal) => {
    const consolidando = animal.residents.sort((a, b) => b.age - a.age)[0];
    return Object.values(consolidando);
  });
  return resultado;
};

function getOldestFromFirstSpecies(id) {
  if (typeof id === 'object') {
    return object(id);
  }
  const trabalhador = employees.filter((teste) => teste.id === id);
  const animaisCuidados = trabalhador.map((animais) => animais.responsibleFor);
  const animal = species.filter((bichos) =>
    animaisCuidados.find((teste) => teste[0] === bichos.id));
  const nomes = animal.find((pet) => pet);
  const teste = nomes.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(teste);
}

// const arroz = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';

// const feijao = [
//   'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//   '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   'c1f50212-35a6-4ecd-8223-f835538526c2',
//   'b0dc644a-5335-489b-8a2c-4e086c7819a2',
// ];

// console.log(getOldestFromFirstSpecies(arroz));
// console.log(getOldestFromFirstSpecies(feijao));
module.exports = getOldestFromFirstSpecies;
