import {ControlsType, ControlTypes} from './formify.model';
import {BehaviorSubject} from 'rxjs';
import {FieldModel} from './field.model';
import {FormifyAccessibility} from './accessibility.abstract';
import {ArrayModel, ArrayState} from './array.model';
import {FormifyGenerate} from './formify.generate';
import {SubmitModel} from './submit.model';
export interface GroupState {
  controlName?: string;
  controls?: ControlsType[];
  label?: string;
}
export class GroupModel extends FormifyGenerate implements FormifyAccessibility{
  controlName: string;
  controls: ControlsType[];
  readonly controlType: ControlTypes;
  change: BehaviorSubject<any>;
  label: string;
  public submit: SubmitModel;
  constructor( config: GroupState ) {
    super();
    this.controlName = '';
    this.controlType = ControlTypes.formGroup;
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
  addControl(control: ControlsType): void{
    if (control instanceof FieldModel){
      this.controls.push(control);
      this.formGroup.addControl(control.controlName, this.generateFormControl(control));
    } else if ( control instanceof  GroupModel){
      this.controls.push(control);
      this.formGroup.addControl(control.controlName, this.generateFormGroup(control));
    } else if (control instanceof ArrayModel){
      this.controls.push(control);
      this.formGroup.addControl(control.controlName, this.generateFormArray(control));
    }
  }
  removeControl(name: string): void {
    this.controls = this.controls.filter(control => control.controlName !== name);
    this.formGroup.removeControl(name);
  }
  public reset(): void{
    this.formGroup.reset();
  }
}
