import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks-list/tasks.service';

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');//depois tem de se importar em todo o lado o TasksServiceToken ao imvés do TasksService

bootstrapApplication(AppComponent, {
    providers: [{ provide: TasksServiceToken,  useClass: TasksService }],
}).catch((err) => console.error(err));

//bootstrapApplication(AppComponent).catch((err) => console.error(err)); se definirmos na propria class que o service é @Injectable na root, não é preciso dizer nada aqui
