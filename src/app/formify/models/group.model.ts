import {FormArray, FormGroup} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FieldModel} from './field.model';
import {FormifyAccessibility} from './accessibility.abstract';
import {ArrayModel, ArrayState} from './array.model';

export interface GroupState {
  controlName: string;
  controls: ControlsType;
  label?: string;
}

export class GroupModel implements FormifyAccessibility{
  formGroup: FormGroup;
  controlName: string;
  controls: ControlsType;
  readonly controlType: ControlTypes;
  change: BehaviorSubject<any>;
  label: string;
  constructor( config: GroupState ) {
    this.formGroup = null;
    this.controlName = '';
    this.controlType = ControlTypes.formGroup;
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
}
