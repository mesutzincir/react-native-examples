import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TodoListContext} from './TodoListContext';
function Todo({todoId}) {
  const TodoListContextValue = useContext(TodoListContext);
  const todo = TodoListContextValue.data.find((i) => i.id === todoId);
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}> {todoId} - </Text>
      <Text>{todo.title}</Text>
    </View>
  );
}

export default Todo;
