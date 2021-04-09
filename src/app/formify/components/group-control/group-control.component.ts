import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {ArrayModel, GroupModel} from '../../models';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'formify-group',
  templateUrl: './group-control.component.html',
  styleUrls: ['./group-control.component.scss']
})
export class GroupControlComponent implements OnInit, OnChanges {
  private _groupModel: GroupModel = new GroupModel('', []);
  @Input('groupModel') set onArrayConfig( groupModel: GroupModel) {this._groupModel = groupModel; }
  formGroup: FormGroup;
  get groupModel(): GroupModel{
    return this._groupModel;
  }
  constructor(protected formBuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.formGroup = this.groupModel.formGroup;
    this.formGroup.statusChanges.subscribe(status => {
      console.log(status);
      this.groupModel.change.next(this.formGroup.value);
    });
    console.log(this.formGroup);
  }
  get modelFormGroup(): FormGroup{
    return this.formGroup.get(this.groupModel.controlName) as FormGroup;
  }
}
