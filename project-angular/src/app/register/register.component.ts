import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;

  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    let user = {
      id: null,
      userName: this.userName,
      password: this.password,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      role: 1,
    }
    this.loginService.register(user)
      .subscribe((user) => {
        // do stuff here
      });
  }

}
