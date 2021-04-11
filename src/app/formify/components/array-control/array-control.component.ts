import {Component, OnInit, SimpleChanges, OnChanges, Input, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ArrayModel} from '../../models';
@Component({
  selector: 'formify-array',
  templateUrl: './array-control.component.html',
  styleUrls: ['./array-control.component.scss']
})
export class ArrayControlComponent implements OnInit, OnChanges, OnDestroy {
  private _arrayModel: ArrayModel = new ArrayModel({controlName: '', controls: []});
  @Input('arrayModel') set onArrayConfig( arrayModel: ArrayModel) {
    this._arrayModel = arrayModel;
    if (arrayModel) {
      this.formGroup = new FormGroup({[this.arrayModel.controlName]: this.arrayModel.formArray});
      this.formGroup.statusChanges.subscribe(status => {
        this.arrayModel.change.next(this.formGroup.value);
      });
    }
  }
  formGroup: FormGroup;
  get arrayModel(): ArrayModel{
    return this._arrayModel;
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.arrayModel){
      this.arrayModel.change.complete();
    }
  }
}
