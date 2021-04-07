import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, forwardRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, Output, EventEmitter} from '@angular/core';
import {ControlComponent} from '../control/control.component';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'formify-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent) , multi: true}
  ]
})
export class InputComponent extends ControlComponent implements ControlValueAccessor,   OnInit , OnChanges, AfterContentInit {
  @ViewChild('submit', {static: true}) submit: ElementRef;
  @Output('onPrefix') onPrefix: EventEmitter<boolean> = new EventEmitter<boolean>();
  // _submitted: boolean = false;
  // @Input()
  // public set submitted(value: boolean) {
  //   this._submitted = value;
  //   if (value) {
  //     this.submit.nativeElement.click();
  //   }
  // }
  // public get submitted(): boolean {
  //   return this._submitted;
  // }
  onChange: any;
  inputForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {super();}
  onSubmit(): void {
  }
  writeValue(obj: any): void {
    this.inputForm.controls['control'].setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // this.readOnly = isDisabled;
  }
  emitValue(): void {
    if (this.onChange) {
      this.onChange(this.inputForm.controls['control'].value);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // check if there has been any changes on the error and if it is null then clear the filterErrors
    super.ngOnChanges(changes);
  }
  ngAfterContentInit(): void {
    // setTimeout(() => {
    //   if (this.submitted) {
    //     this.submit.nativeElement.click();
    //   }
    // }, 100);
  }
  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      control: new FormControl(null, this.validators.map(validator => validator.validator).filter(validator => validator)),
    });

    (this.readOnly) ? this.inputForm.disable() : this.inputForm.enable();

    this.formControl.statusChanges.subscribe(status => {
      if (status === 'INVALID') {
        this.checkCustomErrors(this.control);
      }
    });
    this.submitted.subscribe(status => {
        if (status) {
          this.submit.nativeElement.click();
        }
    });
  }
  get control(): AbstractControl { return this.inputForm.get('control'); }
  handlePrefix(event: Event): void {
    this.onPrefix.emit(true);
  }

}
