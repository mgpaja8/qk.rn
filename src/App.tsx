import React, { PureComponent } from 'react';
import { StackNavigator } from 'react-navigation'

import DeviceRegistration from './components/DeviceRegistration';

export const AppNavigator = StackNavigator(
  {
    DeviceRegistration,
  },
  {
    initialRouteName: 'DeviceRegistration',
  }
);

export default class App extends PureComponent {
  render() {
    return <AppNavigator />;
  }
}
