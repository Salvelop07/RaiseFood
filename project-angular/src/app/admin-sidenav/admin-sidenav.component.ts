import { Component, OnInit, Input } from '@angular/core';
import { User } from '../beans/user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  @Input()
  currentUser: User;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  profileView() {
    this.router.navigate(['confirm-profile']);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['landing']);
  }

}
