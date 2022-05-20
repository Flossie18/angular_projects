import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTodoListItemsComponent } from './filter-todo-list-items.component';

describe('FilterTodoListItemsComponent', () => {
  let component: FilterTodoListItemsComponent;
  let fixture: ComponentFixture<FilterTodoListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTodoListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTodoListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
