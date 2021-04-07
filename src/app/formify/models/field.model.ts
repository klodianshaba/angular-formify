import {FormControl} from '@angular/forms';
import {ControlTypes} from './formify.model';
import {MyErrorStateMatcher} from './error-mathers.config';
import {ValidatorState} from './validator.model';
import {ErrorStateMatcher} from '@angular/material/core';
import {OptionModel} from './option.model';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {MatAutocomplete} from '@angular/material/autocomplete';
export enum FieldTypes {
  input = '[INPUT] input field',
  textarea = '[textarea] textarea field',
  select = '[SELECT] select field',
  radio = '[RADIO] radio field',
  inputPhone = '[RADIO] input phone field',
}

export interface FieldState {
  formControl?: FormControl;
  controlName?: string;
  readonly controlType?: ControlTypes;
  fieldType?: FieldTypes;
  defaultValue?: string;
  errorStateMatcher?: ErrorStateMatcher;
  validators?: ValidatorState[];
  options?: OptionModel[];
  appearance?: string;
  useTranslation?: boolean;
  prefix?: string;
  dropDownInPrefix?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  hint?: string;
  autoComplete?: 'off' | 'on';
  icon?: string;
  multiple?: boolean;
  readOnly?: boolean;
  none?: boolean;
}
export class FieldModel{
  formControl: FormControl | null;
  public controlName: string | null;
  readonly controlType: ControlTypes;
  fieldType: FieldTypes;
  defaultValue: string | null;
  errorStateMatcher: ErrorStateMatcher;
  validators: ValidatorState[];
  options: OptionModel[];
  appearance: MatFormFieldAppearance;
  useTranslation: boolean;
  prefix: string;
  dropDownInPrefix: boolean;
  type: string;
  label: string;
  placeholder: string;
  hint: string;
  autoComplete: 'off' | 'on' ;
  icon: string;
  multiple: boolean;
  readOnly: boolean;
  none: boolean;

  constructor( config: FieldState ) {
    this.formControl = null;
    this.controlName = null;
    this.controlType = ControlTypes.formField;
    this.fieldType = FieldTypes.input;
    this.defaultValue = null;
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.validators = [];
    this.options = null;
    this.appearance = 'standard';
    this.useTranslation = false;
    this.prefix = null;
    this.dropDownInPrefix = false;
    this.type = null;
    this.label = null;
    this.placeholder = null;
    this.hint = null;
    this.autoComplete = 'on';
    this.icon = null;
    this.multiple = false;
    this.readOnly = false;
    this.none = false;
    Object.assign(this, config);
  }
}
