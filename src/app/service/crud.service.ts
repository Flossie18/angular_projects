import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../model/task';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CrudService {

  serviceURL : string;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost/todo_app/"
   }

    setHeaders(){
      let headers = new HttpHeaders();
      return {headers:headers.set('Content-Type', 'application/json; charset=utf-8')};
    }

   addTask(task: Task) : Observable<any> {
     return this.http.post<Task>(this.serviceURL+'createtodo.php',task,this.setHeaders());
   }

  getAllTask() : Observable<any> {
    return this.http.get(this.serviceURL+'fetchtodo.php',this.setHeaders());
  }

  deleteTask(task: Task) : Observable<Task> {
    return this.http.delete<Task>(this.serviceURL+'/'+task.id,this.setHeaders());
  }

  editTask(task: Task) : Observable<Task> {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task,this.setHeaders());
  }

}
