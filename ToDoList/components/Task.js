import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.item.completed
    }
  }

  render() {
    const { item } = this.props;
    const { completed } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{item.task}</Text>
          </TouchableOpacity>
          <Switch
            value={this.state.completed}
            onValueChange={() => {
              this.props.onComplete(item.id, !completed)
              this.setState({ completed: !completed })
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    margin: 2,
  },
  text: {
    fontSize: 15,
    color: 'black',
  }
});