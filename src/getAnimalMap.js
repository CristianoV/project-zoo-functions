const data = require('../data/zoo_data');

const { species } = data;

const NE = species.filter((animais) => animais.location === 'NE');
const NW = species.filter((animais) => animais.location === 'NW');
const SE = species.filter((animais) => animais.location === 'SE');
const SW = species.filter((animais) => animais.location === 'SW');

const animais = {
  NE: NE.map((animaisFiltrados) => animaisFiltrados.name),
  NW: NW.map((animaisFiltrados) => animaisFiltrados.name),
  SE: SE.map((animaisFiltrados) => animaisFiltrados.name),
  SW: SW.map((animaisFiltrados) => animaisFiltrados.name),
};

const animaisOrdenadosOuNao = (parametros) => {
  const invocandoAnimais = (acc, element) => {
    const procurandoAnimais = species.find((animail) => animail.name === element.name);
    const animaisEncontrados = procurandoAnimais.residents.map((residentes) => residentes.name);
    if (parametros.sorted) {
      const objeto = { [element.name]: animaisEncontrados.sort() };
      acc[element.location].push(objeto);
      return acc;
    }
    const objeto = { [element.name]: animaisEncontrados };
    acc[element.location].push(objeto);
    return acc;
  }; return species.reduce(invocandoAnimais, { NE: [], NW: [], SE: [], SW: [],
  });
};

const animalPorSexo = (parametros) => {
  const invocandoAnimaisPorSexo = (acc, element) => {
    const procurandoAnimais = species.find((animal) => animal.name === element.name);
    if (parametros.sex) {
      const sexo = procurandoAnimais.residents.filter((animal) => animal.sex === parametros.sex);
      const animaisEncontrados = sexo.map((residentes) => residentes.name);
      if (parametros.sorted) {
        const objeto = { [element.name]: animaisEncontrados.sort() };
        acc[element.location].push(objeto);
        return acc;
      }
      const objeto = { [element.name]: animaisEncontrados };
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
    return animaisOrdenadosOuNao(options);
  } return animaisOrdenadosOuNao(options);
}

module.exports = getAnimalMap;
