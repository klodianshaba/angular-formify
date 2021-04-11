import {Component} from '@angular/core';
import {ArrayModel, FieldModel, FieldTypes, FormifyModel, GroupModel} from './formify/models';
import {Validators} from '@angular/forms';
import {NameFieldControl} from './formify/fields/name.field-control';
import {LanguageFieldControl} from './formify/fields/language.field-control';
import {BiographyFieldControl} from './formify/fields/biography.field-control';
import {ColorFieldControl} from './formify/fields/color.field-control';
import {ToggleFieldControl} from './formify/fields/toggle.field-control';
import {AddressGroupControl} from './formify/groups/address.group-control';
import {ExercisesGroupControl} from './formify/groups/exercises.group-control';

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
      new FieldModel({controlName: 'checkbox', label: 'Checkbox',  defaultValue: 'sdf'}),
      new ArrayModel({controlName: 'array', label: 'Address:', controls: [
        new AddressGroupControl(),
      ]}),
      new ExercisesGroupControl(),

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
    this.formify.formGroup.get('color').valueChanges.subscribe(color => {
      this.formify.updateFields({color});
      this.formify.updateSubmit({color});
    });
    this.formify.formGroup.get('toggle').valueChanges.subscribe(toggle => {
     if (toggle){
       this.formify.field('color').update({hidden: false });
     }else{
       this.formify.field('color').update({hidden: true });
      }
    });
    console.log(this.formify);
  }

  onKeyPressAddExercise(event: KeyboardEvent): void{
    if (event.keyCode === 13){
      const value = this.formify.formGroup.get('add-exercise').value;
      if (value.length > 0){
        this.formify.group('exercises').addControl( new FieldModel({controlName: value, label: value,  defaultValue: true}));
        this.formify.formGroup.get('add-exercise').reset();
      }
    }
  }


  onSubmit(): void{
    console.log(this.formify.formGroup.value);
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
    }, 1000);
  }
}
