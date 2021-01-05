/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import TodoList from './TodoList';
import {TodoListContextProvider} from './TodoListContext';
import AddTodo from './AddTodo';

function App() {
  return (
    <TodoListContextProvider>
      <SafeAreaView style={myStyle.container}>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </SafeAreaView>
    </TodoListContextProvider>
  );
}

const myStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
});
export default App;
