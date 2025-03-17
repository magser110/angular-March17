import { Component, signal } from '@angular/core';
import { Task } from '../shared/modeled/task.model';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = signal<string []>([
    'wash dishes',
      'walk dog',
      'pay bills'
  ])
}
