import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  name = 'Name 4';
  category = 'Type 10';
  dateStart = '18:15 08-10-2018';
  dateEnd = '20:15 08-10-2018';
  status = 'Done';

  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }

  constructor() { }

  ngOnInit() {
  }

}

