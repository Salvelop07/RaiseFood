import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  currentUser: User;

  constructor(
    private loginService: LoginService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  update() {
    console.log(this.currentUser);
    this.loginService.update(this.currentUser)
      .subscribe((user) => {

      });
  }

}
