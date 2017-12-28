import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../beans/user';

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

  returnUrl: ActivatedRoute;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    let user: User = {
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
