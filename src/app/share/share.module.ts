import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SearchDropdownComponent } from './search-dropdown/search-dropdown.component';

@NgModule({
  declarations: [
    SearchComponent,
    UserItemComponent,
    ButtonComponent,
    LoaderComponent,
    SearchDropdownComponent,
  ],
  exports: [
    UserItemComponent,
    SearchComponent,
    ButtonComponent,
    LoaderComponent,
    SearchDropdownComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ShareModule {}
