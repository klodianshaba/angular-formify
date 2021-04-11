import {FormArray} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FormifyAccessibility} from './accessibility.abstract';
import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {FormifyGenerate} from './formify.generate';
import {SubmitModel} from './submit.model';
export interface ArrayState {
  controlName: string;
  controls: ControlsType[];
  label?: string;
}
export class ArrayModel extends FormifyGenerate implements FormifyAccessibility{
  formArray: FormArray;
  controlName: string;
  controls: ControlsType[];
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
  get(path: string): ControlsType {
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
  insertAt(index: number , control: ControlsType ): void {
    if (control instanceof FieldModel){
      this.controls.splice(index, 0, control);
      this.formArray.insert( index, this.generateFormControl(control));
    } else if ( control instanceof  GroupModel){
      this.controls.splice(index, 0 , control);
      this.formArray.insert( index, this.generateFormGroup(control));
    } else if (control instanceof ArrayModel){
      this.controls.splice(index, 0 , control);
      this.formArray.insert( index, this.generateFormArray(control));
    }
  }
  push(control: ControlsType ): void{
    if (control instanceof FieldModel){
      this.formArray.push(this.generateFormControl(control));
      this.controls.push(control);
    } else if ( control instanceof  GroupModel){
      this.formArray.push(this.generateFormGroup(control));
      this.controls.push(control);
    } else if (control instanceof ArrayModel){
      this.formArray.push(this.generateFormArray(control));
      this.controls.push(control);
    }
  }
  unshift(control: ControlsType ): void{
    if (control instanceof FieldModel){
      this.formArray.insert(0, this.generateFormControl(control));
      this.controls.unshift(control);
    } else if ( control instanceof  GroupModel){
      this.formArray.insert( 0, this.generateFormGroup(control));
      this.controls.unshift(control);
    } else if (control instanceof ArrayModel){
      this.formArray.insert(0, this.generateFormArray(control));
      this.controls.unshift(control);
    }
  }
  public reset(): void{
    this.formGroup.reset();
  }
}
