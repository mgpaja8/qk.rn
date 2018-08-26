import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { container, content } = styles;
    return (
      <View style={container}>
        <View style={content}>
          <Text>Open up App.js to start working on your app! PA</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
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
