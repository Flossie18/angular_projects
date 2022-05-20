import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {

  taskArr : Task[] = [];
  selectedTask !: Task;

  addTaskValue : string = "";
  editTaskValue : string = "";
  addDescriptionValue: string = "";
  taskForms: any;

  constructor(private crudService: CrudService) { 
    this.taskForms = new FormGroup({
      description:new FormControl(null,Validators.required),
      deadline:new FormControl(null,Validators.required),
      status_id:new FormControl(null,Validators.required)
    });

  }

  ngOnInit(): void {
  }
  // editTask() {
  //   let newTask = new Task();
  //   newTask.description = this.addDescriptionValue;
  //   this.crudService.editTask(newTask).subscribe((res:any) => {
  //     this.taskArr = res.data
  //   }, err => {
  //           alert("Failed to update task");
  //   })
  // }

  // deleteTask(etask : Task){
  //   this.crudService.deleteTask(etask).subscribe(res => {
  //     this.ngOnInit();
  //   }, err => {
  //     alert("Failed to delete task");
  //   });
  // }

  // call (etask : Task){
  //   this.selectedTask = etask;
  // }

}
