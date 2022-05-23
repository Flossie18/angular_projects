import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.css']
})
export class FilterViewComponent implements OnInit {

  @Input() tasks!:Task[];
  totalLength: any;
  page: number = 1;


  constructor() { }

  ngOnInit() {
    console.log(this.tasks);

  }


}
