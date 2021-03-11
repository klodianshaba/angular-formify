import {FormGroup} from '@angular/forms';
import {ControlsType} from './form.model';



export class GroupModel {
  formGroup: FormGroup;
  controlName: string;
  readonly controlType?: ControlTypes;
  controls: ControlsType;
  constructor( controlName: string , controls: ControlsType ) {
    this.formGroup = null;
    this.controlName = controlName;
    this.controlType = ControlTypes.formGroup;
    this.controls = controls;
  }
}
