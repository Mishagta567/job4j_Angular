import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})

export class ListRowComponent implements OnInit {

  // @Output() deleteTaskEmitter = new EventEmitter<string>();
  @Output() deleteTaskEmitter = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  /////////////////////////
  @Input() result = '';
  @Input() allTasks1 = '';
  @Input() vShowFinished = true;
  @Output() statusSearch = new EventEmitter<string>();
  @Output() nameToDelete = new EventEmitter<string>();
  /////////////////////////
  @Output() vEditTask = new EventEmitter<string>();

  onClick(searchTerm) {
    this.statusSearch.emit(searchTerm);
  }

  showTaskToEdit($value) {
    this.vEditTask.emit($value);
  }

  deleteRow(taskName) {
    this.nameToDelete.emit(taskName);
  }

  getStatus(vShowFinished, vStatus) {
    if (!vShowFinished && vStatus === 'Done') {
      return false;
    } else {
      return true;
    }
  }

  constructor() { }

  ngOnInit() {
  }


}

