import actionTypes from './action-types';

export function addTodo(todo) {
    return {
        type: actionTypes.ADD_TODO,
        todo: todo
    };
}

export function completeTodo(index) {
    return {
        type: actionTypes.COMPLETE_TODO,
        index: index
    };
}