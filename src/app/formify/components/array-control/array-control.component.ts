import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ArrayModel, FieldModel, FormifyModel, GroupModel} from '../../models';

@Component({
  selector: 'formify-array-control',
  templateUrl: './array-control.component.html',
  styleUrls: ['./array-control.component.scss']
})
export class ArrayControlComponent implements OnInit, OnChanges {
  private _arrayModel: ArrayModel = new ArrayModel({controlName: '', controls: []});
  @Input('arrayModel') set onArrayConfig( arrayModel: ArrayModel) {this._arrayModel = arrayModel; }
  formGroup: FormGroup;
  get arrayModel(): ArrayModel{
    return this._arrayModel;
  }
  private group = new GroupModel({ controlName: 'contact', controls: [
      new FieldModel({
        controlName: 'phone', label: 'number phone', placeholder: 'phone', autoComplete: 'off',
        validators: [
          {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
        ]
      }),
      new FieldModel({
        controlName: 'address', label: 'your address', placeholder: 'address', autoComplete: 'off',
        validators: [
          {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
        ]
      }),
    ]});
  constructor(protected formBuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.formGroup = new FormGroup( {[this.arrayModel.controlName]: this.arrayModel.formArray});
    this.formGroup.statusChanges.subscribe(status => {
      console.log(status);
      this.arrayModel.change.next(this.formGroup.value);
    });
    console.log(this.arrayModel);
  }
  get formArray(): FormArray{
    // return this.formGroup.get(this.arrayModel.controlName) as FormArray;
    return this.formGroup.get(this.arrayModel.controlName) as FormArray;
  }
  addGroup(): void {
    this.arrayModel.addGroup(this.group);
  }
}
