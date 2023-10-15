import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { todoLostReducer } from "./app.reducer";
import { AppState, TodoListState } from "./app.state"

export const reducers: ActionReducerMap<AppState> = {
  todoListState : todoLostReducer,
};

export const getTodoListState =
  createFeatureSelector<TodoListState>("todoListState");

export const getTodoListItems = createSelector(
  getTodoListState,
  (state: TodoListState) => {
     return state.todoList;
  }
);
