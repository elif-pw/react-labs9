import { EMPLOYEES_LOADED, ADD_EMPLOYEE } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: {
      employee
    }
  };
}