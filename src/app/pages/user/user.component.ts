import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userName: string | null = 'nulo';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getNome();
  }

  getNome() {
    this.route.queryParams.subscribe(
      (params) => (this.userName = params['userName'])
    );
  }
}
