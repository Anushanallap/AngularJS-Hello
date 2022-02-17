import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
 

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";
  }


  
}
