import actionTypes from '../actions/action-types';

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                Object.assign({}, action.todo)
            ];
        case actionTypes.COMPLETE_TODO:
            let todos = [];
            state.forEach((todo, index) => {
                if(index === action.index)
                    todos.push({text:todo.text, complete:!todo.complete});
                else
                    todos.push(todo);
            });            
            return todos;
        default:
            return state;
    }
}