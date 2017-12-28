import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../beans/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private uas: UserApiService
  ) { }

  isLoggedIn() {
    return this.loggedIn.asObservable().share();
  }

  hasEmptyFields(user: User): boolean {
    for (let key in user) {
      if ((user[key] === '') || (user[key] === undefined)) {
        return true;
      }
    }
    return false;
  }

  login(user: User): Observable<User> {
    return this.uas.getUserByUsernameAndPassword(user)
      .map((user) => {
        if (user !== null) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loggedIn.next(true);
        }
        return user;
      });
  }

  register(user: User): Observable<User> {
    return this.uas.updateUser(user).map((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn.next(true);
      return user;
    })
  }

  update(user: User): Observable<User> {
    return this.uas.updateUser(user).map((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

}
