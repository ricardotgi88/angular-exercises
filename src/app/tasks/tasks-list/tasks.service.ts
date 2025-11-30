import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../task.model';

@Injectable({
  providedIn: 'root'//significa que este componente pode ser injetado em qualquer sítio da applicação
})
export class TasksService {

  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {

    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTasksSatus(taskId: String, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? { ...task, status: newStatus } : task))
  }
}
