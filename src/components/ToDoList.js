import * as React from 'react';

export default class ToDoList extends React.Component {
    constructor(){
        super();
        this.onCompleted = this.onCompleted.bind(this);
    }

    onCompleted(index){
        this.props.onCompleted(index);
    }

    render() {
        return (
            <div className="todos">
                {this.props.todos.map((todo, index) => {
                    return (
                        <div key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onClick={() => this.onCompleted(index)} />
                            {todo.text}
                        </div>)
                })}
            </div>
        )
    }
}