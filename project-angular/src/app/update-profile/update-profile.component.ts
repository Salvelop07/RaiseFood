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
  passwordUpdated: boolean = false;
  errorMessage: string;
  successMessage: string;

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
    this.firstName.setValue(this.currentUser.firstName);
  }

  resetInput(inputField: FormControl, val: any) {
    inputField.setValue(val);
    inputField.markAsPristine();
    this.invalid = false;
  }

  cancel() {
    this.updatePassword = !this.updatePassword;
    this.newPassword.reset();
    this.newPassword.markAsPristine();
    this.confirmNewPassword.reset();
    this.confirmNewPassword.markAsPristine();
    this.invalid = false;
  }

  update() {
    let user: User = {
      id: this.currentUser.id, // can't be null, set to current id
      userName: this.userName.value,
      password: this.currentUser.password, // can't be null, set to current password
      email: this.email.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      role: 1,
    }
    if (this.updatePassword) {
      if (this.newPassword.value != this.confirmNewPassword.value) {
        this.invalid = true;
        this.errorMessage = "New password and confirm password do not match";
        this.newPassword.reset();
        this.confirmNewPassword.reset();
      }
      else if (this.newPassword.value == this.currentUser.password) {
        this.invalid = true;
        this.errorMessage = "Password must be different than previous password";
        this.newPassword.reset();
        this.confirmNewPassword.reset();
      }
      else {
        this.invalid = false;
        user.password = this.newPassword.value;
        this.newPassword.reset();
        this.confirmNewPassword.reset();
        this.updatePassword = false;
        this.passwordUpdated = true;
        this.successMessage = "Password successfully updated";
        this.updateForm.markAsPristine();
      }
    }
    if (!this.invalid) {
      this.loginService.update(user)
        .subscribe((validator) => {
          // do stuff here
          if (!validator.user) {
            this.errorMessage = validator.message;
            this.invalid = true;
          } else {
            console.log(validator.user);
            this.invalid = false;
            this.updateForm.markAsPristine();
            this.passwordUpdated = false;
          }
        });
    }
  }

}
