import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ArrayModel, FieldModel, FormifyModel, GroupModel} from '../../models';

@Component({
  selector: 'formify-array',
  templateUrl: './array-control.component.html',
  styleUrls: ['./array-control.component.scss']
})
export class ArrayControlComponent implements OnInit, OnChanges {
  private _arrayModel: ArrayModel = new ArrayModel({controlName: '', controls: []});
  @Input('arrayModel') set onArrayConfig( arrayModel: ArrayModel) {
    this._arrayModel = arrayModel;
    this.formGroup = new FormGroup( {[this.arrayModel.controlName]: this.arrayModel.formArray});
    this.formGroup.statusChanges.subscribe(status => {
      this.arrayModel.change.next(this.formGroup.value);
    });
  }
  formGroup: FormGroup;
  get arrayModel(): ArrayModel{
    return this._arrayModel;
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
