import {FormModel, FormState} from './form.model';
import {FieldModel, FieldState} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';

export class FormBuilderModel {
  public form( config: FormState ) {
    return new FormModel( config );
  }
  public field( config: FieldState ) {
    return new FieldModel( config );
  }
  public group( config: GroupModel ) {
    return new GroupModel( config.controlName ,  config.controls );
  }
  public array( config: ArrayModel ) {
    this.field({controlName :  'f'});
    return new ArrayModel( config.controlName ,  config.controls );
  }
}
