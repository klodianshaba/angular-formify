import {FormModel, FormState} from './form.model';

export class FormBuilderModel {
  public form( config: FormState ) {
    return new FormModel( config );
  }
  // public field( config: FieldInterface ) {
  //   return new FieldModel( config );
  // }
  // public group( config: GroupModel ) {
  //   return new GroupModel( config.controlName ,  config.controls );
  // }
  // public array( config: ArrayModel ) {
  //   this.field({controlName :  'f'});
  //   return new ArrayModel( config.controlName ,  config.controls );
  // }
}
