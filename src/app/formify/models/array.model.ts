import {FormArray} from '@angular/forms';
import {ControlsType, ControlTypes, FormifyModel} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FormifyAccessibility} from './accessibility.abstract';
import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {FormifyManipulation} from './manipulation.abstract';
import {FormifyGenerate} from './formify.generate';
import {SubmitModel} from './submit.model';

export interface ArrayState {
  controlName: string;
  controls: ControlsType;
  label?: string;
}

export class ArrayModel extends FormifyGenerate implements FormifyAccessibility, FormifyManipulation{
  formArray: FormArray;
  controlName: string;
  controls: ControlsType;
  readonly controlType: ControlTypes;
  change: BehaviorSubject<any>;
  label: string;
  public submit: SubmitModel;
  constructor( config: ArrayState ) {
    super();
    this.formArray = null;
    this.controlName = '';
    this.controlType = ControlTypes.formArray;
    this.controls = [];
    this.change = new BehaviorSubject<any>(null);
    this.label = '';
    Object.assign(this, config);
  }
  get(path: string): FieldModel | GroupModel | ArrayModel | null {
    for (const control of this.controls){
      if (path === control.controlName){
        return control;
      }
    }
    return null;
  }
  field(path: string): FieldModel | null {
    const control = this.get(path);
    if (control instanceof FieldModel) {
      return control;
    }
    return null;
  }
  group(path: string): GroupModel | null {
    const control = this.get(path);
    if (control instanceof GroupModel) {
      return control;
    }
    return null;
  }
  array(path: string): ArrayModel | null {
    const control = this.get(path);
    if (control instanceof ArrayModel) {
      return control;
    }
    return null;
  }
  addField(field: FieldModel): void {
    this.controls.push(field);
    this.formArray.push(this.generateFormControl(field));
  }
  addGroup(group: GroupModel): void {
    this.controls.push(group);
    this.formArray.push( this.generateFormGroup(group));
  }
  addArray(array: ArrayModel): void {
    this.controls.push(array);
    this.formArray.push( this.generateFormArray(array));
  }
  removeField(field: FieldModel): void {}
  removeGroup(group: GroupModel): void {}
  removeArray(array: ArrayModel): void {}
}
