import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { color } from '../styles/variables';

export interface PillProps {
  label: string;
}

export class Pill extends Component<PillProps> {
  render(): React.ReactNode {
    return (
      <View style={style.containerView}>
        <Text style={style.labelText}>{this.props.label}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 5,
    backgroundColor: color.secondary,
    marginRight: 10
  },
  labelText: {
    fontWeight: '100',
    color: color.white,
    fontSize: 14,
    marginHorizontal: 5
  }
});
