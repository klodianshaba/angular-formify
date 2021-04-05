import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [InputComponent, ControlComponent],
  imports: [
    CommonModule
  ]
})
export class FormifyModule { }
