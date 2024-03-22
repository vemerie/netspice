import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { of } from 'rxjs'
import { environment } from 'src/environments/environment'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

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
      return search===''
        ?this.supabase.from('user').select(`name, userrole, id `)
        :this.supabase.from('user').select(`name, userrole, id `).eq('name', search)
  }
}
