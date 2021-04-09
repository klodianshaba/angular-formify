import {FormControl} from '@angular/forms';
import {ControlTypes} from './formify.model';
import {MyErrorStateMatcher} from './error-mathers.config';
import {ValidatorState} from './validator.model';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {OptionModel} from './option.model';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {MatAutocomplete} from '@angular/material/autocomplete';
import {SubmitModel} from './submit.model';
import {BehaviorSubject} from 'rxjs';
import {FormifyAccessibility} from './accessibility.abstract';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
export enum FieldTypes {
  input = '[INPUT] input field',
  textarea = '[textarea] textarea field',
  select = '[SELECT] select field',
  radio = '[RADIO] radio field',
  toggle = '[TOGGLE] toggle field',
  inputPhone = '[RADIO] input phone field',
}

export interface FieldState{
  formControl?: FormControl;
  controlName?: string;
  fieldType?: FieldTypes;
  defaultValue?: string | boolean;
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
  color?: ThemePalette;
  multiple?: boolean;
  readOnly?: boolean;
  none?: boolean;
  submit?: SubmitModel;
}
export class FieldModel extends FormifyAccessibility{
  formControl: FormControl;
  public controlName: string;
  readonly controlType: ControlTypes;
  fieldType: FieldTypes;
  defaultValue: string | boolean;
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
  color: ThemePalette;
  multiple: boolean;
  readOnly: boolean;
  none: boolean;
  submit: SubmitModel;

  constructor( config: FieldState ) {
    super();
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
    this.color = 'primary';
    this.multiple = false;
    this.readOnly = false;
    this.none = false;
    this.submit = new SubmitModel();
    Object.assign(this, config);
  }
  field(path: string): FieldModel | null {
   return null;
  }
  group(path: string): GroupModel | null {
    return null;
  }
  array(path: string): ArrayModel | null {
    return null;
  }
  get(path: string): FieldModel | GroupModel | ArrayModel | null {
    return null;
  }
}
