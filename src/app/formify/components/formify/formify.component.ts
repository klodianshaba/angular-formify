import {Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {ArrayModel, FormModel, GroupModel, SubmitModel} from '../../models/form.model';
import {FormArray, FormGroup, Validators} from '@angular/forms';
import { FieldTypes, ControlTypes} from '../../models/formify.model';
import { FieldModel } from '../../models/field.model';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'formify-formify',
  templateUrl: './formify.component.html',
  styleUrls: ['./formify.component.scss']
})
export class FormifyComponent implements OnInit {

  @Input('form') set onForm(form: FormModel) {this.formModel = form; }
  @Output('onPrefix') onPrefix: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('submitButton', {static: false}) submitButton: MatButton;
  public formModel: FormModel;
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
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}

  onSubmit() {}

  onKeyPressAddContactForm(event): void {
    if ( event.keyCode === 13) {
      this.submitButton._elementRef.nativeElement.click();
    }
  }
  handlePrefix(event) {
    this.onPrefix.emit(event);
  }
}
