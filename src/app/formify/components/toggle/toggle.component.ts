import {Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlComponent} from '../control/control.component';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'formify-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent) , multi: true }]
})
export class ToggleComponent extends ControlComponent implements OnInit , OnChanges {
  constructor(protected formBuilder: FormBuilder) { super(formBuilder); }
  ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  ngOnInit(): void {super.ngOnInit(); }
}
