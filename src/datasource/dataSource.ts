import { AxiosRequestConfig } from 'axios';
import QualityKitchenDataSource from './QualityKitchenDataSource';

const API_BASE_URL: string = 'http://api-staging.qualitykitchen.co'; // TODO: Read from env file

const qkConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL
};

export const qkDataSource = new QualityKitchenDataSource(qkConfig);
