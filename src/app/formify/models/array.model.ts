import {FormArray} from '@angular/forms';
import {ControlsType, ControlTypes, FormifyModel} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FormifyAccessibility} from './accessibility.abstract';
import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {FormifyGenerate} from './formify.generate';
import {SubmitModel} from './submit.model';
export interface ArrayState {
  controlName: string;
  controls: ControlsType;
  label?: string;
}

export class ArrayModel extends FormifyGenerate implements FormifyAccessibility{
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
  removeAt(index: number): void{
    this.controls.splice(index, 1);
    this.formArray.removeAt(index);
  }
  insertAt(index: number , control: FieldModel | GroupModel | ArrayModel ): void {
    if (control instanceof FieldModel){
      this.controls.splice(index, 0, control);
      this.formArray.insert( index, control.formControl);
    } else if ( control instanceof  GroupModel){
      this.controls.splice(index, 0 , control);
      this.formArray.insert( index, control.formGroup);
    } else if (control instanceof ArrayModel){
      this.controls.splice(index, 0 , control);
      this.formArray.insert( index, control.formArray);
    }
  }

  push(control: FieldModel | GroupModel | ArrayModel ): void{
    if (control instanceof FieldModel){
      this.controls.push(control);
      this.formArray.push(control.formControl);
    } else if ( control instanceof  GroupModel){
      this.controls.push(control);
      this.formArray.push(control.formGroup);
    } else if (control instanceof ArrayModel){
      this.controls.push(control);
      this.formArray.push(control.formArray);
    }
  }
  unshift(control: FieldModel | GroupModel | ArrayModel ): void{
    if (control instanceof FieldModel){
      this.controls.unshift(control);
      this.formArray.insert(0, control.formControl);
    } else if ( control instanceof  GroupModel){
      this.controls.unshift(control);
      this.formArray.insert( 0, control.formGroup);
    } else if (control instanceof ArrayModel){
      this.controls.unshift(control);
      this.formArray.insert(0, control.formArray);
    }
  }
}
