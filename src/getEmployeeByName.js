const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } return employees.find((person) => person.firstName === employeeName
   || person.lastName === employeeName);
}

module.exports = getEmployeeByName;
