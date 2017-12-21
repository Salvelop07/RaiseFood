import { Injectable } from '@angular/core';
import { User } from './user';
import { UserApiService } from './user-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  currentUser: User;
  constructor(private uas: UserApiService) { }

  login(username: string, password: string): any {
    return this.uas.getAllUsers().map(users => {
      let filteredUsers = users.filter(user => {
        if(user.username.toLowerCase() == username.toLowerCase() && user.password==password) return user;
      });
      if (filteredUsers.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(filteredUsers[0]));
      }
      return filteredUsers[0];
    });
  }
}
