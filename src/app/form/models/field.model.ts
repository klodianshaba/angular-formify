import {FormControl} from '@angular/forms';

export interface FieldState {
  formControl?: FormControl;
  controlName?: string;
  // readonly controlType?: ControlTypes;
  // fieldType?: FieldTypes;
  defaultValue?: string;
  // errorStateMatcher?: ErrorStateMatcher;
  // validators?: FieldValidator[];
  // options?: OptionsModel[];
  appearance?: string;
  useTranslation?: boolean;
  prefix?: string;
  dropDownInPrefix?: boolean;
  type?: string;
  label?: string;
  icon?: string;
  multiple?: boolean;
  readOnly?: boolean;
  none?: boolean;
}
export class FieldModel{
  formControl: FormControl | null;
  public controlName: string | null;
  // readonly controlType: ControlTypes;
  // fieldType: FieldTypes;
  defaultValue: string | null;
  // errorStateMatcher: ErrorStateMatcher;
  // validators: FieldValidator[];
  // options: OptionsModel[];
  appearance: string | null;
  useTranslation: boolean;
  prefix: string | null;
  dropDownInPrefix: boolean;
  type: string | null;
  label: string | null;
  icon: string | null;
  multiple: boolean;
  readOnly: boolean;
  none: boolean;

  constructor( config: FieldState ) {
    this.formControl = null;
    this.controlName = null;
    // this.controlType = ControlTypes.formField;
    // this.fieldType = FieldTypes.input;
    this.defaultValue = null;
    // this.errorStateMatcher = new MyErrorStateMatcher();
    // this.validators = [];
    // this.options = null;
    this.appearance = null;
    this.useTranslation = true;
    this.prefix = null;
    this.dropDownInPrefix = false;
    this.type = null;
    this.label = null;
    this.icon = null;
    this.multiple = false;
    this.readOnly = false;
    this.none = false;
    Object.assign(this, config);
  }
}
