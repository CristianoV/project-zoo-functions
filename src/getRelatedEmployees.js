const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((nome) => nome.managers.some((ids) => ids === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const nomesObj = employees.filter((empregados) =>
      empregados.managers.some((nome) => nome === managerId));
    return nomesObj.map((nome) => `${nome.firstName} ${nome.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
