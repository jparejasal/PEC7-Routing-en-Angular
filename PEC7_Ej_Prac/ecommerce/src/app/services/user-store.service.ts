import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LoginComponent } from '../authentication/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor() { }
  usuarioLogeado() {
    return localStorage.getItem('token');
  }
}
