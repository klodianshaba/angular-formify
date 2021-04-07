import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FieldModel, ValidatorModel, ControlTypes, OptionModel, ValidatorState} from '../../models';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
@Component({
  selector: 'formify-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnChanges , OnInit {
  private _fieldModel: FieldModel = new FieldModel({controlName: null});
  @Input('fieldModel') set noFieldConfig( fieldModel: FieldModel) {this._fieldModel = fieldModel; }
  constructor() {}
  get fieldModel(): FieldModel {
    return this._fieldModel;
  }
  get formControl(): FormControl {
    return this.fieldModel.formControl;
  }
  get errorStateMatcher(): ErrorStateMatcher {
    return this.fieldModel.errorStateMatcher;
  }
  get validators(): ValidatorState[] {
    return this.fieldModel.validators;
  }
  get options(): OptionModel[] {
    return this.fieldModel.options;
  }
  get controlType(): ControlTypes {
    return this.fieldModel.controlType;
  }
  get controlName(): string {
    return this.fieldModel.controlName;
  }
  get useTranslation(): boolean {
    return this.fieldModel.useTranslation;
  }
  get icon(): string {
    return this.fieldModel.icon;
  }
  get label(): string {
    return this.fieldModel.label;
  }
  get appearance(): MatFormFieldAppearance {
    return this.fieldModel.appearance;
  }
  get type(): string {
    return this.fieldModel.type;
  }
  get none(): boolean {
    return this.fieldModel.none;
  }
  get multiple(): boolean {
    return this.fieldModel.multiple;
  }
  get prefix(): string {
    return  this.fieldModel.prefix;
  }
  get dropDownInPrefix(): boolean {
    return this.fieldModel.dropDownInPrefix;
  }
  get readOnly(): boolean {
    return  this.fieldModel.readOnly;
  }
  public errors(control: AbstractControl): ValidatorState[] {
    const firstError: ValidatorState[] = [];
    if (control.invalid) {
      for (const validator of this.validators) {
        if (control.hasError(validator.errorCode)) {
          firstError.push(validator);
          break;
        }
      }
    }
    return firstError;
  }
  public checkCustomErrors(control: AbstractControl): void {
    if (this.formControl.errors) {
      Object.entries( this.formControl.errors).map(([name, value]) => ({name , value})).forEach( error => {
        this.validators.filter(item => !item.validator).forEach(validator => {
          if (validator.errorCode === error.name ) {
            control.setErrors({ [error.name]: true });
          }
        });
      });
    }
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
}

