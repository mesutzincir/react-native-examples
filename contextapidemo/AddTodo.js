import React, {useState, useContext} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {TodoListContext} from './TodoListContext';

function AddTodo() {
  const [todo, setTodo] = useState('');
  const todoListContextValue = useContext(TodoListContext);
  const AddTodo = () => {
    console.log('AddTodo-->');
    todoListContextValue.addItem(todo);
    setTodo('');
  };

  return (
    <View style={{marginBottom: 30}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>New Todo</Text>
      <TextInput
        style={{borderRadius: 8, color: 'red', borderWidth: 1, marginTop: 10}}
        placeholder="enter new todo"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Pressable
        style={{
          backgroundColor: 'blue',
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 10,
          alignItems: 'center',
        }}
        onPress={() => AddTodo()}>
        <Text
          style={{
            fontSize: 32,
            color: 'white',
          }}>
          Add
        </Text>
      </Pressable>
    </View>
  );
}

export default AddTodo;
