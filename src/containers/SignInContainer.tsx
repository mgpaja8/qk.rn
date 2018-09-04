import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../lib/redux/actions';
import { AppStore } from '../store';
import { SignIn, SignInProps } from '../components';
import { signIn } from '../actions/employeeActions';
import { ScreenProps } from '../lib/types';

type StoreProps = Pick<SignInProps, 'loading' | 'error' | 'employee'>;
const mapStateToProps: (store: AppStore) => StoreProps = store => {
  const { employee } = store.employee;
  return {
    loading: employee.loading,
    error: employee.error,
    employee: employee.value
  };
};

interface DispatchProps {
  signIn: (pin: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    signIn: signIn(dispatch)
  };
};

export const SignInContainer: ComponentClass<ScreenProps>
  = connect(mapStateToProps, mapDispatchToProps)(SignIn);
