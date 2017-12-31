import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../beans/user';


@Component({
  selector: 'app-confirm-profile',
  templateUrl: './confirm-profile.component.html',
  styleUrls: ['./confirm-profile.component.css']
})
export class ConfirmProfileComponent implements OnInit {

  currentUser: User;

  confirmForm: FormGroup;
  password: FormControl;
  invalid: boolean = false;
  errorMessage: string;

  returnUrl: ActivatedRoute;



  constructor(
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.confirmForm = new FormGroup({
      password: this.password
    });
  }

  cancel() {
    this.router.navigate(['landing']);
  }

  confirm() {
    if (this.password.value != this.currentUser.password) {
      this.invalid = true;
      this.errorMessage = "Incorrect password";
    } else {
      this.router.navigate(['update-profile']);
    }
  }

}
