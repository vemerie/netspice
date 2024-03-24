import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/utils/interfaces/user.interface';
import { UsersService } from 'src/app/utils/services/user/users.service';
import { showAlert } from 'tailwind-toastify';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});
  public param: string = '';
  public loading: boolean = false;
  private user: User = {
    id: '',
    name: '',
    language: '',
    bio: '',
    version: 0,
    userrole: '',
  };

  constructor(
    private userService: UsersService,
    private activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getRouteId();
    this.getUser(this.param);
  }

  public initForm() {
    this.userForm = this.formBuilder.group({
      id: [this.user.id, Validators.required],
      name: [this.user.name, Validators.required],
      userrole: [this.user.userrole, Validators.required],
      language: [this.user.language, Validators.required],
      bio: [this.user.bio, Validators.required],
      version: [this.user.version, Validators.required],
    });
  }

  public getRouteId() {
    this.activatedRouter.params.subscribe(({ id }) => (this.param = id));
  }

  public getUser(id: string) {
    this.loading = true;
    this.userService.getUser(id).subscribe((res) => {
      this.loading = false;
      this.user = res.data[0];
      this.initForm();
    });
  }

  public onSubmit(user: FormGroup) {
    this.loading = true;
    this.userService.updateUser(user.value).subscribe((res) => {
      if (res) {
        this.loading = false;
        this.handleShowAlert(
          'success',
          'Update user',
          'User successfully updated',
        );
      }
    });
  }

  public handleShowAlert(type: 'success', title: string, message: string) {
    showAlert(type, title, message);
  }
}
