import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {Observable} from "rxjs";
import { todoLists,createTodo, deleteTodo, updateTodo } from "../store/actions";
import { BaseFacade } from "../store/facade";
import { getTodoListItems } from "../store/reducers";
import { ITodo } from "../model";

@Injectable({
    providedIn: 'root'
})
export class TodoListFacade extends BaseFacade {
    constructor(protected override readonly state$: Store<any>) {
        super(state$);
    }
    
    readonly todoLostItems$: Observable<ITodo[]> = this.takeAll(
        getTodoListItems
    );
   
    readonly getTodoListITems = () => {
        this.dispatch(todoLists());
    }
    readonly createTodoItem = (todo:ITodo)=>{
        this.dispatch(createTodo({payload:todo}));
    }
    readonly updateTodoItem = (todo:ITodo)=>{
        this.dispatch(updateTodo({payload:todo}));
    }

    readonly deleteTodoItem = (todoId:number)=>{
        this.dispatch(deleteTodo({id:todoId}))
    }
}