import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})

export class ListRowComponent implements OnInit {

  // @Output() deleteTaskEmitter = new EventEmitter<string>();
  @Output() deleteTaskEmitter = new EventEmitter()
  @Output() valueChange = new EventEmitter();

  /////////////////////////
  @Input() result = '';
  @Output() clicked = new EventEmitter<string>();
  /////////////////////////

  Counter = 0;

  name = 'List-row-comp -10';
  category = 'Type 10';
  dateStart = '18:15 08-10-2018';
  dateEnd = '20:15 08-10-2018';
  status = 'Over Due';

  deleteTask() {
    this.Counter = this.Counter + 1;
    this.deleteTaskEmitter.emit(this.Counter);
  }

  valueChanged() {
    this.Counter = this.Counter + 1;
    this.deleteTaskEmitter.emit(this.Counter);
  }

  onClick(searchTerm) {
    this.clicked.emit(searchTerm);
  }

  constructor() { }

  ngOnInit() {
  }

}

