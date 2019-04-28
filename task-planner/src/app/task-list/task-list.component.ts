import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  products = [
    {
      name: 'Call Tomm -1',
      category: 'Not urgent',
      dateStart: 'May 15 2020',
      dateEnd: 'May 22 2020',
      status: 'To do',
      p_id: 1, pname: 'omega', pprice: 101, pimg: '1', soh: 5
    },
    {
      name: 'Visit friend -2',
      category: 'Not urgent',
      dateStart: 'June 18 2020',
      dateEnd: 'June 28 2020',
      status: 'To do',
      p_id: 2, pname: 'timex', pprice: 102, pimg: '2', soh: 10
    },
    {
      name: 'Fish -3',
      category: 'Urgent',
      dateStart: 'Apr 15 2020',
      dateEnd: 'Apr 25 2020',
      status: 'Done',
      p_id: 3, pname: 'titan', pprice: 103, pimg: '3', soh: 15
    },
    {
      name: 'Call Sam -4',
      category: 'Not urgent',
      dateStart: 'May 16 2020',
      dateEnd: 'May 26 2020',
      status: 'Done',
      p_id: '4', pname: 'fossil', pprice: 104, pimg: '4', soh: 20
    },
    {
      name: 'Name -5',
      category: 'Type 110',
      dateStart: '18:15 08-10-2019',
      dateEnd: '20:15 08-10-2019',
      status: 'Done',
      p_id: 5, pname: 'rolex', pprice: 105, pimg: '5', soh: 25
    },
    {
      name: 'Name -6',
      category: 'Type 102',
      dateStart: '18:15 08-10-2019',
      dateEnd: '20:15 08-10-2019',
      status: 'Over Due',
      p_id: 6, pname: 'Cob-brig', pprice: 106, pimg: '6', soh: 30
    }
  ];

  products1 = [
  ];
  products2 = [
    {
      name: 'Name -26',
      category: 'Type 122',
      dateStart: '18:15 08-10-2020',
      dateEnd: '20:15 08-10-2019',
      status: 'To Do',
      p_id: 6, pname: 'Cob-brig', pprice: 106, pimg: '6', soh: 30
    }
  ];

  constructor() {
    // @ts-ignore
    this.products1 = this.products;
  }
  /////////////////////////////////

  value = 'Watch';
  onClicked(value) {
    if (value !== '') {
      this.products1 = this.products.filter((task) => task.status.startsWith(value));
    } else {
      this.products1 = this.products;
    }
  }

  deleteTask(name: string) {
    console.log('Task ' + name + ' Deleted');
  }

  getTasksAmountByStatus(status) {
    return this.products.filter((task) => task.status === status).length;
  }

  getTaskListsSize() {
    return this.products.length;
  }

  deleteTaskFromArray($event) {
    console.log('You clicked ' + $event + ' times');
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

