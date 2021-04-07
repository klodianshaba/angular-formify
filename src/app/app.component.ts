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
          {validator: Validators.required, errorCode: 'required', description: 'name is required'},
        ]
      }),
      new FieldModel({
        controlName: 'language', label: 'Choose your language', placeholder: 'language', appearance: 'outline', autoComplete: 'off', options: [{text: 'Al', value: 'al'}, {text: 'EN', value: 'en'}],
        validators: [
          {validator: Validators.required, errorCode: 'required', description: 'name is required'},
        ]
      })
    ],
    submit: {color: 'accent' , text: 'Save'}
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
