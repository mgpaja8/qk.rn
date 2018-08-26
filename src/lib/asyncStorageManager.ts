import { AsyncStorage } from 'react-native';

export enum ASYNC_STORAGE_KEYS {
  OPERATION_ID = 'OPERATION_ID'
}

export async function getOperationId(): Promise<string> {
  return AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OPERATION_ID);
}

export async function setOperationId(operationId: string): Promise<void> {
  return AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OPERATION_ID, operationId);
}
