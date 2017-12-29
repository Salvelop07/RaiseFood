import { Component, OnInit, Output, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginModal: boolean = false;
  registerModal: boolean = false;
  
  currentUser: User;
  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  toggleLoginModal() {
    this.loginModal = !this.loginModal;
  }

  toggleRegisterModal() {
    this.registerModal = !this.registerModal;
  }

}
