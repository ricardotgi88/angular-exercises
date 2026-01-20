import { Component, ElementRef, viewChild } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  private formElement = viewChild<ElementRef<HTMLFormElement>>('form');
  constructor(private loginService: LoginService) { }

  onSubmitCredentials(username: string, password: string) {
    this.loginService.submitLogin({ username, password }).subscribe();
    //this.formElement()?.nativeElement.reset();
  }

  onSubmitTest() {
    this.loginService.submitTest();
  }
}
