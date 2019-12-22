import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'




import { loadEmployees } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if(!this.props.empLoaded)
    {
    this.props.loadEmployees();
  }
  }
  
  render() {
    const { loading,employees,user } = this.props;

    
    if(loading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h1 style={{position:"absolute", right:"50px"}}>{user.fullName}</h1>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee.id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    empLoaded: state.empLoaded,
    loading: state.loading,
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
 loadEmployees: ()=> dispatch(loadEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)