import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent {
  arr:string[]=[];
constructor(private ser:ServiceService){
  this.ser.service.subscribe(msg=>this.arr=msg);
  // console.log(this.arr)
}
}
