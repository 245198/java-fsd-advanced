import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listApp';
  items = ["Aneeta"];
  counter=0;
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
