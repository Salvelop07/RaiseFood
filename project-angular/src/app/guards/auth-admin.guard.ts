import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../beans/user';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && (currentUser.role == 2)) {
      return true;
    }
    this.router.navigate(['/dummy-page'], { queryParams: { returnUrl: state.url }})
    return false;
  }
}
