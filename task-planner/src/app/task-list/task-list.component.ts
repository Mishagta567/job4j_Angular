import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  constructor() { }

  tasks = [
    {
      name: 'Name 101',
      category: 'Type 110',
      dateStart: '18:15 08-10-2019',
      dateEnd: '20:15 08-10-2019',
      status: 'Done'
    },
    {
      name: 'Name 102',
      category: 'Type 102',
      dateStart: '18:15 08-10-2019',
      dateEnd: '20:15 08-10-2019',
      status: 'Done'
    }
  ];

  getTaskListsSize() {
    return this.tasks.length;
  }

  deleteTaskFromArray(name: string) {
    console.log('Task' + name + 'Deleted');
  }

  filterTasks($event) {
    console.log($event.target.checked);
  }

  addTask() {
    console.log('Task added');
  }

  ngOnInit() {
  }
}

