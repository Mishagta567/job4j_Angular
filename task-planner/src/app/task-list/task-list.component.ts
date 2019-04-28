import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  constructor() { }

  products = [
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

  getTasksAmountByStatus(status) {
    return this.products.filter((task) => task.status === status).length;
  }

  getTaskListsSize() {
    return this.products.length;
  }

  /*deleteTaskFromArray(name: string) {
    console.log('Task' + name + 'Deleted');
  }*/

  deleteTaskFromArray($event) {
    console.log('Task' + $event + 'Deleted');
  }

  displayCounter(count) {
    console.log('Hey, I can count:' + count);
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

