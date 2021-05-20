import React from 'react';
import { StyleSheet, StatusBar, SectionList, Text, View } from 'react-native';
import uuidv4 from 'uuid/v4';
import EditTask from './components/EditTask';
import Header from './components/Header';
import Task from './components/Task';
import NewTask from './components/NewTask';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskVisible: false,
      editTaskVisible: false,
      editItem: {},
    }
  }

  addTask = (task) => {
    const { tasks } = this.state;
    const newTask = { id: uuidv4(), task: task, completed: false }
    let newTasks = [...tasks, newTask];
    this.setState({ tasks: newTasks, newTaskVisible: false })
  }

  updateTask = (id, task) => {
    const items = this.state.tasks.map(item => (
      item.id === id ? { ...item, task: task } : item
    ));
    this.setState({ tasks: items, editTaskVisible: false });
  }

  deleteTask = (id) => {
    const items = this.state.tasks.filter(item => item.id !== id);
    this.setState({ tasks: items, editTaskVisible: false })
  }

  changeStatusTask = (id, estado) => {
    const items = this.state.tasks.map(item => (
      item.id === id ? { ...item, completed: estado } : item
    ));
    this.setState({ tasks: items })
  }

  sortTasks = (a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    if (a.task > b.task) return 1;
    return -1;
  }

  renderItem = ({ item }) => {
    return (
      <Task
        item={item}
        onPress={() => { this.setState({ editTaskVisible: true, editItem: item }) }}
        onComplete={this.changeStatusTask}
      />
    );
  }

  render() {
    const { newTaskVisible, editTaskVisible, editItem, tasks } = this.state;
    return (
      <View>
        <NewTask
          visible={newTaskVisible}
          onCancel={() => this.setState({ newTaskVisible: false })}
          onAdd={this.addTask} />
        <EditTask
          visible={editTaskVisible}
          item={editItem}
          onCancel={() => this.setState({ editTaskVisible: false })}
          onUpdate={this.updateTask}
          onDelete={this.deleteTask}
        />
        <Header
          onAdd={() => this.setState({ newTaskVisible: true })}
        />
        <SectionList
          sections={[
            { title: "Em Aberto", data: tasks.filter(item => !item.completed).sort((a, b) => a.task > b.task) },
            { title: "Concluido", data: tasks.filter(item => item.completed).sort((a, b) => a.task > b.task) }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionTitle}>{section.title}</Text>
          )}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <StatusBar barStyle='default' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 15,
    backgroundColor: 'cornflowerblue',
    color: 'white',
    textAlign: 'center'
  }
});