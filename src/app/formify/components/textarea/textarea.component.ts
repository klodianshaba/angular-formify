import {Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlComponent} from '../control/control.component';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'formify-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextareaComponent) , multi: true }]
})
export class TextareaComponent extends ControlComponent implements OnInit , OnChanges {
  constructor(protected formBuilder: FormBuilder) { super(formBuilder); }
  ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  ngOnInit(): void {super.ngOnInit(); }
}
