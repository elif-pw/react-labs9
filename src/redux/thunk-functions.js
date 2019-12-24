import {
    employeesLoaded,
    fetchingEmployees,
    fetchingEmployeesError,
    loginFail,
    loginSuccess
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

export const login = name => {
    return dispatch => {
        return fetch("http://localhost:3004/users")
            .then(data => data.json())
            .then(users => {
                const user = users.find(user => user.username === name);
                if (user !== undefined) {
                    dispatch(loginSuccess(user));
                } else {
                    dispatch(loginFail(name));
                }
            });
    };
};