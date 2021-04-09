import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ArrayModel, FieldModel, FormifyModel} from '../../models';

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
    return this.formGroup.get(this.arrayModel.controlName) as FormArray;
  }
}
