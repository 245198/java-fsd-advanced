import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()parentData!:string;
  @Input()parentData1!:string;
  @Input()parentData2!:string;

  @Output() public submitData= new EventEmitter<string>();
ngOnInit()
{
  
}
showData(){
  this.submitData.emit("Successfully Submitted");
}
}
