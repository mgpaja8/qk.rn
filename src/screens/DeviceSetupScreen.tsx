import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationStackScreenOptions } from 'react-navigation';
import { DeviceSetupForm } from '../components/DeviceSetupForm';
import { color } from '../styles';

const logo = require('../../assets/logoWhite.png');

export default class DeviceSetupScreen extends PureComponent {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  render(): React.ReactNode {
    return (
      <View style={style.container}>
        <Image source={logo} style={style.logoStyle}/>
        <DeviceSetupForm />
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
