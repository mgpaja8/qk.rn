import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { qkDataSource } from '../datasource/dataSource';
import { Action, ErrorAction, SuccessAction } from '../lib/redux/actions';
import { employeeActions } from './actionTypes';
import { Employee, TaskGroup } from '../datasource/types';

export function managerSignIn(dispatch: Dispatch<Action>): (email: string, pin: string) => void {
  return (email: string, pin: string) => {
    dispatch({ type: employeeActions.managerSignIn.start });
    qkDataSource.login(email, pin)
      .then(employee => {
        dispatch<SuccessAction<Employee>>({
          type: employeeActions.managerSignIn.done,
          value: employee
        });
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: employeeActions.managerSignIn.fail,
        error
      }));
  };
}

export function signIn(dispatch: Dispatch<Action>): (pin: string) => void {
  return (pin: string) => {
    dispatch({ type: employeeActions.signIn.start });
    qkDataSource.signIn(pin)
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

export function signOut(dispatch: Dispatch<Action>): () => void {
  return () => {
    dispatch<Action>({ type: employeeActions.signOut });
  };
}

export function checkIn(dispatch: Dispatch<Action>): (pin: string, groups: TaskGroup[]) => void {
  return (pin: string, groups: TaskGroup[]) => {
    dispatch({ type: employeeActions.checkIn.start });
    qkDataSource.assignTaskGroups(pin, groups)
      .then(resp => {
        dispatch<SuccessAction<boolean>>({
          type: employeeActions.checkIn.done,
          value: resp
        });
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: employeeActions.checkIn.fail,
        error
      }));
  };
}
