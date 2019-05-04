import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  // name: string;

  @Input() vEditThisTaskET = new EventEmitter<string>();
  @Input() vEditThisTaskObjCp = new EventEmitter<Task>();

  @Output() vCancelET = new EventEmitter<boolean>();
  @Output() taskAfterEdit = new EventEmitter<Task>();

  cancel() {
    this.vCancelET.emit(true);
  }

  saveTask() {
    // @ts-ignore
    this.taskAfterEdit.emit(this.vEditThisTaskObjCp);
  }

  constructor() {
    this.vCancelET.emit(false);
  }

  ngOnInit() {
  }

}
