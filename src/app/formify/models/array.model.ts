import {FormArray} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FormifyAccessibilityModel} from './accessibility.model';

export interface ArrayState {
  controlName: string;
  controls: ControlsType;
  readonly controlType?: ControlTypes;
  label?: string;
}

export class ArrayModel extends FormifyAccessibilityModel{
  formArray: FormArray;
  controlName: string;
  controls: ControlsType;
  readonly controlType?: ControlTypes;
  change: BehaviorSubject<any>;
  label: string;
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
}
