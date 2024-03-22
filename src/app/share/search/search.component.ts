import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search  = new EventEmitter<string>()

public searchItems(){
}

onEnter(event: Event) {
  const newValue = (event.target as HTMLInputElement).value;
  this.search.emit(newValue)

}

}

