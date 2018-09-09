import { actionTypeGenerator } from '../lib/redux/actions';

const employeeActionGenerator = actionTypeGenerator('EMPLOYEE');
export const employeeActions = {
  managerSignIn: employeeActionGenerator.async('MANAGER_SIGN_IN'),
  signIn: employeeActionGenerator.async('SIGN_IN'),
  signOut: employeeActionGenerator.value('SIGN_OUT')
};

const taskActionGenerator = actionTypeGenerator('TASK');
export const taskActions = {
  tasksForToday: taskActionGenerator.async('FOR_TODAY')
};
