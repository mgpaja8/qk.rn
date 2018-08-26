import React, { PureComponent } from 'react';
import { StackNavigator } from 'react-navigation';

import DeviceSetup from './components/DeviceSetup';

export const AppNavigator = StackNavigator(
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
