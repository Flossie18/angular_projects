<<<<<<< HEAD
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../model/task';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from '../model/task';
>>>>>>> 0ddce82753af494072b79a9e75b668712633b1e2

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }
=======
>>>>>>> 0ddce82753af494072b79a9e75b668712633b1e2
export class CrudService {

  serviceURL : string;

  constructor(private http : HttpClient) {
<<<<<<< HEAD
    this.serviceURL = ""
    this.serviceURL = "http://localhost/todo_app/createtodo.php"
    
   }

   configUrl = "http://localhost/todo_app/fetchtodo.php";

getConfig() {
  let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(this.serviceURL,{headers: headers});
}

=======
    this.serviceURL = "http://localhost:3000/tasks"
   }
>>>>>>> 0ddce82753af494072b79a9e75b668712633b1e2
   addTask(task: Task) : Observable<Task> {
     return this.http.post<Task>(this.serviceURL,task);
   }
   getAllTask() : Observable<Task[]> {
<<<<<<< HEAD
    return this.http.get<Task[]>(this.configUrl);
  }
  // deleteTask(task: Task) : Observable<Task> {
  //   return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  // }
  // editTask(task: Task) : Observable<Task> {
  //   return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  // }
=======
    return this.http.get<Task[]>(this.serviceURL);
  }
  deleteTask(task: Task) : Observable<Task> {
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  }
  editTask(task: Task) : Observable<Task> {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  }
>>>>>>> 0ddce82753af494072b79a9e75b668712633b1e2

}
