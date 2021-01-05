import React, {useState} from 'react';
import {Text} from 'react-native';

const DATA = [
  {
    id: 1,
    title: ' create a react native project',
  },
  {
    id: 2,
    title: ' add TodoList and Todo component',
  },
  {
    id: 3,
    title: ' create TodoListContext',
  },
];

const TodoListContext = React.createContext();

function TodoListContextProvider(props) {
  const [todoList, setTodoList] = useState(DATA);
  const addItem = (todoTitle) => {
    if (todoTitle !== undefined && todoTitle !== null && todoTitle !== '') {
      setTodoList([
        ...todoList,
        {id: Math.max(...todoList.map((t) => t.id)) + 1, title: todoTitle},
      ]);
    }
    console.log(todoTitle);
  };
  return (
    <TodoListContext.Provider
      value={{
        data: todoList,
        addItem: addItem,
      }}>
      {props.children}
    </TodoListContext.Provider>
  );
}
export {TodoListContext, TodoListContextProvider};
