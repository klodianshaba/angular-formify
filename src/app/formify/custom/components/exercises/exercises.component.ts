import {Component, OnInit} from '@angular/core';
import {GroupControlComponent} from '../../../components/group-control/group-control.component';
import {FieldModel, FieldTypes} from '../../../models';
import {AbstractControl} from '@angular/forms';
@Component({
  selector: 'formify-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent extends GroupControlComponent implements OnInit {
  public  fieldTypes = FieldTypes;
  constructor() { super(); }
  ngOnInit(): void {
    super.ngOnInit();
  }
  addExercise(): void{
    const AddExerciseField: AbstractControl = this.groupModel.formGroup.get('addExercise');
    if (AddExerciseField.value) {
      if (AddExerciseField.value.length > 0) {
        this.groupModel.addControl(new FieldModel({
          controlName: AddExerciseField.value,
          label: AddExerciseField.value,
          fieldType: FieldTypes.checkbox,
          defaultValue: true
        }));
        AddExerciseField.reset();
      }
    }
  }
  onKeyPressAddExercise(event: KeyboardEvent): void{
    if (event.keyCode === 13){
      this.addExercise();
    }
  }
}
