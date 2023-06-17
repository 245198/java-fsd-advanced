import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tablec',
  templateUrl: './tablec.component.html',
  styleUrls: ['./tablec.component.css']
})
export class TablecComponent {
  @Input()parentData3!:string;
  @Input()parentData4!:string;
  @Input()parentData5!:string;

}
