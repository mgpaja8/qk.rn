import { TaskGroup } from '../types';
import { TaskGrouping } from '../types/qkApi';

export function getTaskAssignmentGroups(taskGroups: TaskGroup[]): TaskGrouping[] {
  return taskGroups.map(group => {
    return {
      station: group.station,
      shift: group.shift
    };
  });
}
