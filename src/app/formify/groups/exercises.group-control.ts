import {FieldModel, FieldTypes, GroupModel, GroupState} from '../models';
export class ExercisesGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  group: GroupModel = new GroupModel({
      controlName: 'exercises',
      label: 'Exercises:',
      controls: [
        new FieldModel({controlName: 'addExercise', label: 'Write your custom exercise', icon: 'directions_run' , placeholder: 'exercise'}),
        new FieldModel({controlName: 'running', label: 'Running', fieldType: FieldTypes.checkbox,  defaultValue: true}),
        new FieldModel({controlName: 'skipping', label: 'Skipping', fieldType: FieldTypes.checkbox, defaultValue: false}),
        new FieldModel({controlName: 'cycling', label: 'Cycling', fieldType: FieldTypes.checkbox,  defaultValue: false}),
        new FieldModel({controlName: 'burpee', label: 'Burpee', fieldType: FieldTypes.checkbox,  defaultValue: false}),
        new FieldModel({controlName: 'pool', label: 'Pool', fieldType: FieldTypes.checkbox,  defaultValue: false}),
        new FieldModel({controlName: 'surfing', label: 'Surfing', fieldType: FieldTypes.checkbox,  defaultValue: true}),
        new FieldModel({controlName: 'sledding', label: 'Sledding', fieldType: FieldTypes.checkbox,  defaultValue: false}),
        new FieldModel({controlName: 'skateboarding', label: 'Skateboarding', fieldType: FieldTypes.checkbox,  defaultValue: true}),
      ]
    });
    super(Object.assign(group , overwrite));
  }
}
