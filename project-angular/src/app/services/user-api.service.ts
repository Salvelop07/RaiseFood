import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../beans/user';
import { ValidatorUserObj } from '../beans/user-validator';
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
    return this.http.post<User>(`${apiUrl}/byUsername`, user, httpOptions);
  }

  getUserByEmail(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/byEmail`, user, httpOptions);
  }

  getUserByUsernameAndPassword(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/verify`, user, httpOptions);
  }

  updateUser(user: User): Observable<ValidatorUserObj> {
    return this.http.post<ValidatorUserObj>(`${apiUrl}`, user, httpOptions);
  }
}
