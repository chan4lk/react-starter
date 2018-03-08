import * as React from 'react';

class ToDo extends React.Component {
    constructor() {
        super();
        this.state = {            
            todos: ['Add Todo', 'Search Todo', 'Delete Todo']
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(e) {
        e.preventDefault();
        if (this.input.value) {
            this.setState({ todos: [...this.state.todos, this.input.value] });
            this.input.value = '';
        }
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
                        return <div key={index}>{todo}</div>
                    })}
                </div>
            </div>);
    }
}

export default ToDo;