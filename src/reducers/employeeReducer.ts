import { EmployeeStore } from '../store';
import { asyncReducer, emptyAPIResult, mapReducersArray } from '../lib/redux/reducers';
import { employeeActions } from '../actions/actionTypes';

const INITIAL_STATE: EmployeeStore = {
  signedInEmployee: emptyAPIResult()
};

export default mapReducersArray<EmployeeStore>([
  asyncReducer(employeeActions.signIn, 'signedInEmployee')
], INITIAL_STATE);
