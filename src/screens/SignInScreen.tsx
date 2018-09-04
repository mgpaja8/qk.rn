import React, { PureComponent } from 'react';
import { NavigationStackScreenOptions } from 'react-navigation';
import { SignInContainer } from '../containers';
import { ScreenProps } from '../lib/types';

export default class SignInScreen extends PureComponent<ScreenProps> {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  render(): React.ReactNode {
    return <SignInContainer navigation={this.props.navigation}/>;
  }
}
