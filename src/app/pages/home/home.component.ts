import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {

  numMostrar: number = 0;

  adicionarNum(){
    this.numMostrar ++;
  }

  ngDoCheck(): void {
    console.log("Algo mudou em home")
  }
    
 
}
