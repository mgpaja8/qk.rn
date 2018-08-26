import React, { PureComponent } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import translation from '../lib/translation';
import { color } from '../styles';

interface DeviceSetupFormValues {
  id?: string;
}

export type DeviceSetupFormProps = DeviceSetupFormValues;

export class DeviceSetupForm extends PureComponent<DeviceSetupFormProps> {
  render(): React.ReactNode {
    return (
      <View style={style.formContainer}>
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
        >
          <Text style={style.loginButtonText}>{translation.LOGIN_LABEL}</Text>
        </TouchableOpacity>
      </View>
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
  }
});
