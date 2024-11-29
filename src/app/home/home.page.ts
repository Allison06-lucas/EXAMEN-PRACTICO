import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  password: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;
  passwordMatch: boolean = false;

  constructor() {}

  validatePasswords() {
    if (this.password === this.confirmPassword) {
      this.passwordMatch = true;
      this.passwordMismatch = false;
    } else {
      this.passwordMismatch = true;
      this.passwordMatch = false;
    }
  }
}


