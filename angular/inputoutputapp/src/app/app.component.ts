import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutputapp';
  enterName="";
  enterPhoneNo="";
  enterDOB="";

  Name="";
  PhoneNo="";
  DOB="";

parentData="";
parentData1="";
parentData2="";

parentData3="";
parentData4="";
parentData5="";
value="";
viewData()
  {
    this.parentData = this.enterName;
    this.parentData1 = this.enterPhoneNo;
    this.parentData2 = this.enterDOB;
  }

  viewTable()
  {
    this.parentData3 = this.Name;
    this.parentData4 = this.PhoneNo;
    this.parentData5 = this.DOB;
  }

  submitData(value:string)
  {
    this.value=value;
  }
}
