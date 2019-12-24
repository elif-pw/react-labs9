import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//import { employeesLoaded } from '../redux/actions'
import { fetchEmployees } from "../redux/thunk-functions";

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoading: false,
  //   }
  // }

  componentDidMount() {
    if(!this.props.isLoaded) {
      // this.setState({ isLoading: true });
      // fetch('http://localhost:3004/employees')
      //     .then((data) => data.json())
      //     // Without Redux
      //     // .then((employees) => this.setState({ employees, isLoading: false }));
      //     // With Redux
      //     .then((employees) => {
      //       this.props.employeesLoaded(employees);
      //       this.setState({ isLoading: false });
      //     });
      this.props.fetchEmployees();
    }
  }

  render() {
    // const { isLoading } = this.state;
    const { employees } = this.props;
    const {isLoading}=this.props.isFetching;
    const {user}=this.props ;

    if(isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div>
        {user !== null ?
            <div>
              <div align="right">
                <b> Logged in as {user.full_name} </b>
              </div>
              <h1>Employees List:</h1>
              {employees && employees.map((employee => <EmployeeLine
                  key={employee._id} employee={employee}/>))}
              <Link to="/new">
                <button>Create employee</button>
              </Link>
            </div> :
            <div align="center">
              <h1> Please login</h1>
            </div>
        }

      </div>
    );

  }
}

const mapStateToProps = (state /* , ownProps*/) => {
  return {
    employees: state.employees,
    isLoaded: state.isLoaded,
    isFetching: state.isFetching,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  //employeesLoaded: employees => dispatch(employeesLoaded(employees))
  fetchEmployees: ()=> dispatch(fetchEmployees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageEmployeesList));