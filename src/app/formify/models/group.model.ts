import {FormArray, FormGroup} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FieldModel} from './field.model';
import {FormifyAccessibilityModel} from './accessibility.model';
import {ArrayState} from './array.model';

export interface GroupState {
  controlName: string;
  controls: ControlsType;
  readonly controlType?: ControlTypes;
  label?: string;
}

export class GroupModel extends FormifyAccessibilityModel{
  formGroup: FormGroup;
  controlName: string;
  controls: ControlsType;
  readonly controlType?: ControlTypes;
  change: BehaviorSubject<any>;
  label: string;
  constructor( config: GroupState ) {
    super();
    this.formGroup = null;
    this.controlName = '';
    this.controlType = ControlTypes.formGroup;
    this.controls = [];
    this.change = new BehaviorSubject<any>(null);
    this.label = '';
    Object.assign(this, config);
  }
}
