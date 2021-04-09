import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
import {ControlsType} from './formify.model';

export class FormifyAccessibilityModel {
  public controls: ControlsType;
  public get(path: string): FieldModel | null{
    const controls =  this.iterateFindControl(this.controls, path);
    for (const control of controls){
      if (control instanceof FieldModel){
        return  control;
      }
    }
    return null;
  }
  private iterateFindControl(controls: ControlsType, controlName: string): ControlsType{
    return controls.filter(control => {
      if (control instanceof FieldModel){
        if (controlName === control.controlName){
          return control;
        }
        return null;
      }
      else if ( control instanceof GroupModel){
        return this.iterateFindControl(control.controls, controlName);
      }
      else if (control instanceof ArrayModel){
        return this.iterateFindControl(control.controls, controlName);
      }
      return null;
    });
  }
  public getArray(path: string): ArrayModel | null{
    for (const control of this.controls){
      if (control instanceof ArrayModel){
        return  control;
      }
    }
    return null;
  }
  public getGroup(path: string): GroupModel | null{
    for (const control of this.controls){
      if (control instanceof GroupModel){
        return  control;
      }
    }
    return null;
  }
}
