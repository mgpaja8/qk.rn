import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { qkDataSource } from '../datasource/dataSource';
import { Action, ErrorAction, SuccessAction } from '../lib/redux/actions';
import { taskActions } from './actionTypes';
import { TaskGroup } from '../datasource/types';

export function tasksForToday(dispatch: Dispatch<Action>): () => void {
  return () => {
    dispatch({ type: taskActions.tasksForToday.start });
    qkDataSource.getTasksForToday()
      .then(tasks => {
        dispatch<SuccessAction<TaskGroup[]>>({
          type: taskActions.tasksForToday.done,
          value: tasks
        });
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: taskActions.tasksForToday.fail,
        error
      }));
  };
}
