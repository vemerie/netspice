import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class EditModule { }
