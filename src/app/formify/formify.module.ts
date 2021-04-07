import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ControlComponent } from './components/control/control.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { FormifyComponent } from './components/formify/formify.component';
import {SubmitComponent} from './components/submit/submit.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputComponent, ControlComponent, SelectComponent, TextareaComponent, SubmitComponent, FormifyComponent, SubmitComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class FormifyModule { }
