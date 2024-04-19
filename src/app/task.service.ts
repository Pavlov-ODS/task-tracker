import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);

  getAllTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  createTask(task: Task): void {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
    // Сохранение в localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks.getValue()));
  }
}