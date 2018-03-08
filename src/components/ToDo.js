import * as React from 'react';

class ToDo extends React.Component {
    constructor() {
        super();
        this.state = {            
            todos: [
                {text:'Add Todo', completed: false},
                {text:'Delete Todo', completed: false},
                {text:'Complete Todo', completed: false}
               
            ]
        };
        this.onAdd = this.onAdd.bind(this);
        this.onCompleted = this.onCompleted.bind(this);
    }

    onAdd(e) {
        e.preventDefault();
        if (this.input.value) {
            this.setState({ todos: [...this.state.todos, {text: this.input.value, completed: false}] });
            this.input.value = '';
        }
    }

    onCompleted(index){
        let todos = this.state.todos;
        todos[index].completed = !todos[index].completed;       
        this.setState({todos: [...todos]});
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" ref={node => { this.input = node }} />
                    <button onClick={this.onAdd}>Add</button>
                </form>
                <div className="todos">
                    {this.state.todos.map((todo, index) => {
                        return (
                        <div key={index} style={{textDecoration:todo.completed? 'line-through' : 'none'}}>
                            <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onClick={()=>this.onCompleted(index)}/>
                            {todo.text}
                        </div>)
                    })}
                </div>
            </div>);
    }
}

export default ToDo;