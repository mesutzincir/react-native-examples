import React, {useContext} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {TodoListContext} from './TodoListContext';
import Todo from './Todo';
function TodoList() {
  const TodoListContextValue = useContext(TodoListContext);

  const renderItem = ({item}) => (
    <View>
      <Todo todoId={item.id} />
    </View>
  );

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Todo List</Text>
      <FlatList
        data={TodoListContextValue.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default TodoList;
