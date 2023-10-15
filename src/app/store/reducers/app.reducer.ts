import { Action, createReducer, on } from '@ngrx/store';
import * as todoListActions from '../actions/todo.action';
import { TodoListState } from './app.state';
import { ITodo } from 'src/app/model';

export const intialState: TodoListState = {
  todoList:[]
};
export const todoLostReducer = createReducer(
  intialState,
  on(todoListActions.todoListSuccess, (state, payload) => {
    return { ...state, todoList: payload?.payload };
  }),
  on(todoListActions.todoCreateSuccess, (state, payload) => {
    const todoList = [...state.todoList ,payload.payload]
    return { ...state, todoList: todoList };
  }),
  on(todoListActions.todoUpdateSuccess, (state, payload) => {
    const todoIndex = getTodoByIndex([...state.todoList],payload.payload.id)
    if(todoIndex > -1){
      const todoList = [...state.todoList]
      todoList[todoIndex]=payload?.payload;
      return { ...state, todoList: todoList };
    }
    return state;
  }),
  on(todoListActions.todoDeleteSuccess, (state, payload) => {
    const todoIndex = getTodoByIndex([...state.todoList],payload.payload.id)
    if(todoIndex > -1){
       const todoList = [...state.todoList];
       todoList.splice(todoIndex,1);
       return { ...state, todoList: todoList };
    }
    return state;
  }),
);

export function reducer(state: any, action: Action) {
  return todoLostReducer(state, action);
}
export function getTodoByIndex(todoList:ITodo[],id:number | undefined){
  return todoList.findIndex(item=>item.id === id);
}