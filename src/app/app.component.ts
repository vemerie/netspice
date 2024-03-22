import { Component } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { UsersService } from './utils/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netspice';
  public users:any[]=[];
  
  constructor(private readonly supabase: UsersService ){
   this.supabase.getUsers('').then((res:any)=> this.users = res.data);
  }

  public search(e:any){
    this.supabase.getUsers(e).then((res:any)=> this.users = res.data);
  }

}
