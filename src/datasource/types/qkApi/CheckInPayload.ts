import { TaskGroup } from '../../types';

export interface CheckInPayload {
  employeeCode: string;
  taskGroupings: TaskGrouping[];
}

export type TaskGrouping = Pick<TaskGroup, 'shift' | 'station'>;
