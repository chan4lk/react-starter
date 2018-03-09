import * as React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../actions/action-types';
import { addTodo, completeTodo } from '../actions/todo-actions';
import ToDoList from './ToDoList';
class ToDo extends React.Component {
    constructor() {
        super();
        this.onAdd = this.onAdd.bind(this);
        this.onCompleted = this.onCompleted.bind(this);
    }

    onAdd(e) {
        
        if (this.input.value) {
            this.props.addTodo(
                {
                    text: this.input.value,
                    completed: false
                });
                this.input.value = '';
        }
    }

    onCompleted(index) {
        this.props.completeTodo(index);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref={node => { this.input = node }} />
                    <button onClick={this.onAdd}>Add</button>
                </div>
                <ToDoList todos={this.props.todos} onCompleted={this.onCompleted} />
            </div>);
    }
}

const mapStateToPros = (state) => { return { todos: state.todos } };
const mapDispatchToProps = (dispatch => {
    return {
        addTodo: (todo) => { dispatch(addTodo(todo)); },
        completeTodo: (index) => { dispatch(completeTodo(index)) }
    }
})

export default connect(mapStateToPros, mapDispatchToProps)(ToDo);