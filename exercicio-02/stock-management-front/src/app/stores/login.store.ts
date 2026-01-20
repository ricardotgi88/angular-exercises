
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';

export const DATA_URL = new InjectionToken('DATA_URL');

export interface Entity {
    id?: number;
}

@Injectable(
    {
        providedIn: "root",
    }
)
export class LoginStore {

    private authTokenSub = new BehaviorSubject<string>('');
    public authToken$ = this.authTokenSub.asObservable();

    public updateToken(newTokenObs: string) {
        this.authTokenSub.next(newTokenObs);
    }
}
