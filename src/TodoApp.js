import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import './TodoApp.css';

var id = 0;

class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      todos: []};

    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  addTodo(todoText) {
    id ++;
    const newTodo = {text: todoText, id: id};

    this.state.todos.push(newTodo);

    this.setState({todos: this.state.todos});
  }

  handleRemove(id) {
    const remainder = this.state.todos.filter((todo) => {
      if (todo.id !== id) return todo;
    });

    this.setState({todos: remainder});
  }
  render() {
    return (
      <div className='todo-app'>
        <Title name="Dopest Todo App ever"/>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todoList={this.state.todos} remove={this.handleRemove}/>
      </div>
      )
  }
}

export default TodoApp;