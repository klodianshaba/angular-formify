import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import {FormifyModule} from '../formify.module';
import {MaterialModule} from '../material.module';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [AddressComponent, ExercisesComponent, ContactComponent],
  imports: [
    CommonModule,
    FormifyModule,
    MaterialModule
  ],
  exports: [
    AddressComponent,
    ExercisesComponent,
    ContactComponent
  ]
})
export class CustomModule { }
