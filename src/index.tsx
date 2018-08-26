import React, { PureComponent } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './lib/redux/createStore';
import reducers from './reducers';
import routes from './screens';

export const AppNavigator = createStackNavigator(routes, {
  initialRouteName: 'DeviceSetupScreen'
});

const store = configureStore({}, reducers);

export default class App extends PureComponent {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
