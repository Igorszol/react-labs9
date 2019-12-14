import { EMPLOYEES_LOADED,EMPLOYEE_ADD } from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case EMPLOYEE_ADD:{
      const{newemployee}=action.payload;
      const newemployees=[...state.employees,newemployee]
      return Object.assign({},state,{newemployees});
    }
    default:
        return state
  }
}

export default appReducer;