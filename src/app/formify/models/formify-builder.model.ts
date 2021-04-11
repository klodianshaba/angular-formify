import {FormifyModel, FormifyState} from './formify.model';
import {FieldModel, FieldState} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
export class FormifyBuilderModel {
  public form( config: FormifyState ) {
    return new FormifyModel( config );
  }
  public field( config: FieldState ) {
    return new FieldModel( config );
  }
  public group( config: GroupModel ) {
    return new GroupModel( config );
  }
  public array( config: ArrayModel ) {
    this.field({controlName :  'f'});
    return new ArrayModel( config );
  }
}
