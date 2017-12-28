import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { User } from '../beans/user';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: ActivatedRoute;

  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userName = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  login() {
    let user: User = {
      id: null,
      userName: this.userName.value,
      password: this.password.value,
      email: null,
      firstName: null,
      lastName: null,
      role: null,
    }
    // if (this.loginService.hasEmptyFields(user)) {
    //   console.log("empty");
    // }
    this.loginService.login(user)
      .subscribe((user) => {
        // whatever is needed can be done here
        // Just for testing
      });
  }

}
