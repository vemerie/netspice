import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { from, Observable, of } from 'rxjs'
import { environment } from 'src/environments/environment'



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(environment.superbaseUrl, environment.superbaseKey)
  }

  getUsers(search:string){
      return search ===''
        ?this.supabase.from('user').select(`name, userrole, id `)
        :this.supabase.from('user').select(`name, userrole, id `).eq('name', search)
  }

  getUser(id:any):Observable<any>{
    return from (this.supabase.from('user').select().eq('id', id))
  }

  updateUser(user:any):Observable<any>{
    return from (this.supabase.from('user').update( user )
    .eq('id', user.id))
  }
}
