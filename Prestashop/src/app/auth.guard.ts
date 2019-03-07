import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './login/services/auth-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.authenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
