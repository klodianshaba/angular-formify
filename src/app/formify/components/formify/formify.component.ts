import {Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {FieldModel, ArrayModel, FormifyModel, GroupModel, SubmitModel, FieldTypes, ControlTypes} from '../../models';
import {FormArray, FormGroup, Validators} from '@angular/forms';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'formify',
  templateUrl: './formify.component.html',
  styleUrls: ['./formify.component.scss']
})
export class FormifyComponent implements OnInit , OnChanges {
  @Input('formify') set onForm(formify: FormifyModel) {this.formify = formify; }
  @Output('onPrefix') onPrefix: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('submitButton', {static: false}) submitButton: MatButton;
  public formify: FormifyModel;
  public fieldTypes = FieldTypes;
  public controlTypes = ControlTypes;
  get formGroup(): FormGroup {
    return this.formify.formGroup;
  }
  get controls(): (FieldModel | GroupModel | ArrayModel)[] {
    return this.formify.controls;
  }
  get loading(): boolean {
    return this.formify.submit.loading;
  }
  get submit(): SubmitModel {
    return this.formify.submit;
  }
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  onSubmit(): void {}

  onKeyPressAddContactForm(event: KeyboardEvent): void {
    if ( event.keyCode === 13) {
      this.submitButton._elementRef.nativeElement.click();
    }
  }
  handlePrefix(event: boolean): void {
    this.onPrefix.emit(event);
  }
}
