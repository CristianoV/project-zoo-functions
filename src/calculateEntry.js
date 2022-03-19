const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const pessoas = entrants;
  const arroz = pessoas.filter((nome) => nome);
  const crianças = arroz.filter((teste) => teste.age < 18);
  const adultos = arroz.filter((teste) => teste.age >= 18 && teste.age < 50);
  const idoso = arroz.filter((teste) => teste.age >= 50);
  return { adult: adultos.length, child: crianças.length, senior: idoso.length };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (entrants.length === undefined) {
    return 0;
  }
  const resultado = countEntrants(entrants);
  const adulto = resultado.adult * data.prices.adult;
  const criança = resultado.child * data.prices.child;
  const senhor = resultado.senior * data.prices.senior;
  return adulto + criança + senhor;
}

// const arroz = [
//   { name: 'Floki', age: 5 },
//   { name: 'Dolly', age: 5 },
//   { name: 'Aquiles', age: 9 },
//   { name: 'Cristiano', age: 18 },
//   { name: 'Cintia', age: 18 },
//   { name: 'Marcia', age: 50 },
// ];

// console.log(calculateEntry(arroz));
// console.log(calculateEntry());
// console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
