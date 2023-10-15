import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListRoutingModule } from './todos-list.routing.module';
import { TodosListComponent } from './todos-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoAddEditItemComponent } from './todo-add-edit-item/todo-add-edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodosListComponent,TodoAddEditItemComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosListRoutingModule,
    SharedModule
  ],
})
export class TodosListModule {}
