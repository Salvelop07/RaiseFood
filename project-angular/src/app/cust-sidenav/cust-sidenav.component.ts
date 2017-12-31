import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';

@Component({
  selector: 'app-cust-sidenav',
  templateUrl: './cust-sidenav.component.html',
  styleUrls: ['./cust-sidenav.component.css']
})
export class CustSidenavComponent implements OnInit {

  @Input()
  currentUser: User;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  orderHistoryView() {
    this.router.navigate(['order-history']);
  }

  profileView() {
    this.router.navigate(['confirm-profile']);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['dummy-page']);
  }
}
