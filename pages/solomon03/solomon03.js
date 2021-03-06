import React, { Component } from 'react';
import TodoListTemplate from './components/TodoList-Components/TodoListTemplate';
import Form from './components/TodoList-Components/Form';
import TodoItemList from './components/TodoList-Components/TodoItemList';
import Palette from './components/TodoList-Components/Palette';
import NavBar from './components/common-Components/NavBar';
import Clock from './components/common-Components/Clock';

// Material UI
import Grid from '@material-ui/core/Grid';

// import styles from './solomon03.module.css'

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6', '#fcba03'];

export default class solomon03 extends Component {
  id = 3; // 이미 0,1,2가 존재함으로 3으로 설정
  state = {
    input: '',
    todos: [
      // service 통한 axios 연결로 data bind 필뇨
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false },
    ],
    color: '#343a40',
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // 인풋을 비우고
      //concat을 이용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color,
      }),
    });
  };

  handleKeyPress = (e) => {
    // 누러진 키가 Endter면 handleCreate호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    //파라미터로 받은 id를 가지고 몇번째 아이템인지를 찾는다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열 복사
    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };
    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleSelectColor = (color) => {
    this.setState({
      color,
    });
  };
  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor,
    } = this;
    return (
      // <div class={`${styles.container}`}>
      <div className="contentContainer">
        <div className="navContainer">
          <NavBar />
        </div>
        <div>
          <Clock />
        </div>
        <div className="todoListContainer">
          <TodoListTemplate
            form={
              <Form
                value={input}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
                color={color}
              />
            }
            palette={
              <Palette
                colors={colors}
                selected={color}
                onSelect={handleSelectColor}
              />
            }
          >
            <TodoItemList
              todos={todos}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          </TodoListTemplate>
        </div>
      </div>
    );
  }
}
