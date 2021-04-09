import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ArrayModel, FieldModel, FormifyModel} from '../../models';

@Component({
  selector: 'formify-array-control',
  templateUrl: './array-control.component.html',
  styleUrls: ['./array-control.component.scss']
})
export class ArrayControlComponent implements OnInit, OnChanges {
  private _arrayModel: ArrayModel = new ArrayModel('', []);
  @Input('arrayModel') set onArrayConfig( arrayModel: ArrayModel) {this._arrayModel = arrayModel; }
  formGroup: FormGroup;
  formify: FormifyModel;
  get arrayModel(): ArrayModel{
    return this._arrayModel;
  }
  constructor(protected formBuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.formify = new FormifyModel({
      controls: [this.arrayModel]
    });
    this.formGroup = this.formify.formGroup;

    // console.log(this.formify);
    // console.log(this.arrayModel);
  }
  get formArray(): FormArray{
    return this.formGroup.get(this.arrayModel.controlName) as FormArray;
  }
  emitValue(): void{
    this.arrayModel.change.next(this.formGroup.value);
  }

}
