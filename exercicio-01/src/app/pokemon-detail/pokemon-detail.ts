import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
  providers: [AppService],
})

export class PokemonDetail {
  private pokemonObservable$?: Observable<Pokemon>;
  public pokemonDetails?: Pokemon;

  constructor(activatedRoute: ActivatedRoute, appService: AppService) {
    activatedRoute.params.subscribe(params => this.pokemonObservable$=appService.getPokemonDetails(params['id']));
    this.pokemonObservable$?.subscribe(pokemon=>this.pokemonDetails=pokemon);
  }
}
