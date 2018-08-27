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
import { ScreenProps } from '../lib/types';
import { setOperationId } from '../lib/asyncStorageManager';

export interface DeviceSetupFormValues {
  loading: boolean;
  error?: AxiosError;
  signedInEmployee?: Employee;
}

export interface DeviceSetupFormActions {
  signIn: (email: string, pin: string) => void;
}

export type DeviceSetupFormProps = DeviceSetupFormValues & DeviceSetupFormActions & ScreenProps;

export interface FieldType {
  value: string;
  error: boolean;
  errorMessage?: string;
}

export interface DeviceSetupFormState {
  form: {
    email: FieldType;
    pin: FieldType;
  };
}

export class DeviceSetupForm extends PureComponent<DeviceSetupFormProps, DeviceSetupFormState> {
  constructor(props: DeviceSetupFormProps) {
    super(props);

    this.state = {
      form: {
        email: {
          value: '',
          error: false
        },
        pin: {
          value: '',
          error: false
        }
      }
    };
  }

  componentDidUpdate(prevProps: DeviceSetupFormProps): void {
    const { signedInEmployee } = this.props;
    if (signedInEmployee && signedInEmployee !== prevProps.signedInEmployee) {
      setOperationId(signedInEmployee.operationId);
      this.props.navigation.push('CheckInScreen');
    }
  }

  render(): React.ReactNode {
    const { error, loading } = this.props;
    const { email, pin } = this.state.form;
    return (
      <View style={style.formContainer}>
        {error && this.renderError(error)}
        <View style={style.groupStyle}>
          <Text style={style.labelText}>{translation.EMAIL_ADDRESS_LABEL}</Text>
          <TextInput
            style={style.textboxContainer}
            placeholder={translation.EMAIL_ADDRESS_PLACEHOLDER}
            keyboardType='email-address'
            onChangeText={this.onEmailChange}
            value={email.value}
            autoCorrect={false}
            autoCapitalize='none'
          />
          {email.error && <Text style={style.errorField}>{email.errorMessage}</Text>}
        </View>
        <View style={style.groupStyle}>
          <Text style={style.labelText}>{translation.PIN_LABEL}</Text>
          <TextInput
            style={style.textboxContainer}
            placeholder={translation.PIN_PLACEHOLDER}
            keyboardType='numeric'
            onChangeText={this.onPinChange}
            value={pin.value}
            autoCorrect={false}
            autoCapitalize='none'
          />
          {pin.error && <Text style={style.errorField}>{pin.errorMessage}</Text>}
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

  private onEmailChange = (value: string) => {
    this.setState({
      ...this.state,
      form : {
        ...this.state.form,
        email: { value, error: false }
      }
    });
  }

  private onPinChange = (value: string) => {
    this.setState({
      ...this.state,
      form : {
        ...this.state.form,
        pin: { value, error: false }
      }
    });
  }

  private onLoginPress = () => {
    const { email, pin } = this.state.form;
    this.props.signIn(email.value, pin.value);
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
  },
  errorField: {
    fontWeight: '500',
    fontSize: 12,
    color: color.secondary,
    marginTop: 10
  }
});
