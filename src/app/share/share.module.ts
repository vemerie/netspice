import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    UserItemComponent,
    ButtonComponent,
  ],
  exports:[UserItemComponent, SearchComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class ShareModule { }
