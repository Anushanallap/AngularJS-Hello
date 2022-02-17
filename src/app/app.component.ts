import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl="../assets/BridgeLabz-2.jpg";
  

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";
  }

 
}
