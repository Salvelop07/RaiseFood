import { Component, OnInit, Input } from '@angular/core';
import { User } from '../beans/user';

@Component({
  selector: 'app-anon-sidenav',
  templateUrl: './anon-sidenav.component.html',
  styleUrls: ['./anon-sidenav.component.css']
})
export class AnonSidenavComponent implements OnInit {

  loginModal: boolean = false;
  registerModal: boolean = false;

  @Input()
  isLoggedIn: boolean;

  @Input()
  currentUser: User;

  constructor() { }

  ngOnInit() {
  }

  toggleLoginModal() {
    this.loginModal = !this.loginModal;
  }

  toggleRegisterModal() {
    this.registerModal = !this.registerModal;
  }

}
