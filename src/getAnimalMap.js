const data = require('../data/zoo_data');

const { species } = data;

const animais = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};
// invoca os animais com nomes
const invocandoAnimais = (acc, element) => {
  const teste = species.find((animais1) => animais1.name === element.name);
  const teste1 = teste.residents.map((residentes) => residentes.name);
  const objeto = { [element.name]: teste1 };
  acc[element.location].push(objeto);
  return acc;
}; const location = species.reduce(invocandoAnimais, { NE: [], NW: [], SE: [], SW: [] });
// invoca os animais com nomes e em ordem alfabética
const invocandoAnimaisSorted = (acc, element) => {
  const teste = species.find((animais1) => animais1.name === element.name);
  const teste1 = teste.residents.map((residentes) => residentes.name);
  const objeto = { [element.name]: teste1.sort() };
  acc[element.location].push(objeto);
  return acc;
}; const locationSorted = species.reduce(invocandoAnimaisSorted, { NE: [], NW: [], SE: [], SW: [],
});

// invoca os animais por sexo, mas com problemas
const animalPorSexo = (parametros) => {
  const invocandoAnimaisPorSexo = (acc, element) => {
    const teste = species.find((animais1) => animais1.name === element.name);
    if (parametros.sex) {
      const sexo = teste.residents.filter((secho) => secho.sex === parametros.sex);
      const teste1 = sexo.map((residentes) => residentes.name);
      if (parametros.sorted) {
        const objeto = { [element.name]: teste1.sort() };
        acc[element.location].push(objeto);
        return acc;
      }
      const objeto = { [element.name]: teste1 };
      acc[element.location].push(objeto);
      return acc;
    }
  }; return species.reduce(invocandoAnimaisPorSexo, { NE: [], NW: [], SE: [], SW: [],
  });
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return animais;
  } if (options.sex) {
    return animalPorSexo(options);
  } if (options.sorted) {
    return locationSorted;
  } return location;
}

module.exports = getAnimalMap;
