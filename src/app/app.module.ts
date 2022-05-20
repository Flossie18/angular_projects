import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/todo/dashboard/dashboard.component';
import { TodoListItemsComponent } from './component/todo/todo-list-items/todo-list-items.component';
import { FilterTodoListItemsComponent } from './component/todo/filter-todo-list-items/filter-todo-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoListItemsComponent,
    FilterTodoListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
