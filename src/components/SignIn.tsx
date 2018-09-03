import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../styles';
import translation from '../lib/translation';
import { CodeField, DigitButton } from '../components';

export interface SignInProps {
  testProp?: string;
}

interface SignInState {
  code: number[];
}

export class SignIn extends PureComponent<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);

    this.state = {
      code: []
    };
  }

  componentDidUpdate(): void {
    const { code } = this.state;
    if (code.length === 4) {
      console.log('SUBMIT PASS');
    }
  }

  render(): React.ReactNode {
    return (
      <View style={style.container}>
        <Text style={style.headerText}>{translation.SIGN_IN_HEADER}</Text>
        {this.renderCode()}
        {this.renderDigits()}
      </View>
    );
  }

  private renderDigits = (): React.ReactNode => {
    const { rowContainerView } = style;
    const disabled = this.state.code.length === 4;

    return(
      <View>
        <View style={rowContainerView}>
          <DigitButton
            onPress={this.onDigitPress(1)}
            text={'1'}
            disabled={disabled}
          />
          <DigitButton
            onPress={this.onDigitPress(2)}
            text={'2'}
            disabled={disabled}
          />
          <DigitButton
            onPress={this.onDigitPress(3)}
            text={'3'}
            disabled={disabled}
          />
        </View>
        <View style={rowContainerView}>
          <DigitButton
            onPress={this.onDigitPress(4)}
            text={'4'}
            disabled={disabled}
          />
          <DigitButton
            onPress={this.onDigitPress(5)}
            text={'5'}
            disabled={disabled}
          />
          <DigitButton
            onPress={this.onDigitPress(6)}
            text={'6'}
            disabled={disabled}
          />
        </View>
        <View style={rowContainerView}>
          <DigitButton
            onPress={this.onDigitPress(7)}
            text={'7'}
            disabled={disabled}
          />
          <DigitButton
            onPress={this.onDigitPress(8)}
            text={'8'}
            disabled={disabled}
          />
          <DigitButton
            onPress={this.onDigitPress(9)}
            text={'9'}
            disabled={disabled}
          />
        </View>
        <View style={rowContainerView}>
          <DigitButton
            onPress={this.onDigitPress(0)}
            text={'0'}
            disabled={disabled}
          />
        </View>
      </View>
    );
  }

  private renderCode = (): React.ReactNode => {
    const { rowContainerView } = style;
    const { code } = this.state;
    const emptyFields = [0, 0, 0, 0];

    return(
      <View style={rowContainerView}>
        {
          emptyFields.map((e, i) => {
            const filled = code[i] !== undefined;

            return <CodeField key={i} filled={filled}/>;
          })
        }
      </View>
    );
  }

  private onDigitPress = (digit: number) => () => {
    this.setState({ code: [...this.state.code, digit] });
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowContainerView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: '500',
    fontSize: 12,
    color: color.secondary,
    marginBottom: 10
  }
});
