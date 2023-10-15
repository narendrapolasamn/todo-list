import { ITodo } from "src/app/model/Itodo"


export interface AppState {
  todoListState:TodoListState
}

export interface TodoListState{
  todoList:ITodo[]
}
