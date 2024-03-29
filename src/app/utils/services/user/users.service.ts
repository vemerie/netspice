import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  private users = new BehaviorSubject<any>(null);

  get users$(): Observable<any> {
    return this.users.asObservable();
  }

  constructor() {
    this.supabase = createClient(
      environment.superbaseUrl,
      environment.superbaseKey,
    );
  }

  public getUsers(search: string) {
    return search === ''
      ? this.supabase.from('user').select(`name, userrole, id `)
      : this.supabase
          .from('user')
          .select(`name, userrole, id `)
          .eq('name', search)
          .order('name', { ascending: false });
  }

  public getUser(id: any): Observable<any> {
    return from(this.supabase.from('user').select().eq('id', id));
  }

  public updateUser(user: any): Observable<any> {
    return from(this.supabase.from('user').update(user).eq('id', user.id));
  }

  public updateRole(user: any): Observable<any> {
    return from(
      this.supabase
        .from('user')
        .update({ userrole: user.role })
        .eq('id', user.id),
    );
  }
}
