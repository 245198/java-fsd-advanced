import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentChildApp';
  enterName="Aneeta";
  enterAge="12";
 
  parentData="";
  parentData2="";
  
  value="";

  transferData()
  {
    this.parentData = this.enterName;
  }
  transferData2()
  {
    this.parentData2 = this.enterAge;
  }
 
  sendData(value:string)
  {
    this.value=value;
  }
}
