import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signin() {
    this.authService.login({email: this.email, password: this.password})
      .then(resolve => {console.log("hello");
        this.router.navigate(['gallery']);})
      .catch(error => this.errorMsg = error.message);
  }

}
