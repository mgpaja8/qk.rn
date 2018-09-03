import React, { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationStackScreenOptions } from 'react-navigation';
import { color } from '../styles';
import { getOperationId } from '../lib/asyncStorageManager';
import { ScreenProps } from '../lib/types';

const noop = () => undefined;

export type SplashScreenProps = ScreenProps;

export default class SplashScreen extends PureComponent<SplashScreenProps> {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  componentDidMount(): void {
    getOperationId()
      .then(operationId => {
        if (operationId) {
          this.props.navigation.push('CheckInScreen');
        } else {
          this.props.navigation.push('DeviceSetupScreen');
        }
      })
      .catch(noop);
  }

  render(): React.ReactNode {
    return <ActivityIndicator style={style.container}/>;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
