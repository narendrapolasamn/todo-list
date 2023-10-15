import { Component, EventEmitter,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITodo } from 'src/app/model';

@Component({
  selector: 'app-todo-add-edit-item',
  templateUrl: './todo-add-edit-item.component.html',
  styleUrls: ['./todo-add-edit-item.component.scss'],
})
export class TodoAddEditItemComponent {
  @Input() todoItem: ITodo | undefined;
  @Output() save =  new EventEmitter();
  @Output() cancel = new EventEmitter();
 addTodoForm: FormGroup | undefined;
  ngOnInit() {
    this.addTodoForm = new FormGroup({
      userName: new FormControl(this.todoItem?.userName ?? '', Validators.required),
      todoText: new FormControl(this.todoItem?.todoText ?? '', Validators.required),
    });
  }

  addTodo() {
     this.save.emit(this.addTodoForm?.value);
  }
  cancelTodo(){
    this.cancel.emit();
  }
}
