import { Component } from '@angular/core';
import {ArrayModel, FieldModel, FormifyModel, GroupModel, SubmitModel, ValidatorModel} from './formify/models';
import {Validators} from '@angular/forms';
import {NameFieldControl} from './formify/fields/name.field-control';
import {LanguageFieldControl} from './formify/fields/language.field-control';
import {BiographyFieldControl} from './formify/fields/biography.field-control';
import {ColorFieldControl} from './formify/fields/color.field-control';
import {ToggleFieldControl} from './formify/fields/toggle.field-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new NameFieldControl({}),
      new LanguageFieldControl({}),
      new BiographyFieldControl({}),
      new ColorFieldControl({}),
      new ToggleFieldControl(),

      new ArrayModel({controlName: 'array', controls: [
        new GroupModel({ controlName: 'contact1', controls: [
          new FieldModel({
            controlName: 'phone', prefix: '+355', type: 'tel', label: 'number phone', placeholder: 'phone', autoComplete: 'off',
            validators: [
              {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
            ]
          }),
          new FieldModel({
            controlName: 'address', label: 'your address', placeholder: 'address', autoComplete: 'off',
            validators: [
              {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
            ]
          }),
        ]}),
        new GroupModel({ controlName: 'contact2', controls: [
          new FieldModel({
            controlName: 'phone', prefix: '+355' , label: 'number phone', placeholder: 'phone', autoComplete: 'off',
            validators: [
              {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
            ]
          }),
          new FieldModel({
            controlName: 'address', label: 'your address', placeholder: 'address', autoComplete: 'off',
            validators: [
              {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
            ]
          }),
        ]}),
      ]}),

      new GroupModel({ controlName: 'contact', controls: [
        new FieldModel({
          controlName: 'phone', label: 'number phone', placeholder: 'phone', autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
        new FieldModel({
          controlName: 'address', label: 'your address', placeholder: 'address', autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
      ]}),
    ],
    submit: {text: 'Save it'}
  });
  constructor() {
    this.initColor();
    this.formify.formGroup.get('toggle').valueChanges.subscribe(toggle => {
     if (toggle){
       this.formify.addControl( new ColorFieldControl());
       this.initColor();
     }else{
       console.log('sdf');
       this.formify.removeControl('color');
      }
    });

    console.log(this.formify);
  }
  initColor(): void{
    this.formify.formGroup.get('color').valueChanges.subscribe(color => {
      this.formify.updateFields({color});
      this.formify.updateSubmit({color});
    });
  }

  onSubmit(): void{
    console.log(this.formify.formGroup.value);
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
    }, 1000);
  }
}
