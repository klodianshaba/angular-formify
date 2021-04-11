import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubmitModel} from '../../models';
@Component({
  selector: 'formify-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  @Input('submit') submit: SubmitModel = new SubmitModel();
  @Input('disabled') disabled: boolean = false;
  @Output('onSubmit') onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit(): void {}
  onHandleSubmit(): void {
    this.onSubmit.emit(true);
    this.submit.status.next(true);
  }
}
