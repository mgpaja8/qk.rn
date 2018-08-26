import React from 'react';
import translation from '../lib/translation';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(): React.ReactNode {
    const { container, content } = styles;
    return (
      <View style={container}>
        <View style={content}>
          <Text>{translation.DEVICE_REGISTRATION_LABEL}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center'
  },
  content: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
