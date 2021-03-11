import {FormGroup} from '@angular/forms';

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
}
