import {AbstractControl, AbstractControlOptions, FormArray, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
import {SubmitModel} from './submit.model';

export interface FormState {
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

export  class FormModel{
  public formGroup: FormGroup;
  public loading?: boolean;
  public controls: ControlsType;
  public submit: SubmitModel;
  public options?: OptionsType;
  constructor(config: FormState ) {
    this.loading = false;
    this.submit = new SubmitModel();
    this.controls = config.controls;
    (config.hasOwnProperty('submit')) ?  this.submit = {...this.submit, ...config.submit} : null;
    (config.hasOwnProperty('options')) ?  this.options = config.options : null;
    this.formGroup = new FormGroup( this.generateFormControls(this.controls) , this.options );
  }

  private generateFormControls(controls: ControlsType): { [controlId: string]: AbstractControl; } {
    const formControls: { [controlId: string]: AbstractControl; } = {};
    for (const control of controls) {
      if (control instanceof FieldModel) {
        Object.assign(formControls , { [control.controlName]: this.generateFormControl(control) });
      } else if (control instanceof GroupModel) {
        Object.assign(formControls , { [control.controlName]: this.generateFormGroup(control) });
      } else if (control instanceof ArrayModel) {
        Object.assign(formControls , { [control.controlName]: this.generateFormArray(control) });
      }
    }
    return formControls;
  }

  private generateFormControl(control: FieldModel ): FormControl {
    const formControl = new FormControl(control.defaultValue , control.validators.map(validator => validator.validator ).filter(validator => validator));
    control.formControl = formControl;
    return  formControl;
  }

  private generateFormGroup(control: GroupModel ): FormGroup {
    const formGroup = new FormGroup( this.generateFormControls(control.controls) ); // recursion
    control.formGroup = formGroup;
    return  formGroup;
  }
  private generateFormArray(control: ArrayModel): FormArray {
    const formArray = new FormArray( Object.entries( this.generateFormControls(control.controls)) // recursion
      .map( ([name, value]) => ({name, value}))
      .map( item => item.value) );
    control.formArray = formArray;
    return  formArray;
  }
  public addControl(control: FieldModel): void{
    this.controls.push(control);
    this.formGroup.addControl(control.controlName, this.generateFormControl(control));
  }
  public getControl(controlName: string): FieldModel {
    const controls =  this.iterateFindControl(this.controls, controlName);
    for (let control of controls){
      if (control instanceof FieldModel){
        return  control;
      }
    }
  }
  private iterateFindControl(controls: ControlsType, controlName: string): ControlsType{
    return controls.filter(control => {
      if (control instanceof FieldModel){
        if (controlName === control.controlName){
          return control;
        }
      }
      else if ( control instanceof GroupModel){
        return this.iterateFindControl(control.controls, controlName);
      }
      else if (control instanceof ArrayModel){
        return this.iterateFindControl(control.controls, controlName);
      }
    });


  }
}
