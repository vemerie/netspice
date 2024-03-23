import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
@Input() text: string='';
@Output() click = new EventEmitter();

public onClick (){
  this.click.emit()
}
}
