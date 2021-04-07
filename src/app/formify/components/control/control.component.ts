import {Component, ElementRef, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {FieldModel, ValidatorModel, ControlTypes, OptionModel, ValidatorState} from '../../models';
import {AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {BehaviorSubject} from 'rxjs';
@Component({
  selector: 'formify-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements ControlValueAccessor, OnInit , OnChanges {
  private _fieldModel: FieldModel = new FieldModel({controlName: null});
  @Input('fieldModel') set noFieldConfig( fieldModel: FieldModel) {this._fieldModel = fieldModel; }
  @Output('onPrefix') onPrefix: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(protected formBuilder: FormBuilder) {}
  @ViewChild('submit', {static: true}) submit: ElementRef;
  onChange: any;
  formGroup: FormGroup;
  writeValue(obj: any): void {
    this.formGroup.controls['control'].setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void { }
  emitValue(): void {
    if (this.onChange) { this.onChange(this.formGroup.controls['control'].value); }
  }
  ngOnChanges(changes: SimpleChanges): void { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      control: new FormControl(null, this.validators.map(validator => validator.validator).filter(validator => validator)),
    });
    (this.readOnly) ? this.formGroup.disable() : this.formGroup.enable();
    this.formControl.statusChanges.subscribe(status => {
      if (status === 'INVALID') { this.checkCustomErrors(this.control); }
    });
    this.submitted.subscribe(status => {
      if (status) { this.submit.nativeElement.click(); }
    });
  }
  get control(): AbstractControl { return this.formGroup.get('control'); }
  handlePrefix(event: Event): void { this.onPrefix.emit(true); }

  get fieldModel(): FieldModel {
    return this._fieldModel;
  }
  get formControl(): FormControl {
    return this.fieldModel.formControl;
  }
  get autoComplete(): 'off' | 'on' {
    return  this.fieldModel.autoComplete;
  }
  get submitted(): BehaviorSubject<boolean> {
    return this.fieldModel.submit.status;
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
  get placeholder(): string {
    return this.fieldModel.placeholder;
  }
  get hint(): string {
    return this.fieldModel.hint;
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
}

