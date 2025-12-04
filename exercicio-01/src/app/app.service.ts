import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';

export const DATA_URL = new InjectionToken('DATA_URL');

export interface Entity {
    id?: number;
}

@Injectable()
export class AppService {
    protected API_URL = 'https://pokeapi.co/api/v2';

    constructor(
        protected _http: HttpClient,
    ) {
    }

    getPokemonList() {
        return this._http.get<NamedAPIResourceList>(this.API_URL + '/pokemon');
    }

    getPokemonDetails(id: string) {
        return this._http.get<Pokemon>(this.API_URL + '/pokemon/' + id);
    }
}
