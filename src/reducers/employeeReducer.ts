import { EmployeeStore } from '../store';
import { asyncReducer, emptyAPIResult, mapReducersArray } from '../lib/redux/reducers';
import { employeeActions } from '../actions/actionTypes';

const INITIAL_STATE: EmployeeStore = {
  signedInManager: emptyAPIResult()
};

export default mapReducersArray<EmployeeStore>([
  asyncReducer(employeeActions.managerSignIn, 'signedInManager')
], INITIAL_STATE);
