import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckInHeader } from '../components';
import { color } from '../styles';
import { Employee } from '../datasource/types';
import { ScreenProps } from '../lib/types';

interface CheckInValues {
  employee?: Employee;
}

interface CheckInActions {
  signOut: () => void;
}

export type CheckInProps = CheckInValues & CheckInActions & ScreenProps;

export class CheckIn extends PureComponent<CheckInProps> {
  componentDidUpdate(): void {
    const { employee } = this.props;

    if (!employee) {
      this.props.navigation.goBack();
    }
  }

  render(): React.ReactNode {
    const { employee } = this.props;

    if (!employee) {
      return null;
    }

    return (
      <View style={style.container}>
        <CheckInHeader employee={employee} signOut={this.props.signOut}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'flex-start',
    paddingTop: 44
  }
});
