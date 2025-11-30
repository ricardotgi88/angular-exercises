import { Component, ElementRef, Inject, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks-list/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  //private tasksService = inject(TasksService);//se usar o construtor a fazer um new... vou estar a gerar uma instância nova aqui que vai ser diferente da instância de TasksService criada noutra parte da aplicação

  // constructor(tService: TasksService) {
  //   this.tasksService = tService;
  // } 

  constructor(private tasksService: TasksService) { } //não requere declaração de variável fora do construtor, se em vez de ser private fpsse p+ublic a variável pode ser "mexida" pelo template e isso pode ser algo não desejado

  onAddTask(title: string, description: string) {
    // this.tasksService.addTask({title:title,description:description});
    this.tasksService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
