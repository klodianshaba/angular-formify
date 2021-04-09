import {FormGroup} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';

export class GroupModel {
  formGroup: FormGroup;
  controlName: string;
  readonly controlType?: ControlTypes;
  controls: ControlsType;
  change: BehaviorSubject<any>;
  constructor( controlName: string , controls: ControlsType ) {
    this.formGroup = null;
    this.controlName = controlName;
    this.controlType = ControlTypes.formGroup;
    this.controls = controls;
    this.change = new BehaviorSubject<any>(null);
  }
}
