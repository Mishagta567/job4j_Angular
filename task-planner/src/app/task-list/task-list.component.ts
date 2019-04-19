import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  constructor() { }
  name = 'Name 10';
  category = 'Type 10';
  dateStart = '18:15 08-10-2018';
  dateEnd = '20:15 08-10-2018';
  status = 'Done';

  filterTasks($event) {
    console.log($event.target.checked);
  }

  addTask() {
    console.log('Task added');
  }

  ngOnInit() {
  }
}

