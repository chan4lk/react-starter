import {
    combineReducers
} from 'redux';
import todos from './todo-reducer';

const rootReducer = combineReducers({
    todos: todos
}) // OR todos only, LHS is implied

export default rootReducer;