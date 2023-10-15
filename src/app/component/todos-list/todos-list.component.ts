import {  Component, OnInit, ViewChild } from '@angular/core';
import {  Subject, takeUntil } from 'rxjs';
import { ITodo } from 'src/app/model';
import { TodoListFacade } from 'src/app/services';
import * as TodoListConfig  from '../../config'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator | undefined;
  editMode: boolean = true;
  currentTodo: ITodo | undefined;
  displayedColumns = TodoListConfig.displayColumns;
  itemsNotFound = TodoListConfig.NoResulstFound;
  todoDataSource=  new MatTableDataSource<ITodo>;
  destroyed$: Subject<boolean> = new Subject();


  constructor(private todoFacade: TodoListFacade,
              private dialog: MatDialog) {}

ngOnInit(): void {
     this.todoFacade.getTodoListITems();
     this.todoFacade.todoLostItems$
                    .pipe(takeUntil(this.destroyed$))
                    .subscribe((todos:ITodo[])=>{
                      this.todoDataSource.data = todos;
                      if(this.paginator)
                       this.todoDataSource.paginator = this.paginator;
                    })


 }
  editTodo(todo: ITodo) {
    this.currentTodo = todo;
    this.editMode = false;
  }

  deleteTodo(todo:ITodo) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '45rem',
      data: {title: todo.userName}
    })
    dialogRef.afterClosed().subscribe((result:boolean) => {
      if(result){
        this.todoFacade.deleteTodoItem(todo.id ?? 0);
        this.resetAddEditMode();
      }
    });
  }
  createTodo(todo:ITodo){
    if(this.currentTodo){
      this.todoFacade.updateTodoItem({id:this.currentTodo.id, ...todo})
    }
    else{
     this.todoFacade.createTodoItem(todo);
    } 
    this.resetAddEditMode();
  }
  toggleEditMode() {
    this.editMode = false;
    this.currentTodo = undefined;
  }
  trackByFn(index:number,item:ITodo){
    return index;
  }
  cancelTodo(event:unknown){
    this.resetAddEditMode();
  }
  resetAddEditMode(){
    this.editMode = true;
    this.currentTodo = undefined;
  }
}
