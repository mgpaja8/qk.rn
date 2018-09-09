import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckInHeader } from '../components';
import { color } from '../styles';
import { Employee, TaskGroup } from '../datasource/types';
import { ScreenProps } from '../lib/types';
import { chunk } from '../lib/helpers';

const COLUMNS = 2;

interface CheckInValues {
  employee?: Employee;
  taskGroups: TaskGroup[];
  taskGroupsLoading: boolean;
}

interface CheckInActions {
  signOut: () => void;
}

export type CheckInProps = CheckInValues & CheckInActions & ScreenProps;

interface CheckInState {
  selectedTaskGroups: TaskGroup[];
}

export class CheckIn extends PureComponent<CheckInProps, CheckInState> {
  constructor(props: CheckInProps) {
    super(props);

    this.state = { selectedTaskGroups: [] };
  }

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
        {this.renderTaskGroup()}
      </View>
    );
  }

  private renderTaskGroup = (): React.ReactNode => {
    const { taskGroups } = this.props;
    const taskGroupsGrid = chunk(taskGroups, COLUMNS);

    return (
      <View style={style.taskGroupsContainer}>
        {taskGroupsGrid.map(this.renderTaskGroupRow)}
      </View>
    );
  }

  private renderTaskGroupRow = (group: TaskGroup[], index: number): React.ReactNode => {
    if (group.length < 1) {
      return null;
    }

    return (
      <View style={style.rowContainer} key={index}>
        {group.map((task, i) => {
          const isLast = i === group.length - 1;
          const isSelected = !(this.state.selectedTaskGroups.indexOf(task) < 0);

          return (
            <TouchableOpacity
              style={[
                style.taskGroupButton,
                !isLast && style.marginRight,
                isSelected && style.selectedTaskGroupButton
              ]}
              key={`${task.shift}${task.station}`}
              onPress={this.toggleTaskGroup(task)}
            >
              <Text
                style={[
                  style.taskGroupButtonText,
                  isSelected && style.selectedTaskGroupButtonText
                ]}
              >
                {`${task.shift} ${task.station}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  private toggleTaskGroup = (group: TaskGroup) => () => {
    const { selectedTaskGroups } = this.state;
    const index = selectedTaskGroups.indexOf(group);
    if (index < 0) {
      this.setState({ selectedTaskGroups: [...selectedTaskGroups, group] });
    } else {
      const newTaskGroups = selectedTaskGroups.filter(td => td !== group);
      this.setState({ selectedTaskGroups: newTaskGroups });
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'flex-start',
    paddingTop: 44
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  taskGroupButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 5
  },
  taskGroupsContainer: {
    margin: 10
  },
  marginRight: {
    marginRight: 10
  },
  selectedTaskGroupButton: {
    backgroundColor: color.primary
  },
  taskGroupButtonText: {
    fontWeight: '500',
    color: color.black,
    fontSize: 12,
    textAlign: 'center'
  },
  selectedTaskGroupButtonText: {
    color: color.white
  }
});
