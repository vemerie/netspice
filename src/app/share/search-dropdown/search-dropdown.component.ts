import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UsersService } from 'src/app/utils/services/user/users.service';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss'],
})
export class SearchDropdownComponent {
  @Input() results: any[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() updateAdmin = new EventEmitter<{ role: string; id: string }>();

  @Input() placeholder: string = 'Search user';
  public searchResults: any[] = [];
  public values: any[] = [];

  constructor() {}
  public searchItems(name: string) {
    this.searchResults = this.values.filter((res) => res.name.includes(name));
  }

  public onType(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.searchItems(newValue);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.values = changes['results'].currentValue;
  }

  public checkBox(role: string, id: string) {
    const user: { id: string; role: string } = { id, role };
    this.updateAdmin.emit(user);
  }
}
