import { AxiosError } from 'axios';
import { APIResult } from './lib/redux/reducers';
import { Employee, TaskGroup } from './datasource/types';

export interface AppStore {
  employee: EmployeeStore;
  tasks: TaskStore;
}

export interface EmployeeStore {
  signedInManager: APIResult<Employee, AxiosError>;
  employee: APIResult<Employee, AxiosError>;
  checkIn: APIResult<boolean, AxiosError>;
}

export interface TaskStore {
  tasks: APIResult<TaskGroup[], AxiosError>;
}
