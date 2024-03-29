import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/utils/interfaces/user.interface';
import { AuthService } from 'src/app/utils/services/auth/auth.service';
import { UsersService } from 'src/app/utils/services/user/users.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  public users: User[] = [];
  public loading = false;
  public dropdownResults: User[] = [];
  public claims: any;

  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
    private route: Router,
  ) {
    this.authService.getMyClaims().then((res) => (this.claims = res));
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers('').then((res: any) => {
      this.users = res.data;
      this.dropdownResults = res.data;
      this.loading = false;
    });
  }

  public search(e: any) {
    this.loading = true;
    this.userService.getUsers(e).then((res: any) => {
      this.loading = false;
      this.users = res.data;
    });
  }

  public updateAdmin(user: { role: string; id: string }) {
    this.userService.updateRole(user).subscribe();
  }

  public logout() {
    this.route.navigateByUrl('auth/login');
    this.authService.signOut().then();
  }
}
