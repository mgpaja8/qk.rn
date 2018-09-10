import { EmployeeStore } from '../store';
import { asyncReducer, emptyAPIResult, mapReducersArray } from '../lib/redux/reducers';
import { employeeActions } from '../actions/actionTypes';

const INITIAL_STATE: EmployeeStore = {
  signedInManager: emptyAPIResult(),
  employee: emptyAPIResult(),
  checkIn: emptyAPIResult()
};

function signOut(store: EmployeeStore): EmployeeStore {
  return {
    ...store,
    employee: INITIAL_STATE.employee
  };
}

export default mapReducersArray<EmployeeStore>([
  asyncReducer(employeeActions.managerSignIn, 'signedInManager'),
  asyncReducer(employeeActions.signIn, 'employee'),
  [employeeActions.signOut, signOut],
  asyncReducer(employeeActions.checkIn, 'checkIn')
], INITIAL_STATE);
