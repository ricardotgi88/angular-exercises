import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component/login.component';

const components = [NavbarComponent,LoginComponent];

@NgModule({
  declarations: [components],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule,FormsModule],
  exports: [components],
})
export class ComponentsModule {}
