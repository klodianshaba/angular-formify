import {ChangeDetectorRef, Component} from '@angular/core';
import {ArrayModel, FieldModel, FieldTypes, FormifyModel, GroupModel} from './formify/models';
import {Validators} from '@angular/forms';
import {NameFieldControl} from './formify/fields/name.field-control';
import {LanguageFieldControl} from './formify/fields/language.field-control';
import {BiographyFieldControl} from './formify/fields/biography.field-control';
import {ColorFieldControl} from './formify/fields/color.field-control';
import {ToggleFieldControl} from './formify/fields/toggle.field-control';
import {AddressGroupControl} from './formify/groups/address.group-control';
import {ExercisesGroupControl} from './formify/groups/exercises.group-control';
import {ContactGroupControl} from './formify/groups/contact.group-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  public object: object;
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new NameFieldControl({}), // extends FieldModel
      new FieldModel({controlName: 'lastName', label: ' Enter last name', placeholder: 'last name'}),
      new LanguageFieldControl({}), // extends FieldModel
      new BiographyFieldControl({}), // extends FieldModel
      new ColorFieldControl({}), // extends FieldModel
      new ToggleFieldControl({label: 'Show/Hidden choose color radios'}), // extends FieldModel
      new FieldModel({controlName: 'checkbox', label: 'Checkbox',  defaultValue: 'sdf'}),
      new ArrayModel({controlName: 'address', label: 'Address:', controls: [ // extends ArrayModel
        new AddressGroupControl(), // extends GroupModel
      ]}),
      new ExercisesGroupControl(), // extends GroupModel
      new ToggleFieldControl({controlName: 'toggleContact', label: 'Add/Remove fill contact group'}), // extends FieldModel
      new ContactGroupControl(),
    ],
    submit: {text: 'Save it'}
  });
  constructor(private cd: ChangeDetectorRef) {
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
    this.formify.formGroup.get('toggleContact').valueChanges.subscribe(contact => {
      if (contact){
        this.formify.addControl( new ContactGroupControl());
      }else{
        this.formify.removeControl('contact');
      }
      console.log(this.formify.formGroup.value);
      this.cd.detectChanges();
    });
    this.formify.formGroup.valueChanges.subscribe( value => {
     this.object = value;
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
