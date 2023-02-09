import { Component, EventEmitter,Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ServiceService} from 'src/app/service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment16';
  form:any;
  firstName:any="";
  lastName:any;
  userName:any;
  age:any;
  emailId:any;
  phn:any;
  label:any;
  namePattern=/^[a-zA-Z]+[a-zA-Z]$/;
  userNamePattern =/^[a-zA-Z]+[A-Za-z0-9_-]/;
  agePattern=/[0-9]/;
  mailIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  phonePattern =/[0-9\+\-\ ]/;
  additionalDataLabel:any;
  additionalDataValue:any;
  arr:any[]=[];
  // @Output() enableAdditionalInput=new EventEmitter<any>();
  enableAdditionalInput=true;
  
  constructor(private ser:ServiceService, private router:Router){}
  ngOnInit(){
    this.form=new FormGroup({
      firstName:new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.namePattern),Validators.maxLength(256),Validators.minLength(3)])),
      lastName:new FormControl("",Validators.compose([Validators.pattern(this.namePattern),Validators.maxLength(256),Validators.minLength(3)])),
      userName:new FormControl("",[Validators.required,Validators.pattern(this.userNamePattern)]),
      age:new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.agePattern),Validators.min(0),Validators.max(999)])),
      emailId:new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.mailIdPattern),Validators.email])),
      phn:new FormControl("",Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern(this.phonePattern)])),
      label:new FormControl("",[Validators.required]),
      // givenLabel:new FormControl(""),
      // givenValue:new FormControl("",[Validators.required])

    })
  }
  
  onSubmit(val:any)
  {
     console.log(this.form)
  }
  get getFirstName(){
    return this.form.get('firstName');
  }
  get getLastName(){
    return this.form.get('lastName');
  }
  get getUserName(){
    return this.form.get('userName');
  }
  get getAge(){
    return this.form.get('age');
  }
  get getEmailId(){
    return this.form.get('emailId');
  }
  get getPhn(){
    return this.form.get('phn')
  }
  get getLabel(){
    return this.form.get('label')
  }
  get getGivenLabel(){
    return this.form.get('givenLabel');
  }
  get getGivenValue(){
    return this.form.get('givenValue');
  }
  additionalData(val:any){
    this.additionalDataLabel=val;
    console.log(this.form)
  }
  labelValueFun(val:any)
  {
    this.additionalDataValue=val;
  }
  enableFun(){
    if(this.form.value.label)
      {
        this.ser.service.next(this.enableAdditionalInput);
      }
  }
  submitDetails(){ 
    // this.ser.service.next(this.form.data)
    this.arr.push(this.form.controls['firstName'].value);
    this.arr.push(this.form.value.lastName);
    this.arr.push(this.form.value.userName);
    this.arr.push(this.form.value.age);
    this.arr.push(this.form.value.emailId);
    this.arr.push(this.form.value.phn);
    this.arr.push(this.form.value.label);
    this.arr.push(this.additionalDataValue);
    // console.log(this.additionalDataValue);
    this.ser.service.next(this.arr);
    this.router.navigate(['submittedForm']);
  }

  showFormControl(_event: any) {
    console.log("formControl:", this.form);
    
  }
}