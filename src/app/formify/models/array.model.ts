import {FormArray} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';

export class ArrayModel {
  formArray: FormArray;
  controlName: string;
  controls: ControlsType;
  readonly controlType?: ControlTypes;
  change: BehaviorSubject<any>;
  label: string;
  constructor( controlName: string , controls: ControlsType ) {
    this.formArray = null;
    this.controlName = controlName;
    this.controlType = ControlTypes.formArray;
    this.controls = controls;
    this.change = new BehaviorSubject<any>(null);
    this.label = '';
  }
}
