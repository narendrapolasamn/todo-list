import { Injectable } from "@angular/core";
import { TodoListAPIService } from "src/app/services";
import { Actions,createEffect,ofType} from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import * as TodoListActions from '../actions'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ITodo } from "src/app/model";

@Injectable()
export class TodoListEffects{

    constructor(private readonly todoListService:TodoListAPIService,
        private readonly actions$:Actions){

    }
    todoListItemEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoListActions.todoLists),
      mergeMap(action =>
        this.todoListService.getTodoList().pipe(
          map((data: unknown) => {
            return TodoListActions.todoListSuccess({ payload: <ITodo[]>data });
          }),
          catchError((error) => {
            return of(error);
          })
        )
      )
    )
  );
  todoCreateItemEffect$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(TodoListActions.createTodo),
    mergeMap((action) =>
      this.todoListService.createTodo(action.payload).pipe(
        map((data: ITodo)=>{
          return TodoListActions.todoCreateSuccess({ payload: <ITodo>data });
        }),
        catchError((error) => {
          return of(error);
        })
      )
    )
  )
);
todoUpdateEffect$: Observable<Action> = createEffect(() =>
this.actions$.pipe(
  ofType(TodoListActions.updateTodo),
  mergeMap((action) =>
    this.todoListService.updateTodo(action.payload).pipe(
      map((data: ITodo)=>{
        return TodoListActions.todoUpdateSuccess({ payload: <ITodo>data });
      }),
      catchError((error) => {
        return of(error);
      })
    )
  )
)
);
todoDeleteItemEffect$: Observable<Action> = createEffect(() =>
this.actions$.pipe(
  ofType(TodoListActions.deleteTodo),
  mergeMap((action) =>
    this.todoListService.deleteTodo(action.id).pipe(
      map((data: ITodo)=>{
        return TodoListActions.todoDeleteSuccess({ payload: <ITodo>data });
      }),
      catchError((error) => {
        return of(error);
      })
    )
  )
)
);
}