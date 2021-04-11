import {ValidatorFn} from '@angular/forms';
export interface ValidatorState {
  validator?: ValidatorFn;
  errorCode?: string;
  description?: string;
  translationCode?: string;
  parameters?: any;
}
export class ValidatorModel {
  validator: ValidatorFn;
  errorCode: string;
  description: string;
  translationCode: string;
  parameters: any;
  constructor( config?: ValidatorState) {
    this.validator = null;
    this.errorCode = null;
    this.description = null;
    this.translationCode = null;
    this.parameters = null;
    Object.assign(this, config);
  }
}
