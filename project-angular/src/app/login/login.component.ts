import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { User } from '../beans/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: ActivatedRoute;
  userName: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    let user: User = {
      id: null,
      userName: this.userName,
      password: this.password,
      email: null,
      firstName: null,
      lastName: null,
      role: null,
    }
    this.loginService.login(user)
      .subscribe((user) => {
        // whatever is needed can be done here
        // Just for testing
      });
  }

}
