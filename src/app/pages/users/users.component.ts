import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export class UsersComponent {


  //listaUsuarios: string[] = ['Vinicius', 'Simone', 'Malú', 'Olaf', 'Catarina']

  usuarioSelecionado : User | undefined;

  usersList: User[] = 
  [
    { name: 'Vinícius', age: 36},
    { name: 'Simone', age: 36},
    { name: 'Maria Luisa', age: 5},
    { name: 'Maria Rodrigues', age: 65},
    { name: 'Valney', age: 38},
    { name: 'Orácio', age: .1}
    
  ]

  infoUserSelecionado(user:User){
    this.usuarioSelecionado = user
  }

}
