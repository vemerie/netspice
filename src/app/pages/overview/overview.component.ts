import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/utils/services/user/users.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public users: any[] = [];
  public loading = false;

  constructor(private readonly supabase: UsersService) {
    this.loading = true;
    this.supabase.getUsers('').then((res: any) => {
      this.users = res.data;
      this.loading = false;
    });
  }

  public search(e: any) {
    this.loading = true;
    this.supabase.getUsers(e).then((res: any) => {
      this.loading = false;
      this.users = res.data;
    });
  }
}
