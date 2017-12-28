import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../beans/user';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  returnUrl: ActivatedRoute;

  registerForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;

  invalid: boolean = false;
  errorMessage: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
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
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.firstName = new FormControl('', [
      Validators.required
    ]);
    this.lastName = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      userName: this.userName,
      password: this.password
    });
  }

  register() {
    let user: User = {
      id: null,
      userName: this.userName.value,
      password: this.password.value,
      email: this.email.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      role: 1,
    }
    this.registerForm.reset();
    this.loginService.register(user)
      .subscribe((user) => {
        // do stuff here
        if (user === null) {
          this.invalid = true;
          this.errorMessage = ""
        }
        else { 
          this.invalid = false;
        }
      });
  }

}
