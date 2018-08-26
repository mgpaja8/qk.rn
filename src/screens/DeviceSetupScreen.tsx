import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationStackScreenOptions } from 'react-navigation';
import { DeviceSetupFormContainer } from '../containers';
import { color } from '../styles';
import { getOperationId } from '../lib/asyncStorageManager';
import { ScreenProps } from '../lib/types';

const logo = require('../../assets/logoWhite.png');
const noop = () => undefined;

export type DeviceSetupScreenProps = ScreenProps;

export default class DeviceSetupScreen extends PureComponent<DeviceSetupScreenProps> {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  componentDidMount(): void {
    getOperationId()
      .then(operationId => {
        if (operationId) {
          this.props.navigation.push('CheckInScreen');
        }
      })
      .catch(noop);
  }

  render(): React.ReactNode {
    return (
      <View style={style.container}>
        <Image source={logo} style={style.logoStyle}/>
        <DeviceSetupFormContainer />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: 'flex-start',
    paddingTop: 44
  },
  logoStyle: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    marginBottom: 40
  }
});
