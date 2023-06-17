import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-management';
  employees=[
    {id:1,name:'John Doe',email:'john@example.com'},
    {id:2,name:'Abhraham ',email:'abhraham@example.com'},
    {id:3,name:'Bob',email:'bob@example.com'},

  ];
  selectedEmployee:any;
  selectEmployee(employee:any){
    this.selectedEmployee=employee;

  }
}
