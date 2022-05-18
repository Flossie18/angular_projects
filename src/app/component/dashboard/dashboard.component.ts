import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = "";
  editTaskValue : string = "";
  addDescriptionValue: string = "";

  constructor(private crudService: CrudService) { }

  async ngOnInit() {
    this.taskObj = new Task();
    this.editTaskValue = "";
    this.addTaskValue = "";
    this.addDescriptionValue = "";
    this.taskArr  = [];
   await this.getAllTasks();
  }

  


 async showConfig() {
  await this.crudService.getConfig()
    // clone the data object, using its known Config shape
    .toPromise();
    // subscribe((response)=>{
    //   alert(JSON.stringify(response));
    // });
}

  async getAllTasks() {
  
    const res=  await this.crudService.getConfig()
    .toPromise().then(response=>response);
    const d=JSON.stringify(res)
  
    console.log(d);
    // this.crudService.getConfig()
    // .subscribe((response)=>{
    //   console.log(JSON.stringify(response));
    // });
    // console.log(res);
   

    // this.crudService.getAllTask().subscribe(res => {
    //   this.taskArr = res;
    // }, err => {
    //       alert("Cannot fetch task list");
    // })
  }
  
  addTask(){
    this.taskObj.description = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res =>{
        this.ngOnInit();
        this.addTaskValue = "";
    },
    err => {
      alert(err);
    })
  }

  addDescrition(){
    this.taskObj.description = this.addDescriptionValue;
    this.crudService.addTask(this.taskObj).subscribe(res =>{
        this.ngOnInit();
        this.addDescriptionValue = "";
    },
    err => {
      alert(err);
    })
  }

//   editTask() {
//     this.taskObj.task_name = this.editTaskValue;
//     this.crudService.editTask(this.taskObj).subscribe(res => {
//        this.ngOnInit();
//     }, err => {
//             alert("Failed to update task");
//     })
// }

// deleteTask(etask : Task){
//   this.crudService.deleteTask(etask).subscribe(res => {
//     this.ngOnInit();
//   }, err => {
//     alert("Failed to delete task");
//   });
// }
// call (etask : Task){
//   this.taskObj = etask;
//   this.editTaskValue = etask.task_name;
// }
}
