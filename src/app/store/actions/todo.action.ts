import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/model';


export const todoLists = createAction(
  '[todo list] get todo list action'
);

export const todoListSuccess = createAction(
    '[todo list] get todo list action success',
    props<{ payload: ITodo[] }>()
);

export const createTodo = createAction(
  '[create todo] create todo  action',
  props<{ payload: ITodo }>()
);

export const todoCreateSuccess = createAction(
  '[create todo] create todo action success',
  props<{ payload: ITodo }>()
);

export const updateTodo = createAction(
  '[update todo] update todo  action',
  props<{ payload: ITodo }>()
);

export const todoUpdateSuccess = createAction(
  '[ update todo] update todo action success',
  props<{ payload: ITodo }>()
);


export const deleteTodo = createAction(
  '[delete todo] delete todo  action',
  props<{ id: number }>()
);

export const todoDeleteSuccess = createAction(
  '[ delete todo] delete todo action success',
  props<{ payload: ITodo }>()
);

