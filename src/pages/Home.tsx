import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    let data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, data])

  }

  function handleToggleTaskDone(id: number) {
    const newArray = tasks.find(item => item.id === id);
    
    if(newArray?.done == false) {
      newArray.done = true
      const updatedTasks = tasks.map(task => ({ ...task }))
      setTasks(updatedTasks)
    } else {
      newArray.done = false
      const updatedTasks = tasks.map(task => ({ ...task }))
      setTasks(updatedTasks)
    }

  }

  function handleRemoveTask(id: number) {
    const newArray = tasks.filter(item => item.id !== id);

    setTasks(newArray);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})