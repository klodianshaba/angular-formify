import {AbstractControl, AbstractControlOptions, FormArray, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {FieldModel, FieldState} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
import {SubmitModel} from './submit.model';
import {FormifyAccessibility} from './accessibility.abstract';
import {FormifyGenerate} from './formify.generate';
import {ThemePalette} from '@angular/material/core';
export interface FormifyState {
  controls: ControlsType[];
  submit?: SubmitModel;
  options?: OptionsType;
}
export enum ControlTypes {
  formField = '[FORMFIELD] formField direction',
  formGroup = '[FORMGROUP] formGroup direction',
  formArray = '[FORMARRAY] formArray direction',
}
export type ControlsType = (FieldModel | GroupModel | ArrayModel | any);
export type  OptionsType = ValidatorFn | ValidatorFn[] | AbstractControlOptions;
export  class FormifyModel extends FormifyGenerate implements FormifyAccessibility{
  public controls: ControlsType[];
  public options?: OptionsType;
  public color: ThemePalette;
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
  public checkDisabledSubmit(): void {
    this.submit.disabled = ( this.formGroup.invalid && this.submit.status.value || this.submit.loading );
  }
  public loading(loading: boolean): void{
    this.submit.loading = loading;
    this.checkDisabledSubmit();
  }
  public reset(): void{
    this.formGroup.reset();
  }
  public unSubscribe(): void {
    this.$unSubscribe.next();
    this.$unSubscribe.complete();
  }
  updateSubmit(overwrite: SubmitModel): void{
    Object.assign(this.submit , overwrite);
  }
  updateFields(overwrite: FieldState): void{ this.overwriteFields(overwrite, this.controls); }
  private overwriteFields(overwrite: FieldState, controls: ControlsType[]): void{
    controls.forEach(control => {
      if (control instanceof FieldModel){
         Object.assign(control , overwrite);
      }else{
        this.overwriteFields(overwrite , control.controls); // recursion
      }
    });
  }
}
