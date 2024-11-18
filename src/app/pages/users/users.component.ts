import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  listaUsuarios: string[] = ['Vinicius', 'Simone', 'Malú', 'Olaf', 'Catarina']

}
