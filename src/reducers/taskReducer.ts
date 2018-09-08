import { TaskStore } from '../store';
import { asyncReducer, emptyAPIResult, mapReducersArray } from '../lib/redux/reducers';
import { taskActions } from '../actions/actionTypes';

const INITIAL_STATE: TaskStore = {
  tasks: emptyAPIResult()
};

export default mapReducersArray<TaskStore>([
  asyncReducer(taskActions.tasksForToday, 'tasks')
], INITIAL_STATE);
