import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';

export abstract class FormifyManipulation{
  public addField(field: FieldModel): void {}
  public addGroup(group: GroupModel): void {}
  public addArray(array: ArrayModel): void {}
}
