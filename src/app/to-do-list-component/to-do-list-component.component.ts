import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {

  tasks: string[]
  taskToAdd: string
  constructor() { }

  ngOnInit(): void {
    this.tasks = ['Coffee', 'Breakfast']
  }

  addTask() {
    this.tasks.push(this.taskToAdd)
    this.taskToAdd='';
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }
}
