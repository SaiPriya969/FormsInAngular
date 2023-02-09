import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdditionalDataComponent } from './additional-data/additional-data.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdditionalDataComponent,
    SubmittedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
