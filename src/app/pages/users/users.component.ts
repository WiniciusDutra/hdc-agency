import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
    this.initializeForm();
  }

  submit() {
    if (this.userForm.valid) {
      this.usersList.push(this.userForm.value)
    }
  }

  usuarioSelecionado: User | undefined;

  userForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  initializeForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(250)]],
      age: [
        '',
        [Validators.required, Validators.min(13), Validators.max(120)],
      ],
    });
  }

  usersList: User[] = [
    { name: 'Vinícius', age: 36 },
    { name: 'Simone', age: 36 },
    { name: 'Maria Luisa', age: 5 },
    { name: 'Maria Rodrigues', age: 65 },
    { name: 'Valney', age: 38 },
    { name: 'Orácio', age: 0.1 },
  ];

  infoUserSelecionado(user: User) {
    this.usuarioSelecionado = user;
  }
}
