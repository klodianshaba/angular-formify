import {Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlComponent} from '../control/control.component';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'formify-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent) , multi: true}
  ]
})
export class CheckboxComponent extends ControlComponent implements OnInit , OnChanges {
  constructor(protected formBuilder: FormBuilder) { super(formBuilder); }
  ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  ngOnInit(): void {super.ngOnInit(); }
}

