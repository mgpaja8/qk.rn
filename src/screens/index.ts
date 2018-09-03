import { NavigationRouteConfigMap } from 'react-navigation';

import DeviceSetupScreen from './DeviceSetupScreen';
import CheckInScreen from './CheckInScreen';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';

const routes: NavigationRouteConfigMap = {
  SplashScreen,
  DeviceSetupScreen,
  SignInScreen,
  CheckInScreen
};

export default routes;
