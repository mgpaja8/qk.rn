import React, { PureComponent } from 'react';
import { NavigationStackScreenOptions } from 'react-navigation';
import { SignIn } from '../components';

export default class SignInScreen extends PureComponent {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  render(): React.ReactNode {
    return <SignIn />;
  }
}
