import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { qkDataSource } from '../datasource/dataSource';
import { Action, ErrorAction, SuccessAction } from '../lib/redux/actions';
import { employeeActions } from './actionTypes';
import { Employee } from '../datasource/types';

export function signIn(dispatch: Dispatch<Action>): (email: string, pin: string) => void {
  return (email: string, pin: string) => {
    dispatch({ type: employeeActions.signIn.start });
    qkDataSource.login(email, pin)
      .then(employee => {
        dispatch<SuccessAction<Employee>>({
          type: employeeActions.signIn.done,
          value: employee
        });
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: employeeActions.signIn.fail,
        error
      }));
  };
}
