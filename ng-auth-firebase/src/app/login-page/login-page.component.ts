import { Component, OnInit } from '@angular/core';
import { AuthService } from "../providers/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _authService: AuthService) {  }

  ngOnInit() {

  }

  login() {
    this._authService.loginWithGoogle();
  }

}
