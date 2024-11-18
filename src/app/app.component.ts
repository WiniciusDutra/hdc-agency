import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {
  title = 'hdc-agency';

  ngDoCheck(): void {
    console.log("Algo mudou em App Component")
  }
    
  
}
