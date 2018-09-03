import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../styles';
import translation from '../lib/translation';

export class SignIn extends PureComponent {
  render(): React.ReactNode {
    return (
      <View style={style.container}>
        <Text>{translation.SIGN_IN_HEADER}</Text>
      </View>
    );
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
