import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { color } from '../styles/variables';

export interface CodeFieldProps {
  filled: boolean;
}

export class CodeField extends Component<CodeFieldProps> {
  render(): React.ReactNode {
    const { containerView, backgroundColorPrimary } = style;
    const { filled } = this.props;
    return <View style={[containerView, filled && backgroundColorPrimary]} />;
  }
}

const style = StyleSheet.create({
  containerView: {
    height: 40,
    width: 40,
    margin: 2.5,
    borderRadius: 5,
    borderColor: color.primary,
    borderWidth: 1
  },
  backgroundColorPrimary: {
    backgroundColor: color.primary
  }
});
