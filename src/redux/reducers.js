import { EMPLOYEES_LOADED,EMPLOYEE_ADD,EMPLOYEES_LOADING,EMPLOYEES_ERROR,USER_LOGGING } from './constants';

export const initialState = {
  employees: [],
  empLoaded: false,
  error: null,
  loading:false,
  user:null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees,empLoaded: true,error: false,loading:false });
    }
    case EMPLOYEES_LOADING:{
      return Object.assign({},state,{loading:true,error:null});
    }
    case EMPLOYEES_ERROR:{
      const {error}=action.payload;
      return Object.assign({},state,{loading:true,error});
    }
    case EMPLOYEE_ADD:{
      const{newemployee}=action.payload;
      const newemployees=[...state.employees,newemployee]
      return Object.assign({},state,{employees: newemployees});
      
    }
    case USER_LOGGING:{
      const user=action.payload;
      return Object.assign({},state,{user});
    }
    default:
        return state
  }
}

export default appReducer;