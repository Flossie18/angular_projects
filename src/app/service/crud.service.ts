import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../model/task';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }
export class CrudService {

  serviceURL : string;

  constructor(private http : HttpClient) {
    this.serviceURL = ""
    this.serviceURL = "http://localhost/todo_app/createtodo.php"
    
   }

   configUrl = "http://localhost/todo_app/fetchtodo.php";

getConfig() {
  let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(this.serviceURL,{headers: headers});
}

   addTask(task: Task) : Observable<Task> {
     return this.http.post<Task>(this.serviceURL,task);
   }
   getAllTask() : Observable<Task[]> {
    return this.http.get<Task[]>(this.configUrl);
  }
  // deleteTask(task: Task) : Observable<Task> {
  //   return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  // }
  // editTask(task: Task) : Observable<Task> {
  //   return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  // }

}
