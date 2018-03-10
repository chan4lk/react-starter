import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoItem } from "./TodoItem";
class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {text:'Learn React', completed:false},
        {text:'Learn Angular', completed:false},
        {text:'Learn Vue', completed:false},
        
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
  }

  addTodo() {

    this.setState({
      todos: 
      [...this.state.todos,
          {text:this.input.value, complete:false}        
        ]
    });

    this.input.value = '';
  }
  onCompleted(index){
    let newTodos = [];
    this.state.todos.forEach((todo, i) => {
      if(i === index)
      { newTodos.push({text:todo.text, completed:!todo.completed}) }
      else newTodos.push(todo);
    });
    this.setState({todos:newTodos});
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" ref={(elem) =>{ this.input = elem}} />
        <button onClick={this.addTodo} >Add</button>
        {this.state.todos.map((todo, index) => {
          return (
            <ToDoItem 
            todo={todo} 
            index={index} 
            onCompleted={this.onCompleted} />
          )
        })}
      </div>
    );
  }
}

export default App;
