import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/utils/services/users.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  public users:any[]=[];
  
  constructor(private readonly supabase: UsersService ){
   this.supabase.getUsers('').then((res:any)=> this.users = res.data);
  }

  public search(e:any){
    this.supabase.getUsers(e).then((res:any)=> this.users = res.data);
  }
}
