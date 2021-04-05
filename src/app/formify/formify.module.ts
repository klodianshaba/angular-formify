import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ControlComponent } from './components/control/control.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [InputComponent, ControlComponent, SelectComponent, TextareaComponent],
  imports: [
    CommonModule
  ]
})
export class FormifyModule { }
