import { EMPLOYEES_LOADED, ADD_EMPLOYEE, FETCHING_EMPLOYEES, FETCHING_EMPLOYEES_ERROR } from "./constants";

export const initialState = {
  employees: [],
  isLoaded: false,
  isFetching:false,
  error:null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return {
        ...state,
        employees,
        isLoaded: true,
        isFetching: false
      };
    }
    case ADD_EMPLOYEE: {
      const { employee } = action.payload;
      return {
        ...state,
        employees: [...state.employees, employee]
      };
    }
    case FETCHING_EMPLOYEES:{
      return { ...state, isFetching: true, error: null };
    }
    case FETCHING_EMPLOYEES_ERROR:{
      const error = action.payload;
      return { ...state, isFetching: false, error };
    }
    default:
      return state;
  }
};

export default appReducer;
