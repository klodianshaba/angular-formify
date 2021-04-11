import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {FieldModel} from './field.model';
import {GroupModel} from './group.model';
import {ArrayModel} from './array.model';
import {ControlsType} from './formify.model';
import {SubmitModel} from './submit.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
export class FormifyGenerate {
  public formGroup: FormGroup;
  public submit: SubmitModel;
  public $unSubscribe: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.formGroup = null;
  }
  protected generateFormControls(controls: ControlsType[]): { [controlId: string]: AbstractControl; } {
    const formControls: { [controlId: string]: AbstractControl; } = {};
    for (const control of controls) {
      if (control instanceof FieldModel) {
        Object.assign(formControls , { [control.controlName]: this.generateFormControl(control) });
      } else if (control instanceof GroupModel) {
        Object.assign(formControls , { [control.controlName]: this.generateFormGroup(control) });
      } else if (control instanceof ArrayModel) {
        Object.assign(formControls , { [control.controlName]: this.generateFormArray(control) });
      }
    }
    return formControls;
  }
  protected generateFormControl(control: FieldModel ): FormControl {
    const formControl = new FormControl(
      control.defaultValue , control.validators.map(validator => validator.validator )
        .filter(validator => validator)
    );
    control.formControl = formControl;
    control.submit = this.submit;
    return formControl;
  }
  protected generateFormGroup(control: GroupModel ): FormGroup {
    const formGroup = new FormGroup( this.generateFormControls(control.controls) ); // recursion
    control.formGroup = formGroup;
    control.submit = this.submit;
    control.change.pipe(takeUntil(this.$unSubscribe)).subscribe(change => {
      if (change) {this.formGroup.patchValue(change); }
    });
    return formGroup;
  }
  protected generateFormArray(control: ArrayModel): FormArray {
    const formArray = new FormArray( Object.entries( this.generateFormControls(control.controls)) // recursion
      .map( ([name, value]) => ({name, value}))
      .map( item => item.value)
    );
    control.formArray = formArray;
    control.submit = this.submit;
    control.change.pipe(takeUntil(this.$unSubscribe)).subscribe(change => {
      if (change){this.formGroup.patchValue(change); }
    });
    return formArray;
  }
}
