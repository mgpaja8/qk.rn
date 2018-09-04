import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getOperationId } from '../lib/asyncStorageManager';
import { SignInPayload } from './types/qkApi';
import { Employee } from './types';

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
}
