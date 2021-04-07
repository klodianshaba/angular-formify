import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ValidatorModel} from '../../models/validator.model';
import {ControlTypes } from '../../models/formify.model';
import {FieldModel } from '../../models/field.model';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {OptionsModel} from '../../models/options.model';
import {ErrorStateMatcher} from '@angular/material/core';
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
  get validators(): ValidatorModel[] {
    return this.fieldModel.validators;
  }
  get options(): OptionsModel[] {
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
  get appearance(): string {
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
  public errors(control: AbstractControl): ValidatorModel[] {
    const firstError: ValidatorModel[] = [];
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
  ngOnChanges(changes: SimpleChanges) {}
}

