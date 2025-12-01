import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonClient } from 'pokenode-ts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio-01');

  constructor(){
    const api = new PokemonClient();
    api
    .getPokemonByName('luxray')
    .then((data) => console.log(data)) // will output "Luxray"
    .catch((error) => console.error(error));
  }
}
