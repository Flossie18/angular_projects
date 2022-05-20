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
  addDescriptionValue: string = "";
  
  taskForms: FormGroup;


  constructor(private crudService: CrudService) { 
    this.taskForms = new FormGroup({
      description:new FormControl(null,Validators.required),
      deadline:new FormControl(null,Validators.required),
      status_id:new FormControl(null,Validators.required)
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


}