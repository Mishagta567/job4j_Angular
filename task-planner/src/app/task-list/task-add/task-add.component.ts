import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})


export class TaskAddComponent implements OnInit {

  constructor() { }
  taskName: string;
  taskCategory: string;
  taskDateStart: string;
  task: Task;

  @Input() vEditThisTaskTA = new EventEmitter<string>();
  @Output() newTask01 = new EventEmitter<Task>();

  addTask() {
    // console.log('Task added: ' + this.taskName + ', Category: ' + this.taskCategory);
    this.newTask01.emit( new Task(this.taskName, this.taskCategory, this.taskDateStart, 'To Do', '--'));
    this.taskName = '';
    this.taskCategory = '';
    this.taskDateStart = '';
  }

  ngOnInit() {
  }

}
