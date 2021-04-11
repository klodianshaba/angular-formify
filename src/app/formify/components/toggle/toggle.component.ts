import {Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FieldControlComponent} from '../field-control/field-control.component';
@Component({
  selector: 'formify-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent) , multi: true }]
})
export class ToggleComponent extends FieldControlComponent implements OnInit , OnChanges {
  constructor(protected formBuilder: FormBuilder) { super(formBuilder); }
  ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  ngOnInit(): void {super.ngOnInit(); }
}
