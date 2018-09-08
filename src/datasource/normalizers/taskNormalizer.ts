import { Task, TaskGroup, TaskStatus } from '../types';

export function normalizeTasks(originalTasks: Task[]): TaskGroup[] {
  const taskGroups: TaskGroup[] = [];
  originalTasks.forEach(task => {
    let taskGroup = taskGroups.find(
      group => group.shift === task.shift && group.station === task.station
    );

    if (!taskGroup) {
      taskGroup = {
        station: task.station,
        shift: task.shift,
        [TaskStatus.COMPLETED]: [],
        [TaskStatus.FLAGGED]: [],
        [TaskStatus.IN_PROGRESS]: [],
        [TaskStatus.PAST_DUE]: [],
        [TaskStatus.UNASSIGNED]: []
      };

      taskGroups.push(taskGroup);
    }

    taskGroup[task.status].push(task);
  });

  return taskGroups;
}
