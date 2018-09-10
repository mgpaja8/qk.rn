import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../lib/redux/actions';
import { AppStore } from '../store';
import { CheckIn, CheckInProps } from '../components';
import { checkIn, signOut } from '../actions/employeeActions';
import { ScreenProps } from '../lib/types';
import { TaskGroup } from '../datasource/types';

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
  checkIn: (pin: string, groups: TaskGroup[]) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    signOut: signOut(dispatch),
    checkIn: checkIn(dispatch)
  };
};

export const CheckInContainer: ComponentClass<ScreenProps>
  = connect(mapStateToProps, mapDispatchToProps)(CheckIn);
