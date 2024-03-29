import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public session: Observable<any> = of(this.authService.session);
  public isUserLogin: boolean = false;
  constructor(
    private readonly authService: AuthService,
    private router: Router,
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userLoggedIn();

    this.session.subscribe((res) => {
      if (res) {
        this.isUserLogin = true;
      } else {
        this.router.navigateByUrl('/auth/login');
        this.isUserLogin = false;
      }
    });
    return this.isUserLogin;
  }

  public userLoggedIn() {
    this.authService.authChanges((_, session) => {
      this.session = of(session);
    });
  }
}
