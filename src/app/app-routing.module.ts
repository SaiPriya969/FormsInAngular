import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubmittedFormComponent} from 'src/app/submitted-form/submitted-form.component'
import {AppComponent} from 'src/app/app.component'
const routes: Routes = [{
  path:"register",component:AppComponent},
  {path:"submittedForm", component:SubmittedFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
