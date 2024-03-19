import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    SearchComponent,
    UserItemComponent,
    ButtonComponent,
    InputComponent
  ],
  exports:[UserItemComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
