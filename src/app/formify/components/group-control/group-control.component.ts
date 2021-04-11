import {Component, Input, OnInit, SimpleChanges, OnChanges, ChangeDetectorRef} from '@angular/core';
import {ArrayModel, FieldModel, GroupModel} from '../../models';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'formify-group',
  templateUrl: './group-control.component.html',
  styleUrls: ['./group-control.component.scss']
})
export class GroupControlComponent implements OnInit, OnChanges {
  private _groupModel: GroupModel = new GroupModel({controlName: '' , controls: []});
  @Input('groupModel') set onArrayConfig( groupModel: GroupModel | any) {
    this._groupModel = groupModel;
    if (groupModel) {
      this.formGroup = groupModel.formGroup;
      this.formGroup.statusChanges.subscribe(status => {
        this.groupModel.change.next(this.formGroup.value);
      });
    }
  }
  formGroup: FormGroup;
  get groupModel(): GroupModel{
    return this._groupModel;
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
