import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../store';
import { DeviceSetupForm, DeviceSetupFormProps } from '../components';

type StoreProps = Pick<DeviceSetupFormProps, 'id'>;
const mapStateToProps: (store: AppStore) => StoreProps = store => {
  const { id } = store.operation;
  return {
    id
  };
};

export const DeviceSetupFormContainer: ComponentClass
  = connect(mapStateToProps)(DeviceSetupForm);
