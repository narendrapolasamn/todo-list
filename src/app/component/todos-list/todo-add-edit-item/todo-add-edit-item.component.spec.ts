import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddEditItemComponent } from './todo-add-edit-item.component';

describe('TodoAddEditComponent', () => {
  let component: TodoAddEditItemComponent;
  let fixture: ComponentFixture<TodoAddEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddEditItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
