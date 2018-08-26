import { ActionReducer } from '../lib/redux/reducers';
import employeeReducer from './employeeReducer';

import { EmployeeStore } from '../store';

export interface QKReducers {
  employee: ActionReducer<EmployeeStore>;
}

// TODO: Fix type of reducers (Should be QKReducers)
const reducers: any = {
  employee: employeeReducer
};

export default reducers;
