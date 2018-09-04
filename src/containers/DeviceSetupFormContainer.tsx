import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../lib/redux/actions';
import { AppStore } from '../store';
import { DeviceSetupForm, DeviceSetupFormProps } from '../components';
import { signIn } from '../actions/employeeActions';
import { ScreenProps } from '../lib/types';

type StoreProps = Pick<DeviceSetupFormProps, 'loading' | 'error' | 'signedInManager'>;
const mapStateToProps: (store: AppStore) => StoreProps = store => {
  const { signedInManager } = store.employee;
  return {
    loading: signedInManager.loading,
    error: signedInManager.error,
    signedInManager: signedInManager.value
  };
};

interface DispatchProps {
  signIn: (email: string, pin: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    signIn: signIn(dispatch)
  };
};

export const DeviceSetupFormContainer: ComponentClass<ScreenProps>
  = connect(mapStateToProps, mapDispatchToProps)(DeviceSetupForm);
