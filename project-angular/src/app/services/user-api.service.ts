import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../beans/user';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl: string = `${environment.apiUrl}/user`;

@Injectable()
export class UserApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<User[]>(apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${apiUrl}/${id}`);
  }

  getUserByUsername(user: User): Observable<User> {

    return this.http.post<User>(`${apiUrl}/username`, user, httpOptions);
  }

  getUserByUsernameAndPassword(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/verify`, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}`, user, httpOptions);
  }
}
