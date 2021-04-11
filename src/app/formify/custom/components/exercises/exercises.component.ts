import { Component, OnInit } from '@angular/core';
import {GroupControlComponent} from '../../../components/group-control/group-control.component';
import {FieldModel, FormifyModel} from '../../../models';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'formify-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent extends GroupControlComponent implements OnInit {
  public formifyAddExercise: FormifyModel = new FormifyModel({
    controls: [
      new FieldModel({controlName: 'AddExercise', label: 'Write your custom exercise', placeholder: 'exercise'})
    ]
  });
  constructor() { super(); }
  ngOnInit(): void {
    super.ngOnInit();
  }
  addExercise(): void{
    const AddExerciseField: AbstractControl = this.formifyAddExercise.formGroup.get('AddExercise');
    if (AddExerciseField.value.length > 0){
      this.groupModel.addControl( new FieldModel({controlName: AddExerciseField.value, label: AddExerciseField.value,  defaultValue: true}));
      AddExerciseField.reset();
    }
  }

  onKeyPressAddExercise(event: KeyboardEvent): void{
    if (event.keyCode === 13){
      this.addExercise();
    }
  }
}
