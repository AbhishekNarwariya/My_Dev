import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'abhi@123' && password === '123456') {
      this.loggedIn = true
      return true
    }
    return false
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
