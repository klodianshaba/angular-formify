import {FormGroup} from '@angular/forms';
import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FieldModel} from './field.model';
import {FormifyAccessibilityModel} from './accessibility.model';

export class GroupModel{
  formGroup: FormGroup;
  controlName: string;
  readonly controlType?: ControlTypes;
  controls: ControlsType;
  change: BehaviorSubject<any>;
  label: string;
  constructor( controlName: string , controls: ControlsType ) {
    this.formGroup = null;
    this.controlName = controlName;
    this.controlType = ControlTypes.formGroup;
    this.controls = controls;
    this.change = new BehaviorSubject<any>(null);
    this.label = '';
  }
  public get(path: string): FieldModel | null{
    for (const control of this.controls){
      if (control instanceof FieldModel){
        return  control;
      }
    }
    return null;
  }
}
