import {AbstractControl, AbstractControlOptions, FormArray, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
import {SubmitModel} from './submit.model';
import {FormifyAccessibility} from './accessibility.abstract';
import {BehaviorSubject} from 'rxjs';
import {FormifyManipulation} from './manipulation.abstract';
import {FormifyGenerate} from './formify.generate';

export interface FormifyState {
  controls: (FieldModel | GroupModel | ArrayModel)[];
  submit?: SubmitModel;
  options?: OptionsType;
}

export enum ControlTypes {
  formField = '[FORMFIELD] formField direction',
  formGroup = '[FORMGROUP] formGroup direction',
  formArray = '[FORMARRAY] formArray direction',
}

export type ControlsType = (FieldModel | GroupModel | ArrayModel)[];

export type  OptionsType = ValidatorFn | ValidatorFn[] | AbstractControlOptions;

export  class FormifyModel extends FormifyGenerate implements FormifyAccessibility, FormifyManipulation{
  public controls: ControlsType;
  public options?: OptionsType;
  constructor( config: FormifyState ) {
    super();
    this.submit = new SubmitModel();
    this.controls = config.controls;
    if (config.hasOwnProperty('submit')){ this.submit = {...this.submit, ...config.submit}; }
    if (config.hasOwnProperty('options')) { this.options = config.options; }
    this.formGroup = new FormGroup( this.generateFormControls(this.controls) , this.options );
    this.formGroup.statusChanges.subscribe(status => {
      this.checkDisabledSubmit();
    });
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

  addField(field: FieldModel): void {
    this.controls.push(field);
    this.formGroup.addControl(field.controlName, this.generateFormControl(field));
  }
  addGroup(group: GroupModel): void {
    this.controls.push(group);
    this.formGroup.addControl(group.controlName, this.generateFormGroup(group));
  }
  addArray(array: ArrayModel): void {
    this.controls.push(array);
    this.formGroup.addControl(array.controlName, this.generateFormArray(array));
  }

  public checkDisabledSubmit(): void {
    this.submit.disabled = ( this.formGroup.invalid && this.submit.status.value || this.submit.loading );
  }

  public loading(loading: boolean): void{
    this.submit.loading = loading;
    this.checkDisabledSubmit();
  }
  public unSubscribe(): void {
    this.$unSubscribe.next();
    this.$unSubscribe.complete();
  }
}
