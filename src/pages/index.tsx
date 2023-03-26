import AddIcon from '@/components/AddIcon';
import Task from '@/components/Task';
import styles from '@/styles/Home.module.css';
import { Action, State, Todo } from '@/types';
import { FC, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState: State = { todos: [] };

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      const newId = uuidv4();
      const newTodo: Todo = {
        id: newId,
        text: payload.text,
        state: 'PENDING',
      };
      const existingTodo = state.todos.find(
        (todo) => todo.text.trim() === payload.text
      );
      if (existingTodo) {
        alert('this todo already exists');
        return state;
      }
      return { ...state, todos: [newTodo, ...state.todos] };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case 'VALIDATE':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (payload.id === todo.id) return { ...todo, state: 'DONE' };
          else return todo;
        }),
      };
    default:
      throw new Error();
  }
};

const Home: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleClickAdd();
    }
  };

  const handleClickAdd = () => {
    dispatch({ type: 'ADD', payload: { text } });
  };

  const handleClickRemove = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  };

  const handleClickValidate = (id: string) => {
    dispatch({ type: 'VALIDATE', payload: { id } });
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
        />
        <button onClick={handleClickAdd} disabled={text.trim().length < 1}>
          <AddIcon />
        </button>
      </div>
      <div role="list" className={styles.list}>
        {state.todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            handleClickRemove={() => handleClickRemove(todo.id)}
            handleClickValidate={() => handleClickValidate(todo.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
