import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(
      environment.superbaseUrl,
      environment.superbaseKey,
    );
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
  }

  public authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void,
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  public signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  public signOut() {
    return this.supabase.auth.signOut();
  }

  // custom claims
  public getMyClaims = async () => {
    const { data, error } = await this.supabase.rpc('get_my_claims', {});
    return { data, error };
  };

  public isClaimsAdmin = async () => {
    const { data, error } = await this.supabase.rpc('is_claims_admin', {});
    return { data, error };
  };
}
