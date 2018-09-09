import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Pill } from '../components';
import translation from '../lib/translation';

import { color } from '../styles/variables';
import { Employee } from '../datasource/types';

interface CheckInHeaderValues {
  employee: Employee;
}

interface CheckInHeaderActions {
  signOut: () => void;
}

export type CheckInHeaderProps = CheckInHeaderValues & CheckInHeaderActions;

export class CheckInHeader extends Component<CheckInHeaderProps> {
  render(): React.ReactNode {
    const { employee } = this.props;
    return (
      <View style={style.containerView}>
        <Text style={style.headerText}>{translation.CHECK_IN_HEADER}</Text>
        <View style={style.infoContainer}>
          <View style={style.employeeContainer}>
            <Pill label={employee.initials}/>
            <View style={style.employeeDetailsContainer}>
              <Text style={style.headerText}>{employee.fullName}</Text>
              <Text style={style.headerText}>{employee.role}</Text>
            </View>
          </View>
          <TouchableOpacity style={style.notYouButton} onPress={this.props.signOut}>
            <Text style={style.notYouText}>{translation.NOT_YOU_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerView: {
    borderColor: color.secondary,
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  headerText: {
    fontWeight: '100',
    color: color.black,
    fontSize: 12,
    textAlign: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10
  },
  employeeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  employeeDetailsContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  notYouButton: {
    width: 150,
    height: 30,
    borderRadius: 15,
    backgroundColor: color.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notYouText: {
    fontWeight: '100',
    color: color.white,
    fontSize: 12,
    textAlign: 'center'
  }
});
