import { Component } from '@angular/core';
import {FieldModel, FormifyModel, SubmitModel, ValidatorModel} from './formify/models';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new FieldModel({
        controlName: 'name', label: 'Enter name', icon: 'home', placeholder: 'name' , autoComplete: 'off',
        validators: [
          new ValidatorModel( {validator: Validators.required, errorCode: 'required', description: 'name is required'}),
        ]
      }),
      new FieldModel({
        controlName: 'language', label: 'Choose your language', placeholder: 'language', autoComplete: 'off', defaultValue: 'en',  options: [{text: 'Al', value: 'al'}, {text: 'EN', value: 'en'}],
        validators: [
          {validator: Validators.required, errorCode: 'required', description: 'language is required'},
        ]
      }),
      new FieldModel({
        controlName: 'describe', label: 'Describe your identity', placeholder: 'language', autoComplete: 'off',
        validators: [
          {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
        ]
      }),
      new FieldModel({controlName: 'color', label: 'Color' , defaultValue: 'primary', options: [{text: 'Primary', value: 'primary'}, {text: 'Warn', value: 'warn'}]}),

      new FieldModel({controlName: 'toggle', label: 'Fill contact', defaultValue: true }),
      new FieldModel({controlName: 'checkbox', label: 'check boxes', options: [{text: 'Primary', value: false}, {text: 'Warn', value: true}] })
    ],
    submit: {text: 'Save'}
  });
  constructor() {
  }
  onSubmit(): void{
    console.log(this.formify.formGroup.value);
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
    }, 1000);
  }
}
