import { actionTypeGenerator } from '../lib/redux/actions';

const employeeActionGenerator = actionTypeGenerator('EMPLOYEE');
export const employeeActions = {
  signIn: employeeActionGenerator.async('SIGN_IN')
};
