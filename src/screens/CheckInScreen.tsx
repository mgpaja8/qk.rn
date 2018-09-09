import React, { PureComponent } from 'react';
import { NavigationStackScreenOptions } from 'react-navigation';
import { CheckInContainer } from '../containers';
import { ScreenProps } from '../lib/types';

export default class CheckInScreen extends PureComponent<ScreenProps> {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };

  render(): React.ReactNode {
    return <CheckInContainer navigation={this.props.navigation}/>;
  }
}
