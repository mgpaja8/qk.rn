import { AxiosError } from 'axios';
import { APIResult } from './lib/redux/reducers';
import { Employee } from './datasource/types';

export interface AppStore {
  employee: EmployeeStore;
}

export interface EmployeeStore {
  signedInEmployee: APIResult<Employee, AxiosError>;
}
