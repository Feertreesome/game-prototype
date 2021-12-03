import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { ApiService } from '../api/api.service';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public login(email: string, password: string) {
    return this.apiService
      .post('/api/login', { email, password })
      .pipe(tap((res) => this.setSession, shareReplay(1)))
      .toPromise();
  }

  public setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration = localStorage.getItem('expires_at') as any;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
