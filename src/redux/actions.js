import { EMPLOYEES_LOADED, ADD_EMPLOYEE, FETCHING_EMPLOYEES_ERROR, FETCHING_EMPLOYEES } from "./constants";

export const employeesLoaded = employees => {
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

export const fetchingEmployees=(employees)=>{
  return{
    type: FETCHING_EMPLOYEES,
    payload: {}
  };
};

export const fetchingEmployeesError=(employees)=>{
  return {
    type: FETCHING_EMPLOYEES_ERROR,
    payload:{
      error
    }
  };
};