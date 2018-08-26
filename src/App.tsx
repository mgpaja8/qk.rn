import React, { PureComponent } from 'react';
import { createStackNavigator } from 'react-navigation';

import DeviceSetup from './components/DeviceSetup';

export const AppNavigator = createStackNavigator(
  {
    DeviceSetup
  },
  {
    initialRouteName: 'DeviceSetup'
  }
);

export default class App extends PureComponent {
  render(): React.ReactNode {
    return <AppNavigator />;
  }
}
