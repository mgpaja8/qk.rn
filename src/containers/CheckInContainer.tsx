import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../lib/redux/actions';
import { AppStore } from '../store';
import { CheckIn, CheckInProps } from '../components';
import { signOut } from '../actions/employeeActions';
import { ScreenProps } from '../lib/types';

type StoreProps = Pick<CheckInProps,
  'employee' |
  'taskGroups' |
  'taskGroupsLoading'
>;
const mapStateToProps: (store: AppStore) => StoreProps = store => {
  const { employee } = store.employee;
  const { tasks } = store.tasks;
  return {
    employee: employee.value,
    taskGroups: tasks.value || [],
    taskGroupsLoading: tasks.loading
  };
};

interface DispatchProps {
  signOut: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    signOut: signOut(dispatch)
  };
};

export const CheckInContainer: ComponentClass<ScreenProps>
  = connect(mapStateToProps, mapDispatchToProps)(CheckIn);
