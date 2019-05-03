import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import index from '@angular/cli/lib/cli';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  // @ts-ignore
  allTasks = [
    new Task('Call Tomm -1',
      'Not urgent',
      'May 15 2020',
      'To do',
      'May 22 2020'
    ),
    new Task(
      'Visit friend -2',
      'Not urgent',
      'Jun 18 2020',
      'To do',
      'Jun 28 2020'
    ),
    new Task(
      'Fish -3',
      'Urgent',
      'Apr 15 2020',
      'Done',
      'Apr 25 2020'
    ),
    new Task(
      'Call Sam -4',
      'Not urgent',
      'May 16 2020',
      'Done',
      'May 26 2020'
    ),
    new Task(
      'Name -5',
      'Not urgent',
      'Sep 14 2019',
      'Done',
      'Sep 24 2019'
    ),
    new Task(
      'Name -6',
      'uUrgent',
      'Oct 15 2019',
      'Over Due',
      'Oct 25 2019'
    )
  ];

  allTasks1 = [];
  vShowFinished = true;

  constructor() {
    this.allTasks1 = this.allTasks;
  }
  /////////////////////////////////

  showSearchResult = 'Check';
  onClicked(value) {
    if (value !== '') {
      this.allTasks1 = this.allTasks.slice().filter((task) => task.tStatus.startsWith(value));
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

  addNewTask($event) {
    this.allTasks1.push($event);
    // console.log('Name_1_2_3: ' + $event.name + ' Lengh: ' + this.allTasks1.length);
  }

  getTasksAmountByStatus(status) {
    return this.allTasks.filter((task) => task.tStatus === status).length;
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

  ngOnInit() {
  }
}

