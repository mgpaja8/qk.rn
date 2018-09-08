import { ActionReducer } from '../lib/redux/reducers';
import employeeReducer from './employeeReducer';
import taskReducer from './taskReducer';

import { EmployeeStore, TaskStore } from '../store';

export interface QKReducers {
  employee: ActionReducer<EmployeeStore>;
  tasks: ActionReducer<TaskStore>;
}

// TODO: Fix type of reducers (Should be QKReducers)
const reducers: any = {
  employee: employeeReducer,
  tasks: taskReducer
};

export default reducers;
