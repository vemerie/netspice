import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './utils/guards/auth.guard';
type PathMatch = 'full' | 'prefix' | undefined;

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-user/:id',
    component: UserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'auth',
    loadChildren: (): Promise<any> =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    pathMatch: 'full' as PathMatch,
    redirectTo: '/overview',
  },
  {
    path: '**',
    redirectTo: 'overview',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
