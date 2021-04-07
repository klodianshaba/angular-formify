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

      new FieldModel({controlName: 'toggle', label: 'Fill contact'})
    ],
    submit: {text: 'Save'}
  });
  constructor() {
  }
  onSubmit(): void{
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
    }, 2000);
  }
}
