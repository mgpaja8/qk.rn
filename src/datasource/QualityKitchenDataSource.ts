import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import moment from 'moment';
import { getOperationId } from '../lib/asyncStorageManager';
import * as normalizers from './normalizers';
import * as denormalizers from './denormalizers';
import { CheckInPayload, SignInPayload } from './types/qkApi';
import { Employee, TaskGroup } from './types';

export default class QualityKitchenDataSource {
  private qkClient: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.qkClient = axios.create(config);
  }

  async login(email: string, pin: string): Promise<Employee> {
    const payload: SignInPayload = {
      EmailAddress: email,
      EmployeeCode: pin
    };

    const response = await this.qkClient.post('/admin/sign-in', payload);

    return response.data;
  }

  async signIn(pin: string): Promise<Employee> {
    const payload: SignInPayload = {
      EmailAddress: '',
      EmployeeCode: pin
    };
    const operationId = await getOperationId();
    const uri = `/operations/${operationId}/sign-in`;
    const response = await this.qkClient.post(uri, payload);

    return response.data;
  }

  async getTasksForToday(): Promise<TaskGroup[]> {
    const operationId = await getOperationId();
    const date = moment().format('MM-DD-YYYY');
    const uri = `/operations/${operationId}/tasks?due=${encodeURIComponent(date)}`;
    const response = await this.qkClient.get(uri);

    return normalizers.normalizeTasks(response.data);
  }

  async assignTaskGroups(employeeCode: string, taskGroups: TaskGroup[]): Promise<boolean> {
    const payload: CheckInPayload = {
      employeeCode,
      taskGroupings: denormalizers.getTaskAssignmentGroups(taskGroups)
    };
    const operationId = await getOperationId();
    const uri = `/operations/${operationId}/tasks/assignments`;
    const response = await this.qkClient.put(uri, payload);

    return response.status === 200;
  }
}
