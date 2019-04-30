import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  allTasks = [
    {
      name: 'Call Tomm -1',
      category: 'Not urgent',
      dateStart: 'May 15 2020',
      dateEnd: 'May 22 2020',
      status: 'To do'
    },
    {
      name: 'Visit friend -2',
      category: 'Not urgent',
      dateStart: 'June 18 2020',
      dateEnd: 'June 28 2020',
      status: 'To do'
    },
    {
      name: 'Fish -3',
      category: 'Urgent',
      dateStart: 'Apr 15 2020',
      dateEnd: 'Apr 25 2020',
      status: 'Done'
    },
    {
      name: 'Call Sam -4',
      category: 'Not urgent',
      dateStart: 'May 16 2020',
      dateEnd: 'May 26 2020',
      status: 'Done'
    },
    {
      name: 'Name -5',
      category: 'Type 110',
      dateStart: '18:15 08-10-2019',
      dateEnd: '20:15 08-10-2019',
      status: 'Done'
    },
    {
      name: 'Name -6',
      category: 'Type 102',
      dateStart: '18:15 08-10-2019',
      dateEnd: '20:15 08-10-2019',
      status: 'Over Due'
    }
  ];

  allTasks1 = [];
  vShowFinished = true;

  constructor() {
    this.allTasks1 = this.allTasks;
  }
  /////////////////////////////////

  value = 'Check';
  onClicked(value) {
    if (value !== '') {
      this.allTasks1 = this.allTasks.slice().filter((task) => task.status.startsWith(value));
    } else {
      this.allTasks1 = this.allTasks.slice();
    }
  }

  deleteTask(name: string) {
    console.log('Task:: ' + name + ' Deleted');
    const indx: number = this.allTasks1.findIndex((t) => t.name === name);
    if (indx > -1) {
      console.log('Task:: ' + name + ' Deleted. Index: ' + indx);
      this.allTasks1.splice(indx, 1);
    }
  }

  getTasksAmountByStatus(status) {
    return this.allTasks.filter((task) => task.status === status).length;
  }

  getTaskListsSize() {
    return this.allTasks.length;
  }

  deleteTaskFromArray($event) {
    console.log('You clicked ' + $event + ' times');
  }

  displayCounter(count) {
    console.log('Hey, I can count:' + count);
  }

  filterTasks($event) {
    this.vShowFinished = $event.target.checked;
    console.log(this.vShowFinished);
  }

  getShowFinished() {
    return this.vShowFinished;
  }

  addTask() {
    console.log('Task added');
  }

  ngOnInit() {
  }
}

