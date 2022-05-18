import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskArr : Task[] = [];
  selectedTask !: Task;

  addTaskValue : string = "";
  editTaskValue : string = "";
  addDescriptionValue: string = "";

  taskForms: FormGroup;


  constructor(private crudService: CrudService) { 
    this.taskForms = new FormGroup({
      description:new FormControl(null,Validators.required),
      deadline:new FormControl(null,Validators.required),
      status_id:new FormControl('Select status ',Validators.required)
    });

  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {

    this.crudService.getAllTask().subscribe((response:any)=>{
      console.log(response);
      this.taskArr = response.data
    },err=>{

    });
  }
  
  addTask(){

    let newTask = new Task();
    newTask.description = this.addDescriptionValue;
    this.crudService.addTask(newTask).subscribe(res =>{
      console.log(res);
    },
    err => {
      alert(err);
    })
  }


  editTask() {
    let newTask = new Task();
    newTask.description = this.addDescriptionValue;
    this.crudService.editTask(newTask).subscribe((res:any) => {
      this.taskArr = res.data
    }, err => {
            alert("Failed to update task");
    })
  }

  deleteTask(etask : Task){
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task");
    });
  }

  call (etask : Task){
    this.selectedTask = etask;
  }
}
