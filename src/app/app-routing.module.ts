import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:OverviewComponent
  },
  {
    path:'edit-user/:id',
    component:UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
