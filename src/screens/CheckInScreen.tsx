import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackScreenOptions } from 'react-navigation';
import { color } from '../styles';
import translation from '../lib/translation';

export default class CheckInScreen extends PureComponent {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  render(): React.ReactNode {
    return (
      <View style={style.container}>
        <Text>{translation.LOGIN_LABEL}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'flex-start',
    paddingTop: 44
  }
});
