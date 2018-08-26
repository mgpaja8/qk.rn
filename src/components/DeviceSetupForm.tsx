import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import translation from '../lib/translation';
import { color } from '../styles';
import { AxiosError } from 'axios';
import { Employee } from '../datasource/types';

interface DeviceSetupFormValues {
  loading: boolean;
  error?: AxiosError;
  signedInEmployee?: Employee;
}

interface DeviceSetupFormActions {
  signIn: (email: string, pin: string) => void;
}

export type DeviceSetupFormProps = DeviceSetupFormValues & DeviceSetupFormActions;

export class DeviceSetupForm extends PureComponent<DeviceSetupFormProps> {
  render(): React.ReactNode {
    const { error, loading } = this.props;
    return (
      <View style={style.formContainer}>
        {error && this.renderError(error)}
        <View style={style.groupStyle}>
          <Text style={style.labelText}>{translation.EMAIL_ADDRESS_LABEL}</Text>
          <TextInput
            style={style.textboxContainer}
            placeholder={translation.EMAIL_ADDRESS_PLACEHOLDER}
          />
        </View>
        <View style={style.groupStyle}>
          <Text style={style.labelText}>{translation.PIN_LABEL}</Text>
          <TextInput
            style={style.textboxContainer}
            placeholder={translation.PIN_PLACEHOLDER}
          />
        </View>
        <TouchableOpacity
          style={style.loginButtonView}
          onPress={this.onLoginPress}
          disabled={loading}
        >
          {
            loading
              ? <ActivityIndicator color={color.white}/>
              : <Text style={style.loginButtonText}>{translation.LOGIN_LABEL}</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }

  private renderError = (error: AxiosError): React.ReactNode => {
    const errorMessage: string = error.response &&
      error.response.data &&
      error.response.data.message ||
      'Something went wrong. Please try again.';

    return (
      <Text style={style.errorText}>{errorMessage}</Text>
    );
  }

  private onLoginPress = () => {
    console.log('Login pressed'); // TODO: Hook to real event
  }
}

const style = StyleSheet.create({
  formContainer: {
    flexDirection: 'column',
    marginHorizontal: 20
  },
  groupStyle: {
    marginBottom: 10
  },
  labelText: {
    fontWeight: '700',
    fontSize: 12,
    color: color.white,
    marginBottom: 5
  },
  textboxContainer: {
    backgroundColor: color.white,
    borderRadius: 5,
    borderColor: color.secondary,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 12
  },
  loginButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: color.primaryLight,
    borderRadius: 5
  },
  loginButtonText: {
    fontWeight: '700',
    fontSize: 12,
    color: color.white
  },
  errorText: {
    fontWeight: '500',
    fontSize: 12,
    color: color.secondary,
    marginBottom: 10
  }
});
