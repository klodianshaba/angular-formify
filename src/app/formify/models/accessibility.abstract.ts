import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
export abstract class FormifyAccessibility {
  public get(path: string): (FieldModel | GroupModel | ArrayModel) | null{ return  null; }
  public field(path: string): FieldModel | null { return null; }
  public group(path: string): GroupModel | null { return null; }
  public array(path: string): ArrayModel | null{ return null; }
}
