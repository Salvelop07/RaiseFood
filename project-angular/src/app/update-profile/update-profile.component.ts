import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  currentUser: User;
  allUsers: User[]; // for validating update username/email
  returnUrl: ActivatedRoute;

  updateForm: FormGroup;
  userName: FormControl;
  newPassword: FormControl;
  confirmNewPassword: FormControl;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;

  invalid: boolean = false;
  updatePassword: boolean = false;
  errorMessage: string;

  constructor(
    private loginService: LoginService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userName = new FormControl('', [
      Validators.required
    ]);
    this.newPassword = new FormControl('', [
      // Validators.required
    ]);
    this.confirmNewPassword = new FormControl('', [
      // Validators.required
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
    this.updateForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      userName: this.userName,
      newPassword: this.newPassword,
      confirmNewPassword: this.confirmNewPassword
    });
    this.userName.setValue(this.currentUser.userName);
    // this.password.setValue(this.currentUser.password);
    this.email.setValue(this.currentUser.email);
    this.firstName.setValue(this.currentUser.firstName);
    this.lastName.setValue(this.currentUser.lastName);
  }

  resetInput(inputField: FormControl, val: any) {
    inputField.setValue(val);
    inputField.markAsPristine();
  }
  
  cancel() {
    this.updatePassword = !this.updatePassword;
    this.newPassword.reset();
    this.newPassword.markAsPristine();
    this.confirmNewPassword.reset();
    this.confirmNewPassword.markAsPristine();
  }

  update() {
    if (this.updatePassword) {
      if (this.newPassword != this.confirmNewPassword) {
        this.invalid = true;
        this.errorMessage = "New password and confirm password do not match";
      }
    }
    if (!this.invalid) {
      this.loginService.update(this.currentUser)
        .subscribe((validator) => {
          // do stuff here
        });
    }
  }

}
