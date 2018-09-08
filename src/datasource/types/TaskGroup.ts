import { Task, TaskStatus } from '../types';

export interface TaskGroup {
  shift: string;
  station: string;
  [TaskStatus.COMPLETED]: Task[];
  [TaskStatus.UNASSIGNED]: Task[];
  [TaskStatus.IN_PROGRESS]: Task[];
  [TaskStatus.PAST_DUE]: Task[];
  [TaskStatus.FLAGGED]: Task[];
}
