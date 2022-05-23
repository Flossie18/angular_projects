import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  @Input() tasks!:Task[];
  displayTasks:Task[] = [];
  totalLength: any;
  page: number = 1;
  
  constructor() { }

  ngOnInit(): void {
   
  }

  filtertask(status_id:number){
    this.displayTasks = this.tasks.filter(rec => rec.status_id == status_id);
  }

}
