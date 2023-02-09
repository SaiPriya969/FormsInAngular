import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  innerForm:any;
  types=["Number","String","Boolean","Hexa","Binary"]
  numberPattern=/[0-9]/;
  stringPattern=/[a-zA-Z]/;
  booleanPattern=/[0-1]/;
  hexaPattern=/[0-9a-f]/;
  binaryPattern:any;
  pattern:any;
  Types={
    Number:/[0-9]/,
    String:/[a-zA-Z]/,
    Hexa:/[0-9a-f]/,
    Binary:/[0-1]/
  };
  @Output() labelValue= new EventEmitter<any>();
onInit()
{
  this.innerForm=new FormGroup({
  name:new FormControl(""),
  typeName:new FormControl("number")
  });
}
Objectkeys(obj:any)
{
  return Object.keys(obj);
}
selectedType(val:string){
  // console.log(this.Types[val])
  // this.innerForm.get('name').value==Validators.pattern(this.Types.Num)
// console.log(this.innerForm.value.name)
// console.log("dbdbbd")
  if(val=="Number")
  {
    this.pattern=this.numberPattern;
  }
  else if(val=="String")
  {
    this.pattern=this.stringPattern;
  }
  else if(val=="Boolean")
  {
    this.pattern=this.booleanPattern;
  }
  else if(val=="Binary")
  {
    this.pattern=this.binaryPattern;
  }
  else
  {
    this.pattern=this.hexaPattern;
  }
  // this.innerForm.name.Validators.compose([Validators.required,Validators.pattern(this.pattern)]);
  // console.log(val);
  // console.log(this.innerForm.get('name').status);
  

}
keyEnterFun()
{

  if(this.pattern.test(this.innerForm.value.name))
  {
    console.log("val");
   this.labelValue.emit(this.innerForm.value.name);

  }
}
}
