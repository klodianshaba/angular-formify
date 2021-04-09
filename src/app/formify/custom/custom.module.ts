import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import {FormifyModule} from '../formify.module';


@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    FormifyModule
  ],
  exports: [
    AddressComponent
  ]
})
export class CustomModule { }
