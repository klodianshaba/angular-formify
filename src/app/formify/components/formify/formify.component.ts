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

  @Input('form') set onForm(form: FormifyModel) {this.formModel = form; }
  @Output('onPrefix') onPrefix: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('submitButton', {static: false}) submitButton: MatButton;
  public formModel: FormifyModel;
  public fieldTypes = FieldTypes;
  public controlTypes = ControlTypes;
  get formGroup(): FormGroup {
    return this.formModel.formGroup;
  }
  get controls(): (FieldModel | GroupModel | ArrayModel)[] {
    return this.formModel.controls;
  }
  get loading(): boolean {
    return this.formModel.loading;
  }
  get SubmitModel(): SubmitModel {
    return this.formModel.submit;
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
