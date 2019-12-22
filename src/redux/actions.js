import { EMPLOYEES_LOADED, EMPLOYEE_ADD,EMPLOYEES_LOADING,EMPLOYEES_ERROR } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const employeeAdd = (newemployee)=>{
  return{
    type: EMPLOYEE_ADD,
    payload:{
      newemployee
    }
  }
}
  export const employeesLoadingError=(error)=>{
    return{
      type: EMPLOYEES_ERROR,
      payload:{
        error
      }
    }
  }

  export const employeesLoadingEmployees=()=>{
    return{
      type: EMPLOYEES_LOADING
      }
    }
  

export const loadEmployees=()=>{
  return(dispatch)=>{
    dispatch(employeesLoadingEmployees())
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    .then(
    (employees) => dispatch(employeesLoaded(employees)),
    (error)=>dispatch(employeesLoadingError(error))
    );
  };
  }
