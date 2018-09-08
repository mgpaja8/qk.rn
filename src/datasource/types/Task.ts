import { Employee } from './Employee';

export interface Task {
  amount?: string;
  assignedEmployees: Employee[];
  description: string;
  due: string;
  finishedBy?: Employee;
  finishedOn?: string;
  highTemp?: number;
  id: string;
  lowTemp?: number;
  operationId: string;
  severity: Severity;
  shift: string;
  station: string;
  spec?: string;
  temperatureReading?: number;
  unit?: string;
  type: TaskType;
  status: TaskStatus;
}

export enum Severity {
  CRITICAL = 'Critical',
  SERIOUS = 'Serious',
  MINOR = 'Minor'
}

export enum TaskType {
  DUTY = 'Duty',
  PREP = 'Prep'
}

export enum TaskStatus {
  UNASSIGNED = 'Unassigned',
  IN_PROGRESS = 'InProgress',
  COMPLETED = 'Completed',
  FLAGGED = 'Flagged',
  PAST_DUE = 'PastDue'
}
