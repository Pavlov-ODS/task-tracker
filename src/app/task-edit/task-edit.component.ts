import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  constructor(private taskService: TaskService) {}

  createTask(title: string, description: string, deadline: Date, priority: string, status: string, assignees: string[]): void {
    this.taskService.createTask({ title, description, deadline, priority, status, assignees });
  }
}