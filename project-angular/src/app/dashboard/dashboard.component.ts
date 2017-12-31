import { Component, OnInit, Output, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  branding: string;
  
  loginModal: boolean = false;
  registerModal: boolean = false;

  currentUser: User;
  isLoggedIn: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        this.isLoggedIn = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
    });
  }

  ngOnInit() {
  }

  toggleLoginModal() {
    this.loginModal = !this.loginModal;
  }

  toggleRegisterModal() {
    this.registerModal = !this.registerModal;
  }

  orderHistoryView() {
    this.router.navigate(['order-history']);
  }

  profileView() {
    this.router.navigate(['confirm-profile']);
  }

  logout() {
    this.loginService.logout();
  }

  // setUser() { // only run when signalled from login component 
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // }

}
