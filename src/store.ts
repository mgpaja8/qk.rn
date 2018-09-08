import { AxiosError } from 'axios';
import { APIResult } from './lib/redux/reducers';
import { Employee, TaskGroup } from './datasource/types';

export interface AppStore {
  employee: EmployeeStore;
}

export interface EmployeeStore {
  signedInManager: APIResult<Employee, AxiosError>;
  employee: APIResult<Employee, AxiosError>;
}

export interface TaskStore {
  tasks: APIResult<TaskGroup[], AxiosError>;
}
