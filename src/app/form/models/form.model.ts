import {AbstractControl, FormGroup} from '@angular/forms';
import {FieldModel} from './field.model';

export interface FormState {
  controls: boolean;
  submit?: boolean;
  options?: boolean;
}

export  class FormModel{
  public formGroup: FormGroup;
  public loading: boolean;
  public controls: any;
  public submit: any;
  public options: any;
  constructor(config: FormState ) {
    this.loading = false;
    this.controls = null;
    this.submit = null;
    this.options = null;
    this.formGroup = new FormGroup({});
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
}
