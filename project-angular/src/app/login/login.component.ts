import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { User } from '../beans/user';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { environment } from '../../environments/environment.prod';

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

  invalid: boolean = false;
  errorMessage: string;

  @Input()
  loginModal: boolean;

  @Output()
  loginModalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  closeModal() {
    this.loginModal=false
    this.loginModalEmitter.emit(this.loginModal);
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
    this.loginForm.reset();
    this.loginService.login(user)
      .subscribe((user) => {
        if (user === null) {
          this.invalid = true;
          this.errorMessage = "Invalid username or password";
        }
        else {
          this.invalid = false;
        }
      });
  }
}
