import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { SignInPayload } from './types/qkApi';

export default class QualityKitchenDataSource {
  private qkClient: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.qkClient = axios.create(config);
  }

  async login(email: string, pin: string): Promise<any> {
    const payload: SignInPayload = {
      EmailAddress: email,
      EmployeeCode: pin
    };

    const response = await this.qkClient.post('/admin/sign-in', payload);

    return response.data;
  }
}
