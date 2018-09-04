import { actionTypeGenerator } from '../lib/redux/actions';

const employeeActionGenerator = actionTypeGenerator('EMPLOYEE');
export const employeeActions = {
  managerSignIn: employeeActionGenerator.async('MANAGER_SIGN_IN')
};
