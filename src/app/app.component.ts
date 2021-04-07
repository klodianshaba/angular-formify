import { Component } from '@angular/core';
import {FieldModel, FormifyModel, ValidatorModel} from './formify/models';
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
        controlName: 'name', label: 'Enter name', icon: 'home', placeholder: 'name' , autoComplete: 'on',
        validators: [
          {validator: Validators.required, errorCode: 'required', description: 'name is required'},
        ]
      })
    ],
    submit: {color: 'warn' , text: 'Save'}
  });
}
