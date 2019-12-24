import {
    employeesLoaded,
    fetchingEmployees,
    fetchingEmployeesError
} from "./actions";

export const fetchEmployees=()=>{
    return dispatch=>{
        dispatch(fetchingEmployees());
        return fetch('http://localhost:3004/employees')
            .then((data) => data.json())
            .then(
                employees=>dispatch(employeesLoaded(employees)),
                error=>dispatch(fetchingEmployeesError(error))
            );
    };

};