
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

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

    public updateToken(newToken: Observable<string>) {
        this.authTokenSub.pipe(
            switchMap(oldToken => newToken),
            tap(newToken => {
                this.authTokenSub.next(newToken);
                console.log(newToken);
            })
        ).subscribe();
    }
}
